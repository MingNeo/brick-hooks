import { act, renderHook } from '@testing-library/react-hooks'
import useDebounceValue from '../src/useDebounceValue'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

describe('useDebounceValue 校验', () => {
  it('引用正常', () => {
    expect(useDebounceValue).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(({ value }) => useDebounceValue(value), {
      initialProps: { value: 0 },
    })
    expect(result.current).toEqual(0)
  })

  it('debounceState update', async () => {
    const { result, rerender } = renderHook(({ value }) => useDebounceValue(value, 4), {
      initialProps: { value: 99 },
    })
    rerender({ value: 100 })
    expect(result.current).toBe(99)
    rerender({ value: 101 })
    expect(result.current).toBe(99)
    await act(() => timeout(5))
    expect(result.current).toBe(101)
  })

  it('no debounce', async () => {
    const { result, rerender } = renderHook(({ value }) => useDebounceValue(value, 0), {
      initialProps: { value: 99 },
    })
    expect(result.current).toBe(99)
    rerender({ value: 100 })
    await act(() => timeout(0))
    expect(result.current).toBe(100)
  })
})
