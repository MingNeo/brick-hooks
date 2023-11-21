import React from 'react'
import useScrollFixed from '.'

export const containerStyle = {
  width: '100%',
  maxHeight: '100%',
  height: 400,
  overflow: 'scroll',
  border: '1px solid',
}

export default function Demo() {
  const { targetRef, rootRef, isFixed, fixedStyle, scrollToTop } = useScrollFixed({
    limit: 90,
  })
  return (
    <div style={{ transform: 'translate(0, 0)' }}>
      <div ref={(ref) => (rootRef.current = ref)} style={containerStyle}>
        <div
          style={{
            height: 90,
            fontSize: 50,
            lineHeight: '90px',
          }}>
          向下滚动
        </div>
        {isFixed && <div style={{ height: 22 }}></div>}
        <div style={{ ...fixedStyle, background: '#ddeecc', left: 0, right: 0 }} ref={targetRef}>
          可悬浮内容
        </div>
        <div
          style={{
            height: 1000,
            backgroundImage: 'linear-gradient(white, yellow)',
            color: '#fff',
            fontSize: 50,
            lineHeight: '200px',
          }}></div>
      </div>
      {isFixed && (
        <div
          style={{ position: 'fixed', right: 20, bottom: 30, border: '1px solid #eee' }}
          onClick={() => scrollToTop(0)}>
          返回顶部
        </div>
      )}
    </div>
  )
}
