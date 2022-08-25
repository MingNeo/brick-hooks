import { act, renderHook } from '@testing-library/react-hooks'
import { useState } from 'react'
import usePrevious from '..'
import useForceRender from '../../useForceRender'

describe('usePrevious 校验', () => {
  it('引用正常', () => {
    expect(usePrevious).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(
      ({ value }) => {
        return usePrevious(value)
      },
      { initialProps: { value: 0 } }
    )
    expect(result.current).toEqual(undefined)
  })

  it('比较模式，若干操作后仍正常', async () => {
    const { result } = renderHook(
      ({ value }) => {
        const [state, setstate] = useState(value)
        const prev = usePrevious(state)
        const forceUpdate = useForceRender()
        return [state, prev, setstate, forceUpdate] as [any, any, any, any]
      },
      { initialProps: { value: 0 } }
    )

    const [, , setstate, forceUpdate] = result.current

    act(() => setstate((prevState: number) => prevState + 1))
    expect(result.current[1]).toEqual(0)

    act(() => setstate((prevState: number) => prevState + 1))
    expect(result.current[1]).toEqual(1)

    act(() => setstate((prevState: number) => prevState + 1))
    expect(result.current[1]).toEqual(2)

    // 比较数据的模式下，强制渲染一次组件后，prev应仍是上次的值
    act(() => forceUpdate())
    expect(result.current[0]).toEqual(3)
    expect(result.current[1]).toEqual(2)
  })

  it('不比较模式，若干操作后仍正常', async () => {
    const { result } = renderHook(
      ({ value }) => {
        const [state, setstate] = useState(value)
        const prev = usePrevious(state, false)
        const forceUpdate = useForceRender()
        return [state, prev, setstate, forceUpdate] as [any, any, any, any]
      },
      { initialProps: { value: 0 } }
    )

    const [, , setstate, forceUpdate] = result.current

    act(() => setstate((prevState: number) => prevState + 1))
    expect(result.current[1]).toEqual(0)

    act(() => setstate((prevState: number) => prevState + 1))
    expect(result.current[1]).toEqual(1)

    act(() => setstate((prevState: number) => prevState + 1))
    expect(result.current[1]).toEqual(2)

    // 不比较数据的模式下，强制渲染一次组件后，prev应是上次渲染的值
    // 也就是与上次的值一致
    act(() => forceUpdate())
    expect(result.current[0]).toEqual(3)
    expect(result.current[1]).toEqual(3)
  })
})
