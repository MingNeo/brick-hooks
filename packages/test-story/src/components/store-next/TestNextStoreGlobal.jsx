import React from 'react'
import { Button } from '@storybook/react/demo'
import { registerModule, useStore, usePlugins } from 'hydrogen-store/src/index'
import reduxPlugin from 'hydrogen-store-redux-plugin/src/index'

usePlugins([reduxPlugin])

registerModule('test', {
  state: {
    count: 1,
  },
  reducers: {
    testAction: (state, payload) => ({ ...state, ...payload }),
  },
})

const Comp1 = React.memo(function Comp1() {
  const [state = {}] = useStore('test')
  return <div>{state.count}</div>
})

const Comp2 = React.memo(function Comp2() {
  const date = new Date()
  return <div>{date.getTime()}</div>
})

export default function TestCreateStore() {
  const [state = {}, setState, { dispatch }] = useStore('test')

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setState({ count: state.count + 1 }, true)
          }}>
          +
        </Button>
        {state.count}
        <Button
          onClick={() => {
            setState({ count: state.count - 1 })
          }}>
          -
        </Button>
        {JSON.stringify(state)}
        <Button
          onClick={() => {
            setState((prev) => ({ mergeCount: (prev.mergeCount || 0) + 1 }), true)
          }}>
          testMerge
        </Button>
        <Button
          onClick={() => {
            setState((prev) => ({ setCount: (prev.setCount || 0) + 1 }))
          }}>
          testSet
        </Button>
        <Button
          onClick={() => {
            dispatch('testAction', { actionCount: (state.actionCount || 0) + 1 })
          }}>
          testAction
        </Button>
      </div>
      <div>comp1</div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}
