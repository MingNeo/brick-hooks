import { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react'

// 更新组件的left/top，即可自由拖动组件
interface Rect {
  top: number
  left: number
}

type OnDragMoving = (rect: Rect, event: MouseEvent) => void

interface DragStyle {
  top: number
  left: number
  position?: 'absolute'
}

/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
export default function useFreeDrag(
  onDragMoving: OnDragMoving = () => {},
  { initialRect = { top: 0, left: 0 } }: { initialRect?: Rect } = {},
) {
  const dragInfo = useRef({
    top: Number(initialRect?.top),
    left: Number(initialRect?.left),
    disX: null,
    disY: null,
  })

  const [dragStyle, setDragStyle] = useState<DragStyle>({ ...initialRect })

  useEffect(() => {
    dragInfo.current.top = Number(initialRect?.top)
    dragInfo.current.left = Number(initialRect?.left)
  }, [initialRect?.top, initialRect?.left])

  const styleRef = useRef({
    top: Number(initialRect?.top),
    left: Number(initialRect?.left),
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
      styleRef.current.top = dragInfo.current.top + y
      styleRef.current.left = dragInfo.current.left + x

      const rect = {
        top: styleRef.current.top,
        left: styleRef.current.left,
      }
      setDragStyle({ ...rect, position: 'absolute' })
      onDragMoving(rect, event)
    }

    const onMouseup = () => {
      dragInfo.current.top = styleRef.current.top
      dragInfo.current.left = styleRef.current.left
      document.removeEventListener('mousemove', dragMoving)
    }

    // 移除绑定事件
    const removeEventListeners = () => {
      document.removeEventListener('mouseup', onMouseup)
      document.removeEventListener('click', onMouseup)
      document.removeEventListener('mousemove', dragMoving)
    }

    // 每次点击选择组件后初始化位置并绑定事件
    const preparation: MouseEventHandler<HTMLDivElement> = (e) => {
      // 记录按下按键时鼠标所在位置
      dragInfo.current.disX = e.clientX
      dragInfo.current.disY = e.clientY

      removeEventListeners()
      document.addEventListener('mouseup', onMouseup, { once: true })
      document.addEventListener('click', onMouseup, { once: true })
    }

    const readyDrag: MouseEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault()
      if (e.button !== 0) return
      preparation(e)
      dragInfo.current.top = dragInfo.current.top ?? Number(initialRect?.top)
      dragInfo.current.left = dragInfo.current.left ?? Number(initialRect?.left)
      document.addEventListener('mousemove', dragMoving)
    }

    return {
      readyDrag,
      removeEventListeners,
    }
  }, [])

  useEffect(() => {
    methods.removeEventListeners()
    return () => {
      methods.removeEventListeners()
    }
  }, [])

  return {
    onMousedown: methods.readyDrag,
    style: dragStyle,
    props: { onMousedown: methods.readyDrag, style: dragStyle },
    parentStyle: { position: 'relative' },
  }
}
