import React, { useCallback, useRef } from 'react'
import { isBrowser } from '../utils'

const useIsoEffect = isBrowser ? React.useLayoutEffect : React.useEffect

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
  { removeOnDestroy = false }: { removeOnDestroy?: boolean } = {},
) {
  const styleNodeRef = useRef(null)
  const setStyle = useCallback(() => {
    try {
      let style = (styleNodeRef.current = document.querySelector<HTMLStyleElement>(`style#${id}`))

      if (!style) {
        style = document.createElement('style')
        style.id = id
        style.type = 'text/css'
        style.innerHTML = styleContent || ''
        document.head.appendChild(style)
      } else {
        style.innerHTML = styleContent || ''
      }
    } catch (error) {
      console.warn(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, styleContent])

  const removeStyle = useCallback(() => {
    try {
      const style = styleNodeRef.current || document.querySelector<HTMLStyleElement>(`style#${id}`)
      style && document.head.removeChild(style)
    } catch (error) {
      console.warn(error)
    }
  }, [id])

  useIsoEffect(() => {
    isBrowser && setStyle()
    return () => {
      isBrowser && removeOnDestroy && removeStyle()
      styleNodeRef.current = null
    }
  }, [setStyle, removeStyle])

  return removeStyle
}
