import React, { useRef } from 'react'
import { Button } from '@storybook/react/demo'
import createContextHook from 'brick-hooks/src/createContextHook'
import { useObjectState, useLogRender } from 'brick-hooks'

function useContainer() {
  const [state, setState, { dispatch } = {}] = useObjectState(
    { a: 1 },
    {
      testAction: (state = {}, payload = {}) => {
        return { ...state, ...payload }
      },
    }
  )

  return { state, setState, dispatch }
}

const {
  useHook: useTest,
  Provider,
  useStateA,
  useStateB,
  useCustom,
  useCustomAll,
} = createContextHook(useContainer, {
  useStateA: (result) => result?.state?.a,
  useStateB: (result) => result?.state?.b,
  useCustom: (result, { wrapperState }) => wrapperState([result?.state?.a, result?.setState]),
  useCustomAll: (result, { wrapperState }) =>
    wrapperState({ sum: (result?.state?.a || 0) + (result?.state?.b || 0) + (result?.state?.c || 0) }),
})

const Parent = function () {
  const { state, setState, dispatch } = useTest()

  return (
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
          setState({ b: (state.b || 0) + 1 }, true)
        }}>
        B ++
      </Button>
      <Button
        onClick={() => {
          dispatch('testAction', { c: 100 })
        }}>
        testDispatch
      </Button>
      <p>state: {JSON.stringify(state)}</p>
    </div>
  )
}

export default {
  title: 'createContextHook',
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
}

export const Default = () => <Parent />

Default.story = {
  name: 'default',
}

export const ChildrenComponentUseA = () => {
  const stateA = useStateA()
  const { renderCount } = useLogRender()
  return (
    <div>
      <h2>ChildrenComponentUseA: use state a</h2>
      <p>value: {stateA}</p>
      <p>renderCount: {renderCount}</p>
    </div>
  )
}

export const ChildrenComponentUseB = () => {
  const stateB = useStateB()
  const { renderCount } = useLogRender()

  return (
    <div>
      <h2>ChildrenComponentUseB: use state b</h2>
      <p>value: {stateB}</p>
      <p>renderCount: {renderCount}</p>
    </div>
  )
}

export const ChildrenComponentUseC = () => {
  const result = useCustom()
  const [stateA] = result
  const { renderCount } = useLogRender()
  return (
    <div>
      <h2>ChildrenComponentUseC: use custom state a</h2>
      <p>value: {stateA}</p>
      <p>renderCount: {renderCount}</p>
    </div>
  )
}

export const ChildrenComponentUseCustomSum = () => {
  const state = useCustomAll()
  const { renderCount } = useLogRender(state)
  return (
    <div>
      <h2>CompD: use custom sum a + b + c</h2>
      <p>state: {JSON.stringify(state)}</p>
      <p>renderCount: {renderCount}</p>
    </div>
  )
}
