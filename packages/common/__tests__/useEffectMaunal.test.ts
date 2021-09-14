import { act, renderHook } from '@testing-library/react-hooks'
import { useState } from 'react'
import useEffectMaunal from '../src/useEffectMaunal'

describe('useEffectMaunal 校验', () => {
  it('引用正常', () => {
    expect(useEffectMaunal).toBeDefined()
  }) 

  it('run success', async () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(0)

      const callEffect = useEffectMaunal(
        () => {
          setState(prevState => prevState + 1)
        },
      )

      return { state, callEffect }
    })
    expect(result.current.state).toEqual(0)
    act(() => {
      result.current.callEffect()
      expect(result.current.state).toEqual(0)
    })
    expect(result.current.state).toBe(1)
    act(() => {
      result.current.callEffect()
    })
    expect(result.current.state).toEqual(2)
  })
})
