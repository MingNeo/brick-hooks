import React from 'react'
import useScroll from '.'

const Demo = () => {
  const { rootRef, y, scrollToTop } = useScroll()

  return (
    <>
      <p>scrollTop: {y}</p>
      <div ref={rootRef} style={{ width: '100%', height: 100, overflow: 'scroll', border: '1px solid' }}>
        <div
          style={{
            lineHeight: '50px',
            height: 50,
            backgroundColor: 'powderblue',
            marginTop: 500,
          }}
          onClick={() => scrollToTop(0)}
        >
          return top
        </div>
      </div>
    </>
  )
}

export default Demo
