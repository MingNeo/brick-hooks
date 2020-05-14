import { useEffect } from 'react'

// 判断是否在可视区域里面
function isInWindow(node: HTMLElement) {
  const bound = node.getBoundingClientRect()
  const clientHeight = window.innerHeight
  return bound.top <= clientHeight + 100
}

// 加载图片
function checkImgs(querySelector: string, sourceAttr: string) {
  const imgs = document.querySelectorAll(querySelector)
  Array.from(imgs).forEach((node: HTMLImageElement) => {
    if (isInWindow(node) && !node.src) {
      const source = node.getAttribute(sourceAttr)
      node.src = source || ''
    }
  })
}

/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param sourceAttr
 */
export default function useLazyImages(querySelector: string, sourceAttr = 'data-src') {
  useEffect(() => {
    checkImgs(querySelector, sourceAttr)

    const onScroll = () => checkImgs(querySelector, sourceAttr)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
