import React from 'react'
import useScrollFixed from '.'

export const containerStyle = {
  width: '100%',
  height: 400,
  overflow: 'scroll',
  border: '1px solid',
}

function Item(props) {
  return (
    <div
      style={{
        width: 200,
        height: 20,
        backgroundColor: 'powderblue',
        marginBottom: 10,
        border: '1px solid #eee',
      }}
      {...props}
    ></div>
  )
}

const list1 = new Array(3).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
}))

const list2 = new Array(20).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
}))

export default function Demo() {
  const { targetRef, rootRef, isFixed, fixedStyle } = useScrollFixed({
    limit: 90,
    fixedStyle: {
      top: 16,
    },
  })
  return (
    <div>
      <div ref={(ref) => (rootRef.current = ref)} style={containerStyle}>
        {list1.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {isFixed && (
          <div
            style={{
              height: 22,
            }}
          ></div>
        )}
        <div style={fixedStyle as any} ref={targetRef}>
          哈哈哈哈哈
        </div>
        {list2.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
      </div>
    </div>
  )
}
