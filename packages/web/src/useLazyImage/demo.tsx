import React from 'react'
import useLazyImage from '.'

const Demo = () => {
  useLazyImage('.lazy-load-container img')

  return (
    <div className="lazy-load-container">
      {new Array(10).fill(0).map((v, i) => {
        return (
          <img
            style={{ width: '100%', height: 100 }}
            key={i}
            data-src="http://img.mp.sohu.com/upload/20170524/ae7c725e1aa1435ebd208aacf873ac9d_th.png"
          />
        )
      })}
    </div>
  )
}

export default Demo
