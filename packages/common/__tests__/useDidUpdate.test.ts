import { act, renderHook } from '@testing-library/react-hooks'
import { useState } from 'react'
import useCounter from '../src/useCounter'
import useDidUpdate from '../src/useDidUpdate'

describe('useDidUpdate 校验', () => {
  it('引用正常', () => {
    expect(useDidUpdate).toBeDefined()
  })

  it('引用正常', () => {
    expect(useDidUpdate).toBeDefined()
  })

  it('didUpdate 正常', async () => {
    const { result } = renderHook(() => {
      const [depCount, { inc }] = useCounter(0)
      const [count, setCount] = useState(0)

      useDidUpdate(() => {
        setCount((v) => v + 1)
      }, [depCount])

      return { count, inc }
    })

    expect(result.current.count).toEqual(0)
    act(() => result.current.inc())
    expect(result.current.count).toBe(1)
  })
})
