import { act, renderHook } from '@testing-library/react-hooks'
import useInput from '..'

describe('useInput 校验', () => {
  it('引用正常', () => {
    expect(useInput).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(
      ({ value }) => {
        return useInput(value)
      },
      { initialProps: { value: 0 } }
    )
    expect(result.current.value).toEqual(0)
  })

  it('修改正常', () => {
    const { result } = renderHook(
      ({ value }) => {
        return useInput(value)
      },
      { initialProps: { value: 0 } }
    )
    act(() => {
      result.current.onChange({ currentTarget: { value: 1 } })
    })

    expect(result.current.value).toEqual(1)
  })
})
