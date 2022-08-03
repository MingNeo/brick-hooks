import React from 'react'
import { Button } from '@storybook/react/demo'
import { createStore } from 'hydrogen-store/src/index'
import reduxPlugin from 'hydrogen-store-redux-plugin/src/index'
import immerPlugin from 'hydrogen-store-immer-plugin/src/index'
import effectPlugin from 'hydrogen-store-effect-plugin/src/index'
import { useLogRender } from '../../../../../common/src'
import ChildrenComp from './childrenComp'

export const singleStore = createStore({
  modules: {
    test: {
      state: {
        state: 1,
        actionCount: 0,
        effectCount: 0,
      },
      reducers: {
        countInc: (state, payload) => {
          state.actionCount += payload.step
        },
        setEffectCountInc: (state, payload) => {
          state.effectCount += payload.step
        },
      },
      effects: {
        async effectCountInc({ state, dispatchEffect }, payload) {
          setTimeout(() => {
            dispatchEffect('testEffect1', payload)
          }, 100)
        },
        async testEffect1({ state, dispatch }, payload) {
          dispatch('setEffectCountInc', payload)
        },
      },
    },
  },
  plugins: [immerPlugin, effectPlugin, reduxPlugin],
  devtoolId: 'store immer',
})

const Comp1 = React.memo(function Comp1() {
  const [state = {}] = singleStore.useStore('test')
  return <ChildrenComp title="Comp1 使用count">count: {state.count}</ChildrenComp>
})

const Comp2 = React.memo(function Comp2() {
  const { renderCount } = useLogRender()
  return (
    <ChildrenComp title="Comp2 ----此组件未使用useStore, 因此任意改动都不会触发更新">
      renderCount: {renderCount}
    </ChildrenComp>
  )
})

export default function ImmerDemo() {
  const [state = {}, setState, { dispatch, dispatchEffect }] = singleStore.useStore('test', true)

  return (
    <div>
      <div>
        <Button onClick={() => setState({ count: (state.count || 0) + 1 }, true)}>+</Button>
        {state.count}
        <Button onClick={() => setState({ count: (state.count || 0) - 1 })}>-</Button>
        <Button
          onClick={() =>
            setState((prevState) => {
              prevState.mergeCount = (prevState.mergeCount || 0) + 1
            }, true)
          }
        >
          testMerge
        </Button>
        <Button onClick={() => dispatch('countInc', { step: 1 })}>dispatch action</Button>
        <Button onClick={() => dispatchEffect('effectCountInc', { step: 1 })}>dispatchEffect action</Button>
      </div>
      <div>{JSON.stringify(state)}</div>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}
