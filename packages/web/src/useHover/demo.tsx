import React, { useRef, useState } from 'react'
import useHover from '.'

export default function Demo() {
  const domNodeRef = useRef()
  const isHover = useHover(domNodeRef)

  return (
    <div
      ref={domNodeRef}
      style={{
        border: 'solid 1px blue',
        width: '200px',
        height: '200px',
        ...(isHover ? { background: 'blue', color: 'white' } : {}),
      }}
    >
      悬浮上来
    </div>
  )
}

export function Demo2() {
  const domNodeRef = useRef()
  const [stateHover, setStateHover] = useState(false)
  useHover(domNodeRef, {
    onOver: () => {
      setStateHover(true)
    },
    onOut: () => {
      setStateHover(false)
    },
  })

  return (
    <div
      ref={domNodeRef}
      style={{
        border: 'solid 1px blue',
        width: '200px',
        height: '200px',
        ...(stateHover ? { background: 'blue', color: 'white' } : {}),
      }}
    >
      悬浮上来
    </div>
  )
}
