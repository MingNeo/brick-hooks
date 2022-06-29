import { MutableRefObject, useMemo, useRef } from 'react';
import { isBrowser } from '../utils';
import useScroll from '../useScroll';

interface GetLimitOptions {
  root: { current?: any; x?: number; y?: number };
  target: { current?: any; x?: number; y?: number };
}

type Limit = (() => number) | number;

function useScrollFixed(
  options: {
    target?: MutableRefObject<any> | any;
    root?: MutableRefObject<any> | any;
    limit?: Limit;
    fixedStyle?: Record<string, any>;
    horizontal?: boolean;
    onScroll?: () => void;
  } = {}
) {
  const { limit = 200, target, root, fixedStyle: propFixedStyle = {}, horizontal = false, onScroll } = options;
  const propFixedStyleRef = useRef(propFixedStyle);

  const targetRef = useRef<any>(target?.current ?? target ?? (isBrowser ? window : undefined));
  if (target) targetRef.current = target?.current ?? target ?? (isBrowser ? window : undefined);

  const { x, y, rootRef } = useScroll({ root, onScroll });

  const fixedInfoRef = useRef({ isFixed: false, fixedStyle: {}, ...propFixedStyleRef.current });

  const fixedInfo = useMemo(() => {
    const old = fixedInfoRef.current;
    const current = getFixedInfo({
      offset: horizontal ? x : y,
      limit,
      root: rootRef?.current || window,
      target: targetRef.current,
    });
    // 防止每次滚动都触发渲染，只有当悬浮状态或样式发生变化时才触发渲染
    if (current.isFixed !== old.isFixed || checkObjDiff(current.fixedStyle, old.fixedStyle)) {
      fixedInfoRef.current = current;
    }
    return old;
  }, [limit, horizontal, x, y, rootRef]);

  return useMemo(() => ({ targetRef, rootRef, ...fixedInfo }), [rootRef, fixedInfo]);
}

export default useScrollFixed;

/**
 * 获取限制值
 */
function getLimit(limit: Limit, limitOptions: GetLimitOptions) {
  return typeof limit === 'function' ? limit.apply(limitOptions) : limit;
}

/**
 * 获取滚动的信息
 */
function getFixedInfo({ offset, limit, root, target }) {
  const usedLimit = getLimit(limit, { root, target });
  const isFixed = offset > usedLimit;
  const fixedStyle = isFixed
    ? {
        zIndex: 100,
        position: 'fixed',
        top: usedLimit,
      }
    : {};
  return { isFixed, fixedStyle };
}

/**
 * 检查两个对象是否相等
 */
function checkObjDiff(a: Record<string, any>, b: Record<string, any>) {
  return Object.keys(a).some((key) => a[key] !== b[key]);
}
