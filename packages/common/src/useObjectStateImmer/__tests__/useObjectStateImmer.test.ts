import { act, renderHook } from '@testing-library/react-hooks'
import useObjectStateImmer from '..'

const methods = {
  inc: (value) => (value += 1),
  dec: (value) => (value -= 1),
}

describe('useObjectStateImmer 校验', () => {
  it('引用正常', () => {
    expect(useObjectStateImmer).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => useObjectStateImmer({ test: 0 }, methods))
    expect(result.current[0]).toEqual({ test: 0 })
  })
  it('测试方法正常', () => {
    const { result } = renderHook(({ initialState }) => useObjectStateImmer(initialState, methods), {
      initialProps: { initialState: { test: 0 } },
    })
    const [, setState] = result.current

    expect(result.current[0]).toEqual({ test: 0 })

    act(() => result.current[1]({ text: 1 }))
    expect(result.current[0]).toEqual({ text: 1 })

    act(() => result.current[1]({ test: 1 }, true))
    expect(result.current[0]).toEqual({ test: 1, text: 1 })
  })
})
