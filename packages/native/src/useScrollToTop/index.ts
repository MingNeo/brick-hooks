import { useCallback, useRef } from 'react'

/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScrollToTop(ref: any) {
  const scrollRef = useRef<any>()
  if (ref) {
    scrollRef.current = ref
  }

  const scrollToTop = useCallback((top = 0) => {
    setTimeout(() => {
      if (scrollRef.current && scrollRef.current.scrollTo) {
        scrollRef.current.scrollTo({ index: top })
      } else if (scrollRef.current && scrollRef.current.scrollTop) {
        scrollRef.current.scrollTop(top)
      }
    }, 0)
  }, [])
  return { scrollRef, scrollToTop }
}
