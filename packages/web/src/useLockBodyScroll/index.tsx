import { useLayoutEffect } from 'react'
import { isBrowser } from '../utils'

/**
 * 锁定body，禁止滚动
 */
export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    if (isBrowser) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [])
}
