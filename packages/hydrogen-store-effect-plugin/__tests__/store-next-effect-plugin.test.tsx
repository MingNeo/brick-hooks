import { act, renderHook } from '@testing-library/react-hooks'
import { registerModule, useStore, usePlugins } from 'hydrogen-store/src/index'
import effectPlugin from '../src/index'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

const testModel = {
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
        dispatchEffect('testEffectNormal', payload)
      }, 10)
    },
    async testEffectNormal({ state, dispatch }, payload) {
      dispatch('setEffectCountInc', payload)
    },
  },
}

describe('hydrogen-store-effect-plugin', () => {
  it('执行正常', async () => {
    usePlugins([effectPlugin])

    registerModule('test', testModel)

    const { result } = renderHook(() => {
      const [state = {}, setState, { dispatch, dispatchEffect }] = useStore<any>('test')
      return { state, setState, dispatch, dispatchEffect }
    })

    expect(result.current.state).toEqual({
      count: 1,
      actionCount: 0,
      effectCount: 0,
    })

    act(() => result.current.setState({ count: (result.current.state.count || 0) + 1 }, true))
    expect(result.current.state).toEqual({
      count: 2,
      actionCount: 0,
      effectCount: 0,
    })

    act(() => result.current.setState({ count: (result.current.state.count || 0) - 1 }))

    expect(result.current.state).toEqual({
      count: 1,
      actionCount: 0,
      effectCount: 0,
    })

    // 通过merge方式更新
    act(() => result.current.setState((prev) => ({ mergeCount: (prev.mergeCount || 0) + 1 }), true))

    expect(result.current.state).toEqual({
      count: 1,
      actionCount: 0,
      effectCount: 0,
      mergeCount: 1,
    })

    // 通过set方式更新
    act(() => result.current.setState((prev) => ({ setCount: (prev.setCount || 0) + 1 }), false))

    expect(result.current.state).toEqual({
      setCount: 1,
    })

    // 通过dispatch方式更新
    act(() => result.current.dispatch('countInc', { step: 1 }))

    expect(result.current.state).toEqual({
      count: 1,
      setCount: 1,
    })

    // 通过dispatchEffect方式更新
    act(() => result.current.dispatchEffect('effectCountInc', { step: 1 }))

    expect(result.current.state).toEqual({
      setCount: 1,
      count: 1,
    })

    await act(async () => await timeout(10))

    expect(result.current.state).toEqual({
      setCount: 1,
      count: 1,
      effectCount: 1,
    })
  })
})
