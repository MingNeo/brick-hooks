import { act, renderHook } from '@testing-library/react-hooks'
import useMethods from '../src/useMethods'

const methodsCounter = {
  inc: (state: any) => ({ ...state, count: state.count + 1 }),
  dec: (state: any) => ({ ...state, count: state.count - 1 }),
  set: (state: any, count: any) => ({ ...state, count }),
}

describe('useMethods 校验', () => {
  it('引用正常', () => {
    expect(useMethods).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => useMethods(methodsCounter, { count: 0 }))
    expect(result.current[0]).toEqual({ count: 0 })
  })
  it('测试方法正常', () => {
    const { result } = renderHook(() => useMethods(methodsCounter, { count: 0 }))
    const [, actions] = result.current

    expect(result.current[0]).toEqual({ count: 0 })

    act(() => actions.inc())
    expect(result.current[0]).toEqual({ count: 1 })

    act(() => actions.dec())
    expect(result.current[0]).toEqual({ count: 0 })

    act(() => actions.set(2))
    expect(result.current[0]).toEqual({ count: 2 })

    act(() => actions.dispatch('inc'))
    expect(result.current[0]).toEqual({ count: 3 })
    act(() => actions.dispatch({ type: 'inc' }))
    expect(result.current[0]).toEqual({ count: 4 })

    act(() => actions.dispatch('dec'))
    expect(result.current[0]).toEqual({ count: 3 })
    act(() => actions.dispatch({ type: 'dec' }))
    expect(result.current[0]).toEqual({ count: 2 })

    act(() => actions.set(1))
    expect(result.current[0]).toEqual({ count: 1 })
  })
})
