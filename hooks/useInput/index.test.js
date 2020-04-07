import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks'
import useInput, { initialQuery } from './index'

describe('useInput 校验', () => {
  it('引用正常', () => {
    expect(useInput).toBeDefined()
  })

  const { result } = renderHook(({ value }) => {
    return useInput(value)
  }, { initialProps: { value: 0 } })

  it('初始状态正常', () => {
    act(() => {
      expect(result.current.value).toEqual(0)
      result.current.onChange({ currentTarget: { value: 1 } })
    })

    expect(result.current.value).toEqual(1)
  })
})
