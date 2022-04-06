import { useEffect } from 'react'
import 'intersection-observer'

/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param options.sourceAttr
 * @param options.checkIsInWindow 自定义检测是否在视口中
 */
export default function useLazyImages(querySelector: string, { sourceAttr = 'data-src', ...ioOptions } = {}) {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const node = entry.target as any
        if (entry.isIntersecting && !node.src) {
          node.src = node.getAttribute(sourceAttr) || ''
        }
      })
    }, ioOptions)
    const imgs = document.querySelectorAll(querySelector)
    Array.from(imgs).forEach((node: HTMLImageElement) => {
      io.observe(node)
    })
    return () => {
      io.disconnect()
    }
  }, [])
}
