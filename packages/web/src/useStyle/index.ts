import { useCallback, useEffect } from 'react'

/**
 *  向页面中插入一段style
 */
export default function useStyle(styleContent: string, id: string, { removeOnDestroy = false } = {}) {
  const setSyle = useCallback((id: string) => {
    try {
      let style = document.querySelector<HTMLStyleElement>(`style#${id}`)

      if (!style) {
        style = document.createElement('style')
        style.type = 'text/css'
        style.innerText = styleContent
        document.head.appendChild(style)
      }
    } catch (error) {
      console.warn(error)
    }
  }, [])

  const removeSyle = useCallback((id: string) => {
    try {
      let style = document.querySelector<HTMLStyleElement>(`style#${id}`)
      style && document.head.removeChild(style)
    } catch (error) {
      console.warn(error)
    }
  }, [])

  useEffect(() => {
    setSyle(id)
    return () => {
      removeOnDestroy && removeSyle(id)
    }
  }, [id, setSyle, removeSyle])
}
