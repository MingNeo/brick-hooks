import { act, renderHook } from '@testing-library/react-hooks'
import useTimeoutFn from '..'
import useCounter from '../../useCounter'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

describe('useTimeoutFn 校验', () => {
  it('引用正常', () => {
    expect(useTimeoutFn).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      useTimeoutFn(inc as any)
      return { value }
    })
    expect(result.current.value).toEqual(0)
  })

  it('update', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [start, { isPending, stop }] = useTimeoutFn(inc as any, 4)
      return { value, start, isPending, stop }
    })
    act(() => {
      result.current.start()
    })

    expect(result.current.value).toBe(0)
    expect(result.current.isPending).toBe(true)
    await act(() => timeout(5))
    expect(result.current.value).toBe(1)
    expect(result.current.isPending).toBe(false)
  })

  it('return', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [start, { isPending, stop }] = useTimeoutFn((n) => { 
        inc(n)
        return value + n
       }, 4)
      return { value, start, isPending, stop }
    })

    expect(result.current.value).toBe(0)
    act(() => {
      result.current.start(3).then(data => {
        expect(data).toBe(3)
      })
      expect(result.current.value).toBe(0)
    })
  })

  it('unmount', async () => {
    const { result, unmount } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [start, { isPending, stop }] = useTimeoutFn(inc as any, 4)
      return { value, start, isPending, stop }
    })
    act(() => {
      result.current.start()
    })

    expect(result.current.value).toBe(0)
    expect(result.current.isPending).toBe(true)
    unmount()
    await act(() => timeout(5))
    expect(result.current.value).toBe(0)
  })
})
