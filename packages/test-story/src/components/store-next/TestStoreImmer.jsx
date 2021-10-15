import React from 'react'
import { Button } from '@storybook/react/demo'
import { createStore } from 'hydrogen-store/src/index'
import reduxPlugin from 'hydrogen-store-redux-plugin/src/index'
import immerPlugin from 'hydrogen-store-immer-plugin/src/index'
import effectPlugin from 'hydrogen-store-effect-plugin/src/index'

export const singleStore = createStore({
  modules: {
    test: {
      state: {
        state: 1,
      },
      reducers: {
        testAction: (state, payload) => {
          state.actionCount = payload
        },
        testEffectAction: (state, payload) => {
          state.effectCount = payload
        },
      },
      effects: {
        async testEffect({ state, dispatchEffect }, payload) {
          setTimeout(() => {
            dispatchEffect('testEffect1', payload)
          }, 100)
        },
        async testEffect1({ state, dispatch }, payload) {
          dispatch('testEffectAction', payload)
        },
      },
    },
  },
  plugins: [immerPlugin, effectPlugin, reduxPlugin],
  devtoolId: 'Test-Next-Store-Immer',
})

const Comp1 = React.memo(function Comp1() {
  const [state = {}] = singleStore.useStore('test')
  return (
    <div>
      Comp1: {JSON.stringify(state)} {new Date().getTime()}
    </div>
  )
})

const Comp2 = React.memo(function Comp2() {
  return (
    <div>
      <div>空组件: {new Date().getTime()}</div>
    </div>
  )
})

export default function TestCreateStore() {
  const [state = {}, setState, { dispatch, dispatchEffect }] = singleStore.useStore('test', true)

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setState({ state: state.state + 1 })
          }}>
          +
        </Button>
        {state.state}
        <Button
          onClick={() => {
            setState({ state: state.state - 1 })
          }}>
          -
        </Button>
        <Button
          onClick={() => {
            setState((prevState) => (prevState.mergeCount = (prevState.mergeCount || 0) + 1), true)
          }}>
          testMerge
        </Button>
        <Button
          onClick={() => {
            dispatch('testAction', (state.actionCount || 0) + 1)
          }}>
          testDispatch
        </Button>
        <Button
          onClick={() => {
            dispatchEffect('testEffect', (state.effectCount || 0) + 1)
          }}>
          testDispatchEffect
        </Button>
      </div>
      <div>{JSON.stringify(state)}</div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}
