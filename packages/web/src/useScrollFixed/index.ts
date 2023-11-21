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

// useScrollFixed 是一个用于判断窗口滚动是否超过限定值时浮动窗口的自定义 Hook
function useScrollFixed(
  options: {
    target?: MutableRefObject<any>  // 被测试窗口节点
    root?: MutableRefObject<any>  // 窗口滚动的根节点
    limit?: Limit // 判断滚动是否超过窗口头部的数值
    fixedStyle?: Record<string, any> // 这里传入的 record 键值对表示特定的 fixed 样式
    horizontal?: boolean // 默认不传即 vertical 滚动
    onScroll?: () => void // 滚动监听时的回调
    checkIsFixed?: CheckIsFixed // 一个函数，用来根据滚动偏移量和限制偏移量来判断当前是否 fixed
    initialFixed?: boolean; // 当页面刚开始是是否要渲染 fixed
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

  const { x, y, rootRef, scrollToTop, scrollToLeft } = useScroll({ rootRef: root, onScroll })

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
      return current
    }
    return old
  }, [limit, horizontal, x, y, rootRef])

  return useMemo(
    () => ({ targetRef, rootRef, ...fixedInfo, scrollToTop, scrollToLeft }),
    [rootRef, fixedInfo, scrollToTop, scrollToLeft],
  )
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
  checkIsFixed = ({ offset, limit }) => offset > limit, // 默认函数判断滚动超过 limit 时为固定顶部
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
