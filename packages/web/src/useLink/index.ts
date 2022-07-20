import { useCallback, useEffect, useRef } from 'react'
import { isBrowser } from '../utils'

/**
 *  向页面中插入css link标签
 * @param {string} href css文件路径
 * @param {string} id 唯一id, 用于卸载时删除，如不需要可不传
 * @param {Object} options
 * @param {boolean} options.removeOnDestroy 卸载时是否删除，默认为false
 */
export default function useLink(
  href: string,
  id?: string,
  { removeOnDestroy = false }: { removeOnDestroy?: boolean } = {}
) {
  const linkNodeRef = useRef(null)
  const setLink = useCallback(() => {
    try {
      let link = (linkNodeRef.current = document.querySelector<HTMLLinkElement>(`link#${id}`))

      if (!link && href) {
        link = document.createElement('link')
        link.id = id
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    } catch (error) {
      console.warn(error)
    }
  }, [id])

  const removeLink = useCallback(() => {
    try {
      let link = linkNodeRef.current || document.querySelector<HTMLLinkElement>(`link#${id}`)
      link && document.head.removeChild(link)
    } catch (error) {
      console.warn(error)
    }
  }, [id])

  useEffect(() => {
    isBrowser && setLink()
    return () => {
      isBrowser && removeOnDestroy && removeLink()
      linkNodeRef.current = null
    }
  }, [setLink, removeLink])

  return removeLink
}
