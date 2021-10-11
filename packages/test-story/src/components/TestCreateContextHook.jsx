import React, { useMemo } from 'react'
import { Button } from '@storybook/react/demo'
import createHookContext from 'brick-hooks/src/createHookContext'
import { useObjectState } from 'brick-hooks'

function useContainer() {
  const [state, setState, { dispatch } = {}] = useObjectState(
    { a: 1 },
    {
      testAction: (state = {}, payload = {}) => {
        return { ...state, ...payload }
      },
    }
  )

  return { state, setState }
}

const {
  useHook: useTest,
  Provider,
  useTestState,
  useTestCustom,
  useTestB,
} = createHookContext(useContainer, {
  useTestState: (result) => result.state.a,
  useTestCustom: (result, { memoArray }) => memoArray([result?.state, result?.setState]),
  useTestB: (result) => result?.state?.b,
})

const Comp = function () {
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
      {/* <Button
          onClick={() => {
            dispatch('testAction', { c: 100 })
          }}>
          testDispatch
        </Button> */}
    </div>
  )
}

const Comp1 = React.memo(function Comp1() {
  // const { state } = useTest()
  const state = useTestState()
  return (
    <div>
      {JSON.stringify(state)}
      <div>getTime: {new Date().getTime()}</div>
    </div>
  )
})

const CompA = React.memo(function Comp1() {
  const result = useTestCustom()
  const [state] = result
  return (
    <div>
      {JSON.stringify(state)}
      <div>getTime: {new Date().getTime()}</div>
    </div>
  )
})

const CompB = React.memo(function Comp1() {
  const state = useTestB()

  return (
    <div>
      {JSON.stringify(state)}
      <div>getTime: {new Date().getTime()}</div>
    </div>
  )
})

export default function TestCreateContextHook() {
  return (
    <Provider>
      <Comp />
      <div>comp1</div>
      <Comp1 />
      <div>comp2</div>
      <CompA />
      <div>compB</div>
      <CompB />
    </Provider>
  )
}
