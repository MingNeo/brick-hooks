import { act, renderHook } from '@testing-library/react-hooks'
import useObjectState from '../src/useObjectState'

const testMethods = {
  countInc: (prevState) => ({ ...prevState, count: prevState.count + 1 }),
  countDec: (prevState) => ({ ...prevState, count: prevState.count - 1 }),
}

describe('useObjectState 校验', () => {
  it('引用正常', () => {
    expect(useObjectState).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue }) => useObjectState(initialValue, testMethods), {
      initialProps: { initialValue: { count: 0 } },
    })
    expect(result.current[0]).toEqual({ count: 0 })
  })

  it('更新值正常', () => {
    const { result } = renderHook(({ initialValue }) => useObjectState(initialValue, testMethods), {
      initialProps: { initialValue: { count: 0 } },
    })
    const [, setState] = result.current

    expect(result.current[0]).toEqual({ count: 0 })

    act(() => setState({ value: 1 }))
    expect(result.current[0]).toEqual({ count: 0, value: 1 })

    act(() => setState({ value: 1 }, false))
    expect(result.current[0]).toEqual({ value: 1 })
  })

  it('使用methods更新值正常', () => {
    const { result } = renderHook(({ initialValue }) => useObjectState(initialValue, testMethods), {
      initialProps: { initialValue: { count: 0 } },
    })
    const [, setState, actions] = result.current

    expect(result.current[0]).toEqual({ count: 0 })

    act(() => actions.countInc())
    expect(result.current[0]).toEqual({ count: 1 })

    act(() => actions.countInc())
    expect(result.current[0]).toEqual({ count: 2 })

    act(() => actions.countDec())
    expect(result.current[0]).toEqual({ count: 1 })
  })
})
