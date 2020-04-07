import { useCallback, useRef } from 'react';

/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScrollToTop(ref) {
  const scrollRef = useRef();
  if (ref) {
    scrollRef.current = ref;
  }

  const scrollToTop = useCallback((top = 0) => {
    setTimeout(() => scrollRef.current && scrollRef.current.scrollTo(top), 0);
  }, []);
  return { scrollRef, scrollToTop };
}
