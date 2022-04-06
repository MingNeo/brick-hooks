import { useState, useRef, useCallback, useEffect, useMemo } from 'react'

/**
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScroll({ ref, onScroll: onScrollChange }: { ref?: any; onScroll?: any } = {}) {
  const [pos, setPos] = useState([0, 0])
  const scrollRef = useRef<any>(ref?.current || window)
  if (ref?.current) scrollRef.current = ref.current || window

  useEffect(() => {
    const onScroll = (e) => {
      const { scrollLeft, scrollTop } = isWindow(scrollRef.current) ? document.documentElement : scrollRef.current || {}
      setPos([scrollLeft, scrollTop])
      onScrollChange?.(e, { left: scrollLeft, top: scrollTop })
    }
    scrollRef.current?.addEventListener('scroll', onScroll)
    return () => {
      scrollRef.current?.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = useCallback((top = 0) => {
    setTimeout(() => {
      if (isWindow(scrollRef.current)) {
        document.documentElement.scrollTop = 0
      } else {
        scrollRef.current?.scrollTo?.({ y: top })
      }
    }, 0)
  }, [])

  const scrollToLeft = useCallback((top = 0) => {
    setTimeout(() => {
      if (isWindow(scrollRef.current)) {
        document.documentElement.scrollTop = 0
      } else {
        scrollRef.current?.scrollTo?.({ y: top })
      }
    }, 0)
  }, [])

  return useMemo(() => {
    const [x, y] = pos
    return { x, y, scrollRef, scrollToTop, scrollToLeft }
  }, [pos, scrollToTop, scrollToLeft])
}

function isWindow(node) {
  return node && (node === window || node === document)
}
