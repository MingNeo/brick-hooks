import { act, renderHook } from '@testing-library/react-hooks'
import useListViewData, { defaultInitialQuery, FetchFn } from '../src/useListViewData/index'

describe('useListViewData 校验', () => {
  it('引用正常', () => {
    expect(useListViewData).toBeDefined()
  })

  let fetchParams = { ...defaultInitialQuery }

  let fetchFn: FetchFn = (params) => {
    const query = { ...fetchParams, ...(params || {}) }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: [query.pageNo], hasMore: query.pageNo < 2 })
      }, 100)
    })
  }

  it('初始状态正常', () => {
    const { result } = renderHook(
      ({ fetchFn }) => {
        return useListViewData(fetchFn)
      },
      { initialProps: { fetchFn } }
    )
    expect(result.current.query).toEqual(defaultInitialQuery)
    expect(Object.values(result.current.listData)).toEqual([])
    expect(result.current.loading).toBe(false)
  })

  it('请求正常', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ fetchFn }) => {
        return useListViewData(fetchFn)
      },
      { initialProps: { fetchFn } }
    )

    expect(result.current.loading).toEqual(false)

    await act(async () => {
      result.current.loadData({ page: { pageNo: 1, pageSize: 10 }, query: {} }).then((response: any) => {
        expect(result.current.loading).toEqual(false)
        expect(response).toMatch('load data success')
      })
      await waitForNextUpdate()
      expect(result.current.loading).toEqual(true)
    })
    await waitForNextUpdate()
    expect(result.current.listData).toEqual([1])
    expect(result.current.loading).toEqual(false)
  })

  it('请求下一页正常', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ fetchFn }) => {
        return useListViewData(fetchFn, { pageSize: 2 })
      },
      { initialProps: { fetchFn } }
    )
    act(() => {
      result.current.loadData()
    })
    await waitForNextUpdate()
    expect(result.current.query.pageNo).toEqual(1)
    expect(result.current.listData).toEqual([1])

    act(() => {
      result.current.loadNextPage()
    })
    await waitForNextUpdate()
    expect(result.current.query.pageNo).toEqual(2)
    expect(result.current.listData).toEqual([1, 2])

    await act(async () => {
      await result.current.loadNextPage()
    })
    expect(result.current.query.pageNo).toEqual(2)
    expect(result.current.listData).toEqual([1, 2])
  })

  it('清空条件正常', () => {
    const { result } = renderHook(
      ({ fetchFn }) => {
        return useListViewData(fetchFn)
      },
      { initialProps: { fetchFn } }
    )
    act(() => {
      result.current.clearQuery()
    })
    expect(result.current.query).toEqual(defaultInitialQuery)
  })

  it('重载正常', () => {
    const { result } = renderHook(
      ({ fetchFn }) => {
        return useListViewData(fetchFn)
      },
      { initialProps: { fetchFn } }
    )
    act(() => {
      result.current.reloadData().then(() => {
        return expect(result.current.query).toEqual(defaultInitialQuery)
      })
    })
  })
})
