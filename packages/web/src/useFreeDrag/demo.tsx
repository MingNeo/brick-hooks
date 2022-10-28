import React, { useState } from 'react'
import useFreeDrag from '.'
import useEventListener from '../useEventListener'

export const Demo1 = () => {
  const [dragStyle, setDragStyle] = useState({})
  const { onMousedown } = useFreeDrag((rect) => setDragStyle(rect))
  const ref = useEventListener('mousedown', onMousedown)

  return (
    <div style={{ position: 'relative', height: 450, width: '100%' }}>
      <div
        ref={(r) => (ref.current = r)}
        style={{ position: 'absolute', height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }}
      />
    </div>
  )
}

export const Demo2 = () => {
  const { onMousedown, style: dragStyle } = useFreeDrag()

  return (
    <div style={{ position: 'relative', height: 200, width: '100%' }}>
      <div onMouseDown={onMousedown} style={{ height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }} />
    </div>
  )
}

export default Demo2
