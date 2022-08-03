import React from 'react'
import { Button } from '@storybook/react/demo'
import { registerModule, useStore, usePlugins } from 'hydrogen-store/src/index'
import reduxPlugin from 'hydrogen-store-redux-plugin/src/index'
import effectPlugin from 'hydrogen-store-effect-plugin/src/index'
import { useLogRender } from '../../../../../common/src'
import ChildrenComp from './childrenComp'

usePlugins([reduxPlugin, effectPlugin])

registerModule('test', {
  state: {
    count: 1,
    actionCount: 0,
    effectCount: 0,
  },
  reducers: {
    countInc: (state, payload) => ({ ...state, count: (state.count || 0) + payload.step }),
    setEffectCountInc: (state, payload) => ({ ...state, effectCount: (state.effectCount || 0) + payload.step }),
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
})

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

export default function GlobalStoreDemo() {
  const [state = {}, setState, { dispatch, dispatchEffect }] = useStore('test')

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
        <Button onClick={() => dispatch('countInc', { step: 1 })}>dispatch action</Button>
        <Button onClick={() => dispatchEffect('effectCountInc', { step: 1 })}>dispatchEffect action</Button>
      </div>
      <p>state: {JSON.stringify(state)}</p>
      <Comp1 />
      <Comp2 />
    </div>
  )
}
