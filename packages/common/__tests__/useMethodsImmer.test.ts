import { act, renderHook } from '@testing-library/react-hooks'
import useMethodsImmer from '../src/useMethods/useMethodsImmer'

const methodsCounter = {
  inc: (draftState) => void(draftState.count += 1),
  dec: (draftState) => void(draftState.count -= 1)
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
  })
})
