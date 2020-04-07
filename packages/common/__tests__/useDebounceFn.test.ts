import { act, renderHook } from '@testing-library/react-hooks'
import useDebounceFn from '../src/useDebounceFn'
import useCounter from '../src/useCounter'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

describe('useDebounceFn 校验', () => {
  it('引用正常', () => {
    expect(useDebounceFn).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [debounceFn] = useDebounceFn(inc as any)
      return [value, debounceFn]
    })
    expect(result.current[0]).toEqual(0)
  })

  test('debounceState update', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [debounceFn] = useDebounceFn(inc as any, 4)
      return [value, debounceFn]
    })
    const [, debounceFn] = result.current as [number, any]
    act(() => {
      debounceFn()
      debounceFn()
      debounceFn()
    })

    expect(result.current[0]).toBe(0)
    await act(() => timeout(5))
    expect(result.current[0]).toBe(1)
  })

  test('no debounce', async () => {
    const { result, rerender } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      return [value, inc]
    })
    const [, debounceFn] = result.current as [number, any]
    expect(result.current[0]).toBe(0)
    act(() => {
      debounceFn()
      debounceFn()
      debounceFn()
    })
    await act(() => timeout(0))
    expect(result.current).toBe(3)
  })
})
