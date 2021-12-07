import { act, renderHook } from '@testing-library/react-hooks'
import { useState } from 'react'
import useDebounceEffect from '../src/useDebounceEffect/index'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

let handleFetch = (setState?: any) => {
  for (let index = 5; index > 0; index--) {
    setTimeout(() => {
      setState && setState(index)
    }, 1)
  }
}

describe('useDebounceEffect 校验', () => {
  it('引用正常', () => {
    expect(useDebounceEffect).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(5)
      const [resultData, setResultData] = useState(state)

      useDebounceEffect(
        () => {
          setResultData(state)
        },
        0,
        [state]
      )

      const start = () => handleFetch(setState)
      return [resultData, start] as any
    })
    expect(result.current[0]).toEqual(5)
  })

  it('debounce 正常', async () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(5)
      const [resultData, setResultData] = useState(state)

      useDebounceEffect(
        () => {
          setResultData(state)
        },
        10,
        [state]
      )

      const start = () => handleFetch(setState)
      return [resultData, start] as any
    })

    expect(result.current[0]).toBe(5)
    act(() => result.current[1]())
    expect(result.current[0]).toBe(5)
    await act(async () => await timeout(3))
    expect(result.current[0]).toBe(5)
    await act(async () => await timeout(11))
    expect(result.current[0]).toBe(1)
  })
})
