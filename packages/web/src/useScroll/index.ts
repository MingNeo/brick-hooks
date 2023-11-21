import { useState, useRef, useCallback, useEffect, useMemo, MutableRefObject } from 'react'
import { isBrowser } from '../utils'

/**
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScroll({
  root,
  rootRef,
  onScroll: onScrollChange,
}: {
  root?: Element | (Window & typeof globalThis)
  rootRef?: MutableRefObject<Element>
  onScroll?: (scrollInfo: { left: number; top: number; x: number; y: number }) => void
} = {}) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const scrollRef = useRef<any>(root || (isBrowser ? window : undefined))
  const timerRef = useRef<any>()
  const onScrollRef = useRef<any>()

  useEffect(() => {
    let ticking: number | null = null
    const rootNode = rootRef?.current || scrollRef.current
    const onScroll = onScrollRef.current = (e) => {
      // 使用requestAnimationFrame做防抖
      if (ticking === null) {
        ticking = window.requestAnimationFrame(() => {
          const { scrollLeft, scrollTop } = isWindow(rootNode)
            ? document.documentElement || document.body || {}
            : rootNode || {}
          setPos({ x: scrollLeft, y: scrollTop })
          onScrollChange?.({ left: scrollLeft, top: scrollTop, x: scrollLeft, y: scrollTop })
          ticking = null
        })
      }
    }

    isBrowser && rootNode?.addEventListener?.('scroll', onScroll)
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
      isBrowser && rootNode?.removeEventListener?.('scroll', onScroll)
    }
  }, [])

  const scrollToTop = useCallback((y: number = 0) => {
    timerRef.current = setTimeout(() => {
      const rootNode = rootRef?.current || scrollRef.current
      rootNode?.scrollTo?.({ y, top: y })
      onScrollRef.current?.()
    }, 0)
  }, [])

  const scrollToLeft = useCallback((x: number = 0) => {
    timerRef.current = setTimeout(() => {
      const rootNode = rootRef?.current || scrollRef.current
      rootNode?.scrollTo?.({ x, left: x })
    }, 0)
  }, [])

  return useMemo(() => {
    return { ...pos, left: pos.x, top: pos.y, rootRef: scrollRef, scrollToTop, scrollToLeft }
  }, [pos, scrollToTop, scrollToLeft])
}

function isWindow(node) {
  return node && (node === window || node === document)
}
