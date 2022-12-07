import React, { useState } from 'react'
import useGrayMode from '.'

export default function Demo() {
  const [isGrayMode, setIsGrayMode] = useState(false)
  useGrayMode(isGrayMode, true)

  return (
    <div>
      <button onClick={() => setIsGrayMode((prev) => !prev)}>切换黑白模式</button>
      <div style={{ marginTop: 10, width: 100, height: 100, background: 'red' }}></div>
    </div>
  )
}
