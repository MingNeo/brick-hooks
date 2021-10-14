import { useEffect, useMemo, useRef } from 'react'

// 更新组件的left/top，即可自由拖动组件
type OnDragMoving = (rect: { top: number; left: number }) => void
interface Rect {
  top: number
  left: number
}

/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
export default function useDrag({
  rect: initialRect,
  onDragMoving,
}: { rect?: Rect; onDragMoving?: OnDragMoving } = {}) {
  const dragInfo = useRef({
    top: Number(initialRect?.top),
    left: Number(initialRect?.left),
    disX: null,
    disY: null,
  })

  const methods = useMemo(() => {
    const getMovingPosition = (e: { clientX: number; clientY: number }) => {
      return {
        x: e.clientX - (dragInfo.current.disX || 0),
        y: e.clientY - (dragInfo.current.disY || 0),
      }
    }

    const dragMoving = (event: MouseEvent) => {
      event.stopPropagation()
      event.preventDefault()
      const { x, y } = getMovingPosition(event)
      if (!x && !y) return
      onDragMoving({
        top: dragInfo.current.top + y,
        left: dragInfo.current.left + x,
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
      dragInfo.current.disX = e.clientX
      dragInfo.current.disY = e.clientY
      removeEventListeners()
      document.addEventListener('mouseup', onMouseup, { once: true })
      document.addEventListener('click', onMouseup, { once: true })
    }

    const readyDrag = (e: MouseEvent) => {
      e.preventDefault()
      if (e.button !== 0) return
      preparation(e)
      dragInfo.current.top = Number(initialRect?.top)
      dragInfo.current.left = Number(initialRect?.left)
      document.addEventListener('mousemove', dragMoving)
    }

    return {
      readyDrag,
      removeEventListeners,
    }
  }, [])
  
  useEffect(() => {
    methods.removeEventListeners()
    return function cleanup() {
      methods.removeEventListeners()
    }
  }, [])

  return {
    onMousedown: methods.readyDrag,
    readyDrag: methods.readyDrag,
    rect: dragInfo.current,
  }
}
