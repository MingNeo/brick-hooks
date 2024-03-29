import { useState, useEffect } from 'react'
import { isBrowser } from '../utils'

/**
 * 获取当前是否在线状态
 */
export default function useOnline() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean' ? navigator.onLine : true
  )

  useEffect(() => {
    if (isBrowser) {
      const onOnline = () => setIsOnline(true)
      const onOffline = () => setIsOnline(false)
      window.addEventListener('online', onOnline)
      window.addEventListener('offline', onOffline)

      return () => {
        window.removeEventListener('online', onOnline)
        window.removeEventListener('offline', onOffline)
      }
    }
  }, [])

  return isOnline
}
