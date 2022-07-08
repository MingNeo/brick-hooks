import { useCallback, useEffect } from 'react'
import { isBrowser } from '../utils'

/**
 *  向页面中插入一段style
 */
export default function useStyle(styleContent: string, id: string, { removeOnDestroy = false } = {}) {
  const setStyle = useCallback(() => {
    try {
      let style = document.querySelector<HTMLStyleElement>(`style#${id}`)

      if (!style && styleContent) {
        style = document.createElement('style')
        style.id = id
        style.type = 'text/css'
        style.innerHTML = styleContent
        document.head.appendChild(style)
      }
    } catch (error) {
      console.warn(error)
    }
  }, [id])

  const removeSyle = useCallback(() => {
    try {
      let style = document.querySelector<HTMLStyleElement>(`style#${id}`)
      style && document.head.removeChild(style)
    } catch (error) {
      console.warn(error)
    }
  }, [id])

  useEffect(() => {
    isBrowser && setStyle()
    return () => {
      isBrowser && removeOnDestroy && removeSyle()
    }
  }, [setStyle, removeSyle])

  return removeSyle
}
