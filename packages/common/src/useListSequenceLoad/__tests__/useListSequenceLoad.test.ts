import { act, renderHook } from '@testing-library/react-hooks'
import useListSequenceLoad from '..'

describe('useListSequenceLoad 校验', () => {
  it('引用正常', () => {
    expect(useListSequenceLoad).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => {
      return useListSequenceLoad([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], { groupSize: 3 })
    })
    expect(result.current.showList).toEqual([0, 1, 2])
    expect(result.current.isAllLoaded).toEqual(false)
    expect(result.current.showfooterLoading).toEqual(true)
  })

  it('请求下一页正常', () => {
    const { result } = renderHook(() => {
      return useListSequenceLoad([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], { groupSize: 3 })
    })
    act(() => {
      result.current.loadNextGroup()
    })

    expect(result.current.showList).toEqual([0, 1, 2, 3, 4, 5])
    expect(result.current.isAllLoaded).toEqual(false)
    expect(result.current.showfooterLoading).toEqual(true)

    act(() => {
      result.current.loadNextGroup()
      result.current.loadNextGroup()
      result.current.loadNextGroup()
    })

    expect(result.current.showList).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    expect(result.current.isAllLoaded).toEqual(true)
    expect(result.current.showfooterLoading).toEqual(false)
  })

  it('清空条件正常', () => {
    const { result } = renderHook(() => {
      return useListSequenceLoad([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], { groupSize: 3 })
    })
    act(() => {
      result.current.reset()
    })
    expect(result.current.showList).toEqual([0, 1, 2])
    expect(result.current.isAllLoaded).toEqual(false)
    expect(result.current.showfooterLoading).toEqual(true)
  })
})
