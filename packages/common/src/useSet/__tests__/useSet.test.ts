import { act, renderHook } from '@testing-library/react-hooks'
import useSet from '..'

describe('test useSet', () => {
  it('引用正常', () => {
    expect(useSet).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue }) => useSet(initialValue), {
      initialProps: { initialValue: new Set<any>([1, 2, 3]) },
    })
    expect(Array.from(result.current[0])).toEqual([1, 2, 3])
  })

  it('methods success', () => {
    const { result } = renderHook(({ initialValue }) => useSet(initialValue), {
      initialProps: { initialValue: new Set<any>([1, 2, 3]) },
    })
    const [, actions] = result.current

    expect(Array.from(result.current[0])).toEqual([1, 2, 3])

    act(() => actions.add(4))
    expect(result.current[0].has(4)).toBe(true)

    act(() => actions.delete(1))
    expect(result.current[0].has(1)).toBe(false)

    expect(result.current[0].has(2)).toBe(true)
    expect(result.current[0].has(7)).toBe(false)

    act(() => actions.toggle(3))
    expect(result.current[0].has(3)).toBe(false)
    act(() => actions.toggle(3))
    expect(result.current[0].has(3)).toBe(true)

    act(() => actions.reset())
    expect(Array.from(result.current[0])).toEqual([])
  })
})
