import { useState, useRef, useCallback } from 'react'
import useEventListener from '../useEventListener'

/**
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScroll(containerRef?: any) {
  const [pos, setPos] = useState([0, 0])
  const scrollRef = useRef<any>(containerRef.current)
  if (containerRef.current) scrollRef.current = containerRef.current

  useEventListener(
    'scroll',
    () => {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop])
    },
    { dom: scrollRef.current }
  )

  const scrollToTop = useCallback((top = 0) => {
    setTimeout(() => scrollRef.current && scrollRef.current.scrollTo(top), 0)
  }, [])

  const [x, y] = pos

  return { x, y, scrollRef, scrollToTop }
}
