import { useCallback, useEffect, useRef } from 'react'
import { isBrowser } from '../utils'

/**
 * 向页面中插入一段style
 * @param {string} styleContent css内容
 * @param {string} id 唯一id, 用于卸载时删除，如不需要可不传
 * @param {Object} options 配置项
 * @param {boolean} options.removeOnDestroy 卸载时是否删除，默认为false
 */
export default function useStyle(
  styleContent: string,
  id?: string,
  { removeOnDestroy = false }: { removeOnDestroy?: boolean } = {}
) {
  const styleNodeRef = useRef(null)
  const setStyle = useCallback(() => {
    try {
      let style = (styleNodeRef.current = document.querySelector<HTMLStyleElement>(`style#${id}`))

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

  const removeStyle = useCallback(() => {
    try {
      let style = styleNodeRef.current || document.querySelector<HTMLStyleElement>(`style#${id}`)
      style && document.head.removeChild(style)
    } catch (error) {
      console.warn(error)
    }
  }, [id])

  useEffect(() => {
    isBrowser && setStyle()
    return () => {
      isBrowser && removeOnDestroy && removeStyle()
      styleNodeRef.current = null
    }
  }, [setStyle, removeStyle])

  return removeStyle
}
