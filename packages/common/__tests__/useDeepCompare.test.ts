import { renderHook } from '@testing-library/react-hooks'
import jestDiff from 'jest-diff'
import useDeepCompare from '../src/useDeepCompare'

describe('useDeepCompare 校验', () => {
  it('引用正常', () => {
    expect(useDeepCompare).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue }) => useDeepCompare(initialValue), {
      initialProps: { initialValue: [1, 2, 3] },
    })
    expect(result.current.value).toEqual([1, 2, 3])
  })
  it('功能正常', () => {
    const initialValue = { level1: { level2: { data: 0 } } }
    const { result, rerender } = renderHook(({ initialValue }) => useDeepCompare(initialValue), {
      initialProps: { initialValue },
    })

    expect(result.current.value).toEqual({ level1: { level2: { data: 0 } } })

    rerender({ initialValue: initialValue })
    expect(result.current.isEqual).toEqual(true)

    // isEqual
    initialValue.level1.level2 = { data: 1 }
    rerender({ initialValue: { level1: { level2: { data: 1 } } } })
    expect(jestDiff(result.current.value, { level1: { level2: { data: 1 } } })).toMatch(
      'Compared values have no visual difference.'
    )
    expect(result.current.isEqual).toEqual(true)

    // not isEqual
    rerender({ initialValue: { level1: { level2: { data: 2 } } } })
    expect(jestDiff(result.current.value, { level1: { level2: { data: 2 } } })).toMatch(
      'Compared values have no visual difference.'
    )
    expect(result.current.isEqual).toEqual(false)
  })
})
