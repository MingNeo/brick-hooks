import React from 'react'
import useLazySequenceLoad from '.'

const containerStyle = { width: '100%', height: 100, overflow: 'scroll', border: '1px solid' }

function Item(props) {
  return (
    <div
      style={{
        width: 200,
        height: 50,
        backgroundColor: 'powderblue',
        marginBottom: 10,
        border: '1px solid #eee',
      }}
      {...props}
    ></div>
  )
}

const list = new Array(20).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
}))

export const Demo1 = () => {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, {
    groupSize: 3,
    wait: 500,
  })

  return (
    <div>
      <div>已加载列: {showList.map((v, i: number) => i + 1).join(',')}</div>
      <div {...rootProps} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? <div {...loadingProps}>Loading</div> : null}
      </div>
    </div>
  )
}

// UseLazySequenceLoad 设置rootMargin 来提前加载
export const Demo2 = () => {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, {
    groupSize: 3,
    rootMargin: 200,
  })

  return (
    <div>
      <div>已加载列: {showList.map((v, i: number) => i + 1).join(',')}</div>
      <div {...rootProps} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? <div {...loadingProps}>Loading</div> : null}
      </div>
    </div>
  )
}

export default Demo1
