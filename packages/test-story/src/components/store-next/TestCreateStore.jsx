import React from 'react'
import { Button } from '@storybook/react/demo'
import { createStore, Store } from 'hydrogen-store/src/index'
import reduxPlugin from 'hydrogen-store-redux-plugin'

Store.usePlugin(reduxPlugin)
export const singleStore = createStore({
  modules: {
    test: {
      state: {
        a: 1,
      },
      reducers: {
        testAction: (state, payload) => {
          return ({ ...state, ...payload })
        }
      }
    },
  },
  devtoolId: 'Test Next Store'
})

const Comp1 = React.memo(function Comp1() {
  const [state = {}] = singleStore.useStore('test')
  return <div>{state.a}</div>
})

const Comp2 = React.memo(function Comp2() {
  const date = new Date()
  return <div>{date.getTime()}</div>
})

export default function TestCreateStore() {
  const [state = {}, setState, dispatch] = singleStore.useStore('test', true)

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
            dispatch('testAction', { c: 100 })
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
