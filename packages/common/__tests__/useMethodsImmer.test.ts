import { act, renderHook } from '@testing-library/react-hooks'
import useMethodsImmer from '../src/useMethodsImmer'

const methodsCounter = {
  inc: (draftState: any) => void(draftState.count += 1),
  dec: (draftState: any) => void(draftState.count -= 1),
  set: (draftState: any, count: number) => void(draftState.count = count)
}

describe('useMethodsImmer 校验', () => {
  it('引用正常', () => {
    expect(useMethodsImmer).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => useMethodsImmer(methodsCounter, { count: 0 }))
    expect(result.current[0]).toEqual({ count: 0 })
  })
  it('测试方法正常', () => {
    const { result } = renderHook(() => useMethodsImmer(methodsCounter, { count: 0 }))
    const [, actions] = result.current

    expect(result.current[0]).toEqual({ count: 0 })

    act(() => actions.inc())
    expect(result.current[0]).toEqual({ count: 1 })

    act(() => actions.dec())
    expect(result.current[0]).toEqual({ count: 0 })

    act(() => actions.dispatch('inc'))
    expect(result.current[0]).toEqual({ count: 1 })
    act(() => actions.dispatch({ type: 'inc' }))
    expect(result.current[0]).toEqual({ count: 2 })

    act(() => actions.dispatch('dec'))
    expect(result.current[0]).toEqual({ count: 1 })
    act(() => actions.dispatch({ type: 'dec' }))
    expect(result.current[0]).toEqual({ count: 0 })

    act(() => actions.set(3))
    expect(result.current[0]).toEqual({ count: 3 })
  })
})
