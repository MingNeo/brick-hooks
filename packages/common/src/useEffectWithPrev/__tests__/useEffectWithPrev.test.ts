import { act, renderHook } from '@testing-library/react-hooks'
import { useRef, useState } from 'react'
import useEffectWithPrev from '..'

describe('useEffectWithPrev 校验', () => {
  it('引用正常', () => {
    expect(useEffectWithPrev).toBeDefined()
  })

  it('run success', async () => {
    const { result, unmount } = renderHook(() => {
      const [a, setA] = useState(0)
      const [b, setB] = useState({})
      const [c, setC] = useState([])
      const resultRef = useRef({})
      const returnRef = useRef(0)

      useEffectWithPrev(
        (prev) => {
          resultRef.current = {
            'newA===oldA': a === prev[0],
            'newB===oldB': b === prev[1],
            'newC===oldC': c === prev[2],
          }
          return () => {
            returnRef.current += 1
          }
        },
        [a, b, c],
      )

      return { a, b, c, setA, setB, setC, resultRef, returnRef }
    })
    expect(result.current.a).toEqual(0)
    expect(result.current.b).toEqual({})
    expect(result.current.c).toEqual([])
    expect(result.current.returnRef.current).toEqual(0)
    act(() => {
      result.current.setA(1)
    })

    expect(result.current.a).toEqual(1)
    expect(result.current.b).toEqual({})
    expect(result.current.c).toEqual([])
    expect(result.current.resultRef.current).toEqual({
      'newA===oldA': false,
      'newB===oldB': true,
      'newC===oldC': true,
    })

    act(() => {
      result.current.setB({ x: 1 })
    })
    expect(result.current.returnRef.current).toEqual(1)
    expect(result.current.a).toEqual(1)
    expect(result.current.b).toEqual({ x: 1 })
    expect(result.current.c).toEqual([])
    expect(result.current.resultRef.current).toEqual({
      'newA===oldA': true,
      'newB===oldB': false,
      'newC===oldC': true,
    })

    act(() => unmount())
    expect(result.current.returnRef.current).toEqual(2)
  })
})
