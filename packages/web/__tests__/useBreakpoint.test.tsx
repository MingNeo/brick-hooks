import { act, renderHook } from '@testing-library/react-hooks'
import useBreakpoint from '../src/useBreakpoint'
import './mock'

describe('useBreakpoint', () => {
  it('useBreakpoint success', () => {
    const { result } = renderHook((props) => {
      const mediaQueryValueList = [
        { max: 201, value: 1 },
        { max: 700, value: 2 },
        { min: 800, value: 3 },
      ]
      return useBreakpoint(mediaQueryValueList, 1)
    })
    expect(result.current).toBe(1)
    act(() => {
      window.resizeTo(400, 500)
    })
    expect(result.current).toBe(2)
    act(() => {
      window.resizeTo(200, 500)
    })
    expect(result.current).toBe(1)
    act(() => {
      window.resizeTo(800, 500)
    })
    expect(result.current).toBe(3)
  })
})
