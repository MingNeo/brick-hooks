import { act, renderHook } from '@testing-library/react-hooks'
import jestDiff from 'jest-diff'
import useCascader from '..'

const mockData = [
  { id: 1, pid: 0, value: '陕西' },
  { id: 11, pid: 1, value: '西安' },
  { id: 12, pid: 1, value: '渭南' },
  { id: 13, pid: 1, value: '咸阳' },
  { id: 2, pid: 0, value: '广东' },
  { id: 21, pid: 2, value: '广州' },
  { id: 22, pid: 2, value: '深圳' },
  { id: 23, pid: 2, value: '潮汕' },
  { id: 3, pid: 0, value: '湖南' },
  { id: 31, pid: 3, value: '长沙' },
  { id: 32, pid: 3, value: '常德' },
  { id: 33, pid: 3, value: '岳阳' },
].map((v, i) => ({ ...v, sortIndex: i }))

const fetchSub = ({ id = 0 }: any = {}) => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData.filter((v) => v.pid === id))
    }, 100)
    resolve(mockData.filter((v) => v.pid === id))
  })
}

describe('useCascader 校验', () => {
  it('引用正常', () => {
    expect(useCascader).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCascader({ fetchSub, parentIdKey: 'pid' }))
    expect(result.current.data).toEqual([])
    expect(result.current.loading).toEqual(true)
    await waitForNextUpdate()
    expect(result.current.data.map(v => v.id)).toEqual(mockData.filter((v) => v.pid === 0).map(v => v.id))
    expect(result.current.loading).toEqual(false)
    await act(async () => {
      await result.current.loadSubTree({ id: 1, pid: 0, value: '陕西' })
    })
    expect(result.current.loading).toEqual(false)
    expect(
      jestDiff(
        sort(result.current.flatNodes).map((v) => v.id),
        sort(mockData.filter((v) => v.pid === 0 || v.pid === 1).map((v) => v.id))
      )
    ).toMatch('Compared values have no visual difference.')
    act(() => {
      result.current.toggleChecked(1, true)
    })
    expect(result.current.checkeds.map((v) => v.id)).toEqual([1])
    act(() => {
      result.current.setCheckeds([2], true)
    })
    expect(result.current.checkeds.map((v) => v.id)).toEqual([1, 2])
    act(() => {
      result.current.clearCheckeds()
    })
    expect(result.current.checkeds.map((v) => v.id)).toEqual([])
  })
})

function sort(arr) {
  return arr.sort((a, b) => a.sortIndex - b.sortIndex)
}
