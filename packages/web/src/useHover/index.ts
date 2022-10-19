import { useReducer, useRef } from 'react'
import useEventListener from '../useEventListener'

interface Options {
  onOver?: () => void
  onOut?: () => void
  updateOnStatusChange?: boolean // 是否在悬浮状态改变时触发组件刷新
}

export default function useHover(ref: any, { onOver, onOut, updateOnStatusChange = true }: Options = {}) {
  const isHoverRef = useRef<boolean>(false)
  const [, forceUpddate] = useReducer((prev) => prev + 1, 0)

  useEventListener(
    'mouseover',
    () => {
      isHoverRef.current = true
      updateOnStatusChange && forceUpddate()
      onOver && onOver()
    },
    { dom: ref.current },
  )

  useEventListener(
    'mouseout',
    () => {
      isHoverRef.current = false
      updateOnStatusChange && forceUpddate()
      onOut && onOut()
    },
    { dom: ref.current },
  )

  return isHoverRef.current
}
