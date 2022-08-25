import { act, renderHook } from '@testing-library/react-hooks'
import useMediaQuery from '..'
import '../../../__tests__/mock'

window.resizeTo(200, 500)

describe('useMediaQuery', () => {
  it('useMediaQuery success', () => {
    const { result } = renderHook((props) => {
      return useMediaQuery('(max-width: 200px)')
    })
    expect(result.current).toBe(true)
    act(() => {
      window.resizeTo(400, 500)
    })
    expect(result.current).toBe(false)
    act(() => {
      window.resizeTo(200, 500)
    })
    expect(result.current).toBe(true)
  })

  window.resizeTo(200, 500)

  it('useMediaQuery success', () => {
    const { result } = renderHook((props) => {
      return useMediaQuery('(max-width: 700px)')
    })
    expect(result.current).toBe(true)
    act(() => {
      window.resizeTo(400, 500)
    })
    expect(result.current).toBe(true)
    act(() => {
      window.resizeTo(900, 500)
    })
    expect(result.current).toBe(false)
  })
})
