import React from 'react'
import { Button } from '@storybook/react/demo'
import { createApp } from 'hydrogen-store'
import reduxPlugin from 'hydrogen-store-redux-plugin'
import effectPlugin from 'hydrogen-store-effect-plugin'
import { useLogRender } from 'brick-hooks'
import ChildrenComp from './childrenComp'

const { Provider, useStore } = createApp({
  modules: {
    test: {
      state: {
        a: 1,
      },
      reducers: {
        testAction: (state, payload) => {
          return { ...state, ...payload }
        },
      },
      effects: {
        async testEffect({ state, dispatchEffect }, payload) {
          setTimeout(() => {
            dispatchEffect('testEffect1', payload)
          }, 100)
        },
        async testEffect1({ state, dispatch }, payload) {
          dispatch('testAction', payload)
        },
      },
    },
  },
  plugins: [effectPlugin, reduxPlugin],
  devtoolId: 'createStore demo',
})

export { Provider }

const Comp1 = React.memo(function Comp1() {
  const [state = {}] = useStore('test')
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

export default function CreateStoreDemo() {
  const [state = {}, setState, { dispatch, dispatchEffect }] = useStore('test', true)

  return (
    <div>
      <div>
        <Button onClick={() => setState({ count: (state.count || 0) + 1 }, true)}>+</Button>
        {state.count}
        <Button onClick={() => setState({ count: (state.count || 0) - 1 })}>-</Button>
        <Button onClick={() => setState((prev) => ({ mergeCount: (prev.mergeCount || 0) + 1 }), true)}>
          通过merge方式更新
        </Button>
        <Button onClick={() => setState((prev) => ({ setCount: (prev.setCount || 0) + 1 }), false)}>
          通过set方式更新
        </Button>
        <Button onClick={() => dispatch('testAction', { actionCount: (state.actionCount || 0) + 1 })}>
          dispatch action
        </Button>
        <Button onClick={() => dispatchEffect('testEffect', { c: 101 })}>dispatchEffect action</Button>
      </div>
      <p>state: {JSON.stringify(state)}</p>
      <Comp1 />
      <Comp2 />
    </div>
  )
}
