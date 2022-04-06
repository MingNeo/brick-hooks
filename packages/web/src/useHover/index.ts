import { useState } from 'react'
import useEventListener from '../useEventListener'

interface Options {
  onOver?: () => void
  onOut?: () => void
}

export default function useHover(ref: any, { onOver, onOut }: Options = {}) {
  const [isHover, setIsHover] = useState(false)

  useEventListener(
    'mouseover',
    () => {
      setIsHover(true)
      onOver && onOver()
    },
    { dom: ref.current }
  )

  useEventListener(
    'mouseout',
    () => {
      setIsHover(false)
      onOut && onOut()
    },
    { dom: ref.current }
  )

  return isHover
}
