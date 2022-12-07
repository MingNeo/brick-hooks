import React from 'react'
import useLazySequenceLoad from '.'

const list = new Array(20).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
}))

export const Comp = ({ groupSize, wait, rootMargin }: any) => {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, {
    groupSize,
    wait,
    rootMargin,
  })

  return (
    <div>
      <div>已加载: {showList.map((v, i: number) => i + 1).join(',')}</div>
      <div {...rootProps} style={{ width: '100%', height: 100, overflow: 'scroll', border: '1px solid' }}>
        {showList.map((item) => (
          <div
            key={item.id}
            style={{
              height: 50,
              backgroundColor: 'powderblue',
              marginBottom: 10,
              border: '1px solid #eee',
            }}
          >
            {item.value}
          </div>
        ))}
        {showfooterLoading ? <div {...loadingProps}>Loading</div> : null}
      </div>
    </div>
  )
}

export default function Demo(props) {
  return (
    <div>
      <Comp groupSize={3} wait={200} />
      <h4>设置rootMargin来提前加载</h4>
      <Comp groupSize={3} rootMargin={100} />
    </div>
  )
}
