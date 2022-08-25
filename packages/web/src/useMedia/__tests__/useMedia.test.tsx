import { act, renderHook } from '@testing-library/react-hooks'
import useMedia from '..'
import '../../../__tests__/mock'

describe('useMedia', () => {
  it('useMedia success', () => {
    const { result } = renderHook((props) => {
      const mediaQueryValueList = [
        {
          media: '(max-width: 200px)',
          value: 1,
        },
        {
          media: '(max-width: 700px)',
          value: 2,
        },
      ]
      return useMedia(mediaQueryValueList, 1)
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
  })
})
