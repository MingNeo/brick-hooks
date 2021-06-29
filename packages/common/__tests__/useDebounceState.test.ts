import { act, renderHook } from '@testing-library/react-hooks'
import useDebounceState from '../src/useDebounceState'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

describe('useDebounceState 校验', () => {
  it('引用正常', () => {
    expect(useDebounceState).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(({ value }) => useDebounceState(value), {
      initialProps: { value: 0 },
    })
    expect(result.current[0]).toEqual(0)
  })

  it('debounceState update', async () => {
    const { result } = renderHook(({ value }) => useDebounceState(value, 4), {
      initialProps: { value: 99 },
    })
    result.current[1](100)
    expect(result.current[0]).toBe(99)
    result.current[1](101)
    expect(result.current[0]).toBe(99)
    await act(() => timeout(5))
    expect(result.current[0]).toBe(101)
  })

  it('no debounce', async () => {
    const { result, rerender } = renderHook(({ value }) => useDebounceState(value, 0), {
      initialProps: { value: 99 },
    })
    expect(result.current[0]).toBe(99)
    result.current[1](100)
    await act(() => timeout(0))
    expect(result.current[0]).toBe(100)
  })
})
