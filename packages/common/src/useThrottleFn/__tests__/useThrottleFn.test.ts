import { act, renderHook } from '@testing-library/react-hooks'
import { useState } from 'react'
import useThrottleFn from '..'
import useCounter from '../../useCounter'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

describe('useThrottleFn 校验', () => {
  it('引用正常', () => {
    expect(useThrottleFn).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [throttleFn] = useThrottleFn(inc as any)
      return [value, throttleFn]
    })
    expect(result.current[0]).toEqual(0)
  })

  it('test update', async () => {
    const { result } = renderHook(() => {
      const [value, { inc }] = useCounter(0)
      const [throttleFn] = useThrottleFn(inc as any, 4)
      return [value, throttleFn]
    })
    const [, throttleFn] = result.current as [number, any]
    // 连续触发3次+1，只会实际触发一次
    act(() => {
      throttleFn()
      throttleFn()
      throttleFn()
    })

    expect(result.current[0]).toBe(0)
    await act(() => timeout(5))
    expect(result.current[0]).toBe(1)
  })

  it('test not isImmediate success', async () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(0)
      const [throttleFn] = useThrottleFn((v) => setValue(v), 4)
      return [value, throttleFn]
    })
    const [, throttleFn] = result.current as [number, any]
    // 连续触发多次，只会实际触发最后一次
    act(() => {
      throttleFn(1)
      throttleFn(2)
      throttleFn(3)
    })

    expect(result.current[0]).toBe(0)
    await act(() => timeout(5))
    expect(result.current[0]).toBe(3)
  })

  it('test isImmediate success', async () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState(0)
      const [throttleFn] = useThrottleFn((v) => setValue(v), 4, true)
      return [value, throttleFn]
    })
    const [, throttleFn] = result.current as [number, any]
    expect(result.current[0]).toBe(0)

    // 连续触发多次，只会实际触发第一次
    act(() => {
      throttleFn(1)
      throttleFn(2)
      throttleFn(3)
    })

    await act(() => timeout(5))
    expect(result.current[0]).toBe(1)
  })
})
