import React, { useRef } from 'react'
import useListSequenceLoad from '.'
import useTimeoutFn from '../useTimeoutFn'

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

const Demo = ({ Loading }) => {
  const rootRef = useRef<any>()
  const { showfooterLoading, showList, loadNextGroup } = useListSequenceLoad(list, { groupSize: 3 })

  const [loadNextGroupAsync] = useTimeoutFn(loadNextGroup, 0)
  return (
    <div>
      <div>已加载列: {showList.map((v, i: number) => i + 1).join(',')}</div>
      <div ref={(ref) => (rootRef.current = ref)} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? (
          Loading ? (
            <Loading loadNextGroupAsync={loadNextGroupAsync} rootRef={rootRef} />
          ) : (
            <div onClick={loadNextGroupAsync}>Load Next Group</div>
          )
        ) : null}
      </div>
    </div>
  )
}

export default Demo
