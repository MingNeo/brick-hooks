import { useEffect } from 'react'
import { isBrowser } from '../utils'

/**
 * 设置h5标题
 * @param title
 */
export default function useTitle(title: string) {
  useEffect(() => {
    isBrowser && (document.title = title)
  }, [title])
}
