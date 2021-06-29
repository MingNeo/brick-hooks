import { useEffect } from 'react'

// 更新组件的style left/top，即可自由拖动组件
type OnDragMoving = (style: { top: number; left: number }) => void

/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
export default function useDrag(props: { id?: any; styles?: any; onDragMoving: OnDragMoving }) {
  let top: number
  let left: number
  let disX: number | null = null // 初始X
  let disY: number | null = null

  const getMovingPosition = (e: { clientX: number; clientY: number }) => {
    return {
      x: e.clientX - (disX || 0),
      y: e.clientY - (disY || 0),
    }
  }

  const dragMoving = (event: MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    const { x, y } = getMovingPosition(event)
    if (!x && !y) return
    props.onDragMoving({
      top: top + y,
      left: left + x,
    })
  }

  const onMouseup = () => {
    document.removeEventListener('mousemove', dragMoving)
  }

  // 移除绑定事件
  const removeEventListeners = () => {
    document.removeEventListener('mouseup', onMouseup)
    document.removeEventListener('click', onMouseup)
    document.removeEventListener('mousemove', dragMoving)
  }

  // 每次点击选择组件后初始化位置并绑定事件
  const preparation = (e: MouseEvent) => {
    disX = e.clientX
    disY = e.clientY
    removeEventListeners()
    document.addEventListener('mouseup', onMouseup, { once: true })
    document.addEventListener('click', onMouseup, { once: true })
  }

  const readyDrag = (e: MouseEvent) => {
    e.preventDefault()
    if (e.button !== 0) return
    preparation(e)
    const { styles = {} } = props
    top = parseFloat(styles.top)
    left = parseFloat(styles.left)
    document.addEventListener('mousemove', dragMoving)
  }

  useEffect(() => {
    removeEventListeners()
    return function cleanup() {
      removeEventListeners()
    }
  }, [])

  return {
    onMousedown: readyDrag,
    readyDrag,
  }
}
