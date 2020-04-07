import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScroll() {
  const [pos, setPos] = useState([0, 0]);
  const scrollRef = useRef();

  useEffect(() => {
    function handleScroll() {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
    }
    const node = scrollRef.current;
    node.addEventListener('scroll', handleScroll, false);
    return () => {
      node.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  const scrollToTop = useCallback((top = 0) => {
    setTimeout(() => scrollRef.current && scrollRef.current.scrollTo(top), 0);
  }, []);

  return { x: pos[0], y: pos[1], scrollRef, scrollToTop };
}
