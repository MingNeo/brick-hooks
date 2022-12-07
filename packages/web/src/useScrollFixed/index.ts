import { MutableRefObject, useMemo, useRef } from 'react'
import { isBrowser } from '../utils'
import useScroll from '../useScroll'

type NodeRef = MutableRefObject<Element | undefined> | Element | undefined

interface GetLimitOptions {
  root: NodeRef
  target: NodeRef
}

type Limit = (() => number) | number

type CheckIsFixed = (args: {
  offset: number // 滚动的距离
  limit: number // 判断是否悬浮的偏移量
  root: NodeRef
  target: NodeRef
}) => boolean

const DefaultFixedStyle = {
  zIndex: 100,
  position: 'fixed',
}

function useScrollFixed(
  options: {
    target?: MutableRefObject<any>
    root?: MutableRefObject<any>
    limit?: Limit
    fixedStyle?: Record<string, any>
    horizontal?: boolean
    onScroll?: () => void
    checkIsFixed?: CheckIsFixed
    initialFixed?: boolean
  } = {},
) {
  const {
    limit = 200,
    target,
    root,
    fixedStyle: propFixedStyle = {},
    horizontal = false,
    initialFixed = false,
    onScroll,
    checkIsFixed,
  } = options
  const propFixedStyleRef = useRef(propFixedStyle)

  const targetRef = useRef<any>(target?.current ?? (isBrowser ? window : undefined))
  if (target) targetRef.current = target?.current ?? (isBrowser ? window : undefined)

  const { x, y, rootRef } = useScroll({ rootRef: root, onScroll })

  const fixedInfoRef = useRef({
    isFixed: initialFixed,
    fixedStyle: initialFixed ? { ...DefaultFixedStyle, ...propFixedStyleRef.current } : {},
  })

  const fixedInfo = useMemo(() => {
    const old = fixedInfoRef.current
    const current = getFixedInfo({
      offset: horizontal ? x : y,
      limit,
      root: rootRef?.current || window,
      target: targetRef.current,
      checkIsFixed,
      fixedStyle: old.fixedStyle,
    })
    // 防止每次滚动都触发渲染，只有当悬浮状态或样式发生变化时才触发渲染
    if (current.isFixed !== old.isFixed || checkObjDiff(current.fixedStyle, old.fixedStyle)) {
      fixedInfoRef.current = current
    }
    return old
  }, [limit, horizontal, x, y, rootRef])

  return useMemo(() => ({ targetRef, rootRef, ...fixedInfo }), [rootRef, fixedInfo])
}

export default useScrollFixed

/**
 * 获取限制值
 */
function getLimit(limit: Limit, limitOptions: GetLimitOptions) {
  return typeof limit === 'function' ? limit.apply(limitOptions) : limit
}

/**
 * 获取滚动的信息
 */
function getFixedInfo({
  offset,
  limit,
  root,
  target,
  checkIsFixed = ({ offset, limit }) => offset > limit,
  fixedStyle,
}: {
  offset: number
  limit: Limit
  root?: Element
  target?: Element
  checkIsFixed?: CheckIsFixed
  fixedStyle?: Record<string, any>
}) {
  const usedLimit = getLimit(limit, { root, target })
  const isFixed = checkIsFixed({ offset, limit: usedLimit, root, target })
  return { isFixed, fixedStyle: isFixed ? { ...DefaultFixedStyle, top: 0, ...fixedStyle } : {} }
}

/**
 * 检查两个对象是否相等
 */
function checkObjDiff(a: Record<string, any>, b: Record<string, any>) {
  return Object.keys(a).some((key) => a[key] !== b[key])
}
