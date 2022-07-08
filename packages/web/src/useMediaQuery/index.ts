import { useEffect, useRef, useState } from 'react'
import { isBrowser } from '../utils'

function useMediaQuery(mediaQuery: string): boolean {
  const mqlRef = useRef<MediaQueryList>(window.matchMedia(mediaQuery))
  const [isMatch, setIsMatch] = useState(mqlRef.current.matches)

  useEffect(() => {
    mqlRef.current = window.matchMedia(mediaQuery)
  }, [mediaQuery])

  // 如(prefers-color-scheme: dark) 的媒体查询通过resize事件处理不了, 使用mql的addListener
  useEffect(() => {
    const mql = mqlRef.current
    if (!mql) return

    const onMediaChange = () => {
      mqlRef.current = window.matchMedia(mediaQuery)
      setIsMatch(mqlRef.current.matches)
    }
    if (Object.prototype.hasOwnProperty.call(mql, 'addEventListener')) {
      mql.addEventListener('change', onMediaChange)
    } else {
      mql.addListener(onMediaChange)
    }

    return () => {
      if (Object.prototype.hasOwnProperty.call(mql, 'removeEventListener')) {
        mql!.removeEventListener('change', onMediaChange)
      } else {
        mql!.removeListener(onMediaChange)
      }
    }
  }, [])

  return isMatch
}

export default function (mediaQuery: string): boolean {
  const hook = isBrowser ? useMediaQuery : () => false
  return hook(mediaQuery)
}
