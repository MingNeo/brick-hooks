import { act, renderHook } from '@testing-library/react-hooks'
import useQueryParams from '..'

describe('useQueryParams', () => {
  it('useQueryParams success', () => {
    const { result } = renderHook((props) => {
      return useQueryParams('?a=3')
    })
    expect(result.current.queryParams).toEqual({ a: 3 })
  })
})
