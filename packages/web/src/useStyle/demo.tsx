import React, { useState } from 'react'
import useStyle from '.'

const Demo = () => {
  const [bgColor, setBgColor] = useState('red')
  useStyle(`
    #test-useStyle-demo {
      background: ${bgColor};
    }
  `)

  return (
    <>
      <button onClick={() => setBgColor(bgColor === 'red' ? 'blue' : 'red')}>change color</button>
      <div id="test-useStyle-demo" style={{ width: '200px', height: '200px' }}></div>
    </>
  )
}

export default Demo
