import { useState, useRef, useCallback, useEffect, useMemo, Ref } from 'react'
import { isBrowser } from '../utils'

/**
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScroll({ root, onScroll: onScrollChange }: { root?: Element|Ref<Element>|Window & typeof globalThis; onScroll?: any; } = {}) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const scrollRef = useRef<any>((root as any)?.current || root || (isBrowser ? window : undefined))
  if (root) scrollRef.current = (root as any)?.current || root || (isBrowser ? window : undefined)
  const timerRef = useRef<any>()

  useEffect(() => {
    let ticking: number | null = null
    const onScroll = () => {
      // 使用requestAnimationFrame做防抖
      if (isBrowser && ticking === null) {
        ticking = window.requestAnimationFrame(() => {
          const { scrollLeft, scrollTop } = isWindow(scrollRef.current)
            ? document.documentElement
            : scrollRef.current || {}
          setPos({ x: scrollLeft, y: scrollTop })
          onScrollChange?.({ left: scrollLeft, top: scrollTop, x: scrollLeft, y: scrollTop })
          ticking = null
        })
      }
    }
    scrollRef.current?.addEventListener('scroll', onScroll)
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
      scrollRef.current?.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = useCallback((y = 0) => {
    timerRef.current = setTimeout(() => {
      if (isWindow(scrollRef.current)) {
        document.documentElement.scrollTop = 0
      } else {
        scrollRef.current?.scrollTo?.({ y })
      }
    }, 0)
  }, [])

  const scrollToLeft = useCallback((x = 0) => {
    timerRef.current = setTimeout(() => {
      if (isWindow(scrollRef.current)) {
        document.documentElement.scrollLeft = 0
      } else {
        scrollRef.current?.scrollTo?.({ x })
      }
    }, 0)
  }, [])

  return useMemo(() => {
    return { ...pos, rootRef: scrollRef, scrollToTop, scrollToLeft }
  }, [pos, scrollToTop, scrollToLeft])
}

function isWindow(node) {
  return node && (node === window || node === document)
}