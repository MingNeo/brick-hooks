import React, { useState } from 'react'
import useFreeDrag from 'brick-hooks-web/src/useFreeDrag'
import useEventListener from 'brick-hooks-web/src/useEventListener'

export default {
  title: 'useFreeDragDemo',
}

export const useFreeDragDemo = () => {
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

useFreeDragDemo.story = {
  name: 'useFreeDragDemo',
}

export const useFreeDragDemo2 = () => {
  const { onMousedown, style: dragStyle } = useFreeDrag()

  return (
    <div style={{ position: 'relative', height: 450, width: '100%' }}>
      <div onMouseDown={onMousedown} style={{ height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }} />
    </div>
  )
}

useFreeDragDemo2.story = {
  name: 'useFreeDragDemo2',
}
