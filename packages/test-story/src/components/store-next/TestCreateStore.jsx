import React from 'react'
import { Button } from '@storybook/react/demo'
import { createStore } from 'hydrogen-store/src/index'
import reduxPlugin from 'hydrogen-store-redux-plugin'
import effectPlugin from 'hydrogen-store-effect-plugin/src/index'

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
      },
      effects: {
        async testEffect({ state, dispatchEffect }, payload) {
          setTimeout(() => {
            dispatchEffect('testEffect1', payload)
          }, 100);
        },
        async testEffect1({ state, dispatch }, payload) {
          dispatch('testAction', payload)
        }
      }
    },
  },
  plugins: [effectPlugin, reduxPlugin],
  // plugins: [reduxPlugin],
  devtoolId: 'Test Next Store'
})

const Comp1 = React.memo(function Comp1() {
  const useStore = singleStore.getUseStore()
  const [state = {}] = useStore('test')
  return <div>{state.a}</div>
})

const Comp2 = React.memo(function Comp2() {
  const date = new Date()
  return <div>{date.getTime()}</div>
})

export default function TestCreateStore() {
  const useStore = singleStore.getUseStore()
  const [state = {}, setState, { dispatch, dispatchEffect }] = useStore('test', true)

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
          testDispatch
        </Button>
        <Button
          onClick={() => {
            dispatchEffect('testEffect', { c: 101 })
          }}>
          testDispatchEffect
        </Button>
      </div>
      <div>comp1</div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}
