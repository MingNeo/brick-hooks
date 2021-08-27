import React from 'react'
import { Button } from '@storybook/react/demo'
import { registerModule, useStore, store, usePlugins } from 'hydrogen-store'
import { useObjectState, useLogRender } from 'brick-hooks'
import useStoreWrap from 'brick-hooks/src/useStoreWrap'
import reduxPlugin from 'hydrogen-store-redux-plugin'


usePlugins([reduxPlugin])

const reducers = {
  testAction: (state, payload) => ({ ...state, ...payload })
}

// registerModule('test', {
  // state: {
  //   a: 1
  // },
  // reducers
// })

const Comp1 = React.memo(function Comp1() {
  const [state = {}] = useStore('test')
  return <div>comp1: {state.a}</div>
})

const Comp2 = React.memo(function Comp2() {
  const date = new Date()
  return <div>comp2: {date.getTime()}</div>
})

export default function TestCreateStore() {
  const [state = {}, setState, methods] = useObjectState({ a: 1 }, reducers)
  useStoreWrap('test', state, { store })

  useLogRender({ state })

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setState({ a: state.a + 1 })
          }}>
          +
        </Button>
        {state.a}
        <Button
          onClick={() => {
            setState({ a: state.a - 1 })
          }}>
          -
        </Button>
        {JSON.stringify(state)}
        <Button
          onClick={() => {
            setState({ b: 1 }, true)
          }}>
          testMerge
        </Button>
        <Button
          onClick={() => {
            setState({ b: 1 })
          }}>
          testSet
        </Button>
        <Button
          onClick={() => {
            // dispatch('testAction', { c: 100 })
            methods.testAction({ c: 100 })
          }}>
          testAction
        </Button>
      </div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}
