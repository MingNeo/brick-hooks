import { act, renderHook } from '@testing-library/react-hooks'
import useListViewData, { initialQuery, FetchFn } from '../src/useListViewData/index'

describe('useListViewData 校验', () => {
  it('引用正常', () => {
    expect(useListViewData).toBeDefined()
  })

  let fetchParams = { ...initialQuery }

  let fetchFn: FetchFn = (params) => {
    fetchParams = { ...fetchParams, ...(params || {}) }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: [1], hasMore: true })
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
    expect(result.current.initQuery).toEqual(initialQuery)
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
      result.current
        .loadData({ page: { pageNo: 1, pageSize: 10 }, query: {} })
        .then((response: any) => {
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

  it('请求下一页正常', () => {
    const { result } = renderHook(
      ({ fetchFn }) => {
        return useListViewData(fetchFn)
      },
      { initialProps: { fetchFn } }
    )
    const oldPage = { ...fetchParams.page } || {}
    act(() => {
      result.current.loadNextPage()
    })

    expect(fetchParams.page.pageNo).toEqual(((oldPage as any).pageNo || 1) + 1)
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
    expect(result.current.query).toEqual(initialQuery)
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
        return expect(result.current.query).toEqual(initialQuery)
      })
    })
  })
})
