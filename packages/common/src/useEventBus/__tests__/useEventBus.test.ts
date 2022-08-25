import React, { useState } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import useEventBus, { useSubscribe as useGlobalSubscribe, publish } from '..'

describe('useEventBus 校验', () => {
  it('引用正常', () => {
    expect(useEventBus).toBeDefined()
  })

  it('功能正常', async () => {
    const { result: resultA } = renderHook(() => {
      const [value, setValue] = useState()
      const hookResult = useEventBus('test:useEventBus-changeValue')
      const { publish, useSubscribe } = hookResult
      useSubscribe(setValue)
      return { value, publish, useSubscribe }
    })

    const { result: resultB } = renderHook(
      (props) => {
        const [value, setValue] = useState()
        props.useSubscribe(setValue)
        return { value }
      },
      { initialProps: { useSubscribe: resultA.current.useSubscribe } }
    )

    const { result: resultC } = renderHook(() => {
      const [value, setValue] = useState()
      useGlobalSubscribe('test:useEventBus-changeValue', setValue)
      return { value }
    })

    const { result: resultOnce } = renderHook(() => {
      const [value, setValue] = useState()
      useGlobalSubscribe('test:useEventBus-changeValue', setValue, { once: true })
      return { value }
    })

    // @ts-ignore
    act(() => resultA.current.publish(1))

    expect(resultA.current.value).toEqual(1)
    expect(resultB.current.value).toEqual(1)
    expect(resultC.current.value).toEqual(1)
    expect(resultOnce.current.value).toEqual(1)

    // @ts-ignore
    act(() => publish('test:useEventBus-changeValue', 2))

    expect(resultA.current.value).toEqual(2)
    expect(resultB.current.value).toEqual(2)
    expect(resultC.current.value).toEqual(2)
    expect(resultOnce.current.value).toEqual(1)
  })
})
