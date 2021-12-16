import { useEffect, useRef, useReducer } from 'react'

interface MediaQueryValue {
  media: string
  value: any
  mql?: MediaQueryList
}
type MediaQueryValueList = MediaQueryValue[]

export default function useMedia<T = any>(mediaQueryValueList: MediaQueryValueList = [], defaultValue: T): T {
  const mediaQueryListRef = useRef<MediaQueryValue[]>(getMediaQueryList(mediaQueryValueList))

  useEffect(() => {
    mediaQueryListRef.current = getMediaQueryList(mediaQueryValueList)
  }, [mediaQueryValueList])

  const [value, dispatch] = useReducer(() => {
    return mediaQueryListRef.current.find(({ mql }) => mql.matches)?.value ?? defaultValue
  }, defaultValue)

  useEffect(() => {
    const onMediaChange = () => {
      mediaQueryListRef.current = getMediaQueryList(mediaQueryValueList)
      dispatch()
    }
    mediaQueryListRef.current.forEach(({ mql }) => {
      if (Object.prototype.hasOwnProperty.call(mql, 'addEventListener')) {
        mql.addEventListener('change', onMediaChange)
      } else {
        mql.addListener(onMediaChange)
      }
    })

    return () => {
      mediaQueryListRef.current.forEach(({ mql }) => {
        if (Object.prototype.hasOwnProperty.call(mql, 'removeEventListener')) {
          mql!.removeEventListener('change', onMediaChange)
        } else {
          mql!.removeListener(onMediaChange)
        }
      })
    }
  }, [])

  return value
}

function getMediaQueryList(mediaQueryValueList: MediaQueryValueList) {
  return mediaQueryValueList.reduce((prev, curr) => [...prev, { ...curr, mql: window.matchMedia(curr.media) }], [])
}
