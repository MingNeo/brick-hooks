import { act, renderHook } from '@testing-library/react-hooks'
import useArray from '../src/useArray'

describe('useArray 校验', () => {
  it('引用正常', () => {
    expect(useArray).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue }) => useArray(initialValue), {
      initialProps: { initialValue: [1, 2, 3] },
    })
    expect(result.current[0]).toEqual([1, 2, 3])
  })
  it('测试方法正常', () => {
    const { result } = renderHook(({ initialValue }) => useArray(initialValue), {
      initialProps: { initialValue: [1, 2, 3] },
    })
    const [, actions] = result.current

    expect(result.current[0]).toEqual([1, 2, 3])

    act(() => actions.slice(1))
    expect(result.current[0]).toEqual([1, 2, 3].slice(1))

    act(() => actions.set([1]))
    expect(result.current[0]).toEqual([1])

    act(() => actions.push(2))
    expect(result.current[0]).toEqual([1, 2])

    act(() => actions.pop())
    expect(result.current[0]).toEqual([1])

    act(() => actions.clear())
    expect(result.current[0]).toEqual([])

    act(() => actions.set([1, 2, 3]))
    act(() => actions.remove(2))
    expect(result.current[0]).toEqual([1, 3])

    act(() => actions.removeIndex(1))
    expect(result.current[0]).toEqual([1])
  })

  it('测试removeById正常', () => {
    const { result } = renderHook(({ initialValue }) => useArray(initialValue), {
      initialProps: { initialValue: [{ id: 1, value: 1 }, { id: 2, value: 2 }] },
    })
    const [, actions] = result.current

    act(() => actions.removeById(1))
    expect(result.current[0]).toEqual([{ id: 2, value: 2 }])
  })
})
