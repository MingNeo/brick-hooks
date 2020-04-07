import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks'
import useListViewData, { initialQuery } from './index'

describe('useListViewData 校验', () => {
  it('引用正常', () => {
    expect(useListViewData).toBeDefined()
  })

  let fetchParams = { ...initialQuery }

  let fetchFn = (params) => {
    fetchParams = params
    return new Promise((resolve) => {
      resolve({ data: [1], hasMore: true })
    })
  }
  const { result } = renderHook(({ fetchFn }) => {
    return useListViewData(fetchFn)
  }, { initialProps: { fetchFn } })

  it('初始状态正常', () => {
    act(() => {
      expect(result.current.initQuery).toEqual(initialQuery)
      expect(Object.values(result.current.listData)).toEqual([])
      expect(result.current.loading).toBe(false)
    })
  })

  it('请求正常', () => {
    let fetchPromist;
    act(() => {
      expect(result.current.loading).toEqual(false)
      fetchPromist = result.current.fetchData({ page: {pageNo: 1, pageSize: 10}, query: {} })
    })

    expect(result.current.loading).toEqual(true)
    
    act(() => {
      fetchPromist.then(response => {
        expect(result.current.loading).toEqual(false)
        expect(response).toEqual({ data: [], hasMore: true })
      })
    })
    expect(result.current.listData).toEqual([])
  })

  it('请求下一页正常', () => {
    const oldPage = {...fetchParams.page } || {}
    act(() => {
      result.current.fetchNextPage()
    })

    expect(fetchParams.page.pageNo).toEqual(oldPage.pageNo + 1)
  })

  it('清空条件正常', () => {
    act(() => {
      result.current.clearQuery()
    })
    expect(result.current.query).toEqual(initialQuery)
  })

  it('重载正常', () => {
    act(() => {
      result.current.reFetchData().then(() => {
        return expect(result.current.query).toEqual(initialQuery)
      })
    })
  })

})
