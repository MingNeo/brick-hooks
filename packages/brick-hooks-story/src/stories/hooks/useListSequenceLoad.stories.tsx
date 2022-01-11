import useInView from 'brick-hooks-web/src/useInView'
import useListSequenceLoad from 'brick-hooks/src/useListSequenceLoad'
import useLazySequenceLoad from 'brick-hooks-web/src/useLazySequenceLoad'
import useTimeoutFn from 'brick-hooks/src/useTimeoutFn'
import React, { useRef } from 'react'

export default {
  title: 'useListSequenceLoad',
}

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
      {...props}></div>
  )
}

function Loading({ onInView, rootRef, ...restProps }) {
  const { targetProps } = useInView({
    root: rootRef,
    onInView,
  })
  return (
    <div {...targetProps} {...restProps}>
      Loading
    </div>
  )
}

const list = new Array(20).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
}))

export const Default = () => {
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
        {showfooterLoading ? <Loading onInView={loadNextGroupAsync} rootRef={rootRef} /> : null}
      </div>
    </div>
  )
}

Default.story = {
  name: 'default',
}

export const UseLazySequenceLoadDemo = () => {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, { groupSize: 3 })

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

UseLazySequenceLoadDemo.story = {
  name: 'UseLazySequenceLoad'
}

export const UseLazySequenceLoadDemo2 = () => {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, { groupSize: 3, rootMargin: 200 })

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

UseLazySequenceLoadDemo2.story = {
  name: 'UseLazySequenceLoad 设置rootMargin 来提前加载'
}
