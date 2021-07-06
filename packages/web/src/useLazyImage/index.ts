import { useEffect } from 'react'

type CheckIsInWindow = (node: HTMLElement) => boolean

// 判断是否在可视区域里面
const isInWindow: CheckIsInWindow = (node: HTMLElement) => {
  const bound = node.getBoundingClientRect()
  const clientHeight = window.innerHeight
  return bound.top <= clientHeight + 100
}

// 加载图片
function checkImgs(querySelector: string, sourceAttr: string, checkIsInWindow: CheckIsInWindow) {
  const imgs = document.querySelectorAll(querySelector)
  Array.from(imgs).forEach((node: HTMLImageElement) => {
    if (checkIsInWindow(node) && !node.src) {
      const source = node.getAttribute(sourceAttr)
      node.src = source || ''
    }
  })
}

/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param options.sourceAttr
 * @param options.checkIsInWindow 自定义检测是否在视口中
 */
export default function useLazyImages(
  querySelector: string,
  { sourceAttr = 'data-src', checkIsInWindow = isInWindow } = {}
) {
  useEffect(() => {
    checkImgs(querySelector, sourceAttr, checkIsInWindow)

    const onScroll = () => checkImgs(querySelector, sourceAttr, checkIsInWindow)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
