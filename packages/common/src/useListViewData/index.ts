import { useCallback, useEffect, useMemo } from 'react'
import useObjectState from '../useObjectState'
import useAsync from '../useAsync'

export interface QueryParams {
  pageNo: number
  pageSize: number
  query: Record<string, any>
}

export type FetchFn = (query: QueryParams) => Promise<{ data: any; hasMore: undefined | boolean }>

export const defaultInitialQuery: QueryParams = {
  pageNo: 1,
  pageSize: 10,
  query: {},
}

const listViewReducers = {
  setQuery: (state: any, payload: any) => ({
    ...state,
    query: typeof payload === 'function' ? payload(state.query) : payload,
  }),
}

/**
 * 处理列表数据的hooks
 */
export default function useListViewData(fetchFn: FetchFn, initialQuery = {}, options = {}) {
  const initQuery = useMemo(() => ({ ...defaultInitialQuery, ...initialQuery }), [initialQuery])

  const { isMerge = true } = options as any
  const [asyncFetchData, { loading }] = useAsync(fetchFn)

  const [{ listData, query, hasMore }, setObjectState, { setQuery }] = useObjectState(
    {
      hasMore: false,
      listDataMap: {},
      listData: [],
      query: initQuery, // 用于筛选的请求参数
    },
    listViewReducers
  )

  // 获取数据, filter通过请求参数传入
  const loadData = useCallback(
    (params?: Record<string, any>) => {
      const currentQuery = { ...query, ...params }
      return new Promise((resolve, reject) => {
        asyncFetchData(params)
          .then(({ data, hasMore: hasMorePage }) => {
            setObjectState((prevState) => ({
              hasMore: hasMorePage,
              query: currentQuery,
              listData: isMerge ? [...prevState.listData, ...data] : data,
            }))
            resolve('load data success')
          })
          .catch((e) => {
            reject(new Error(`load data error`))
          })
      })
    },
    [asyncFetchData, isMerge, query, setObjectState]
  )

  useEffect(() => {}, [])

  // 获取下一页数据
  const loadNextPage = useCallback(() => {
    return (
      hasMore &&
      loadData({
        ...query,
        pageNo: query.pageNo + 1,
      })
    )
  }, [loadData, query, hasMore])

  /**
   * 清空筛选条件
   */
  const clearQuery = useCallback(() => {
    setObjectState({ query: initQuery })
  }, [initQuery, setObjectState])

  // 重载数据，即清空分页、查询条件重新请求
  const reloadData = useCallback(() => {
    setObjectState({ query: initQuery })
    return loadData(initQuery)
  }, [setObjectState, initQuery, loadData])

  return {
    listData,
    query: query,
    loading,
    loadData,
    loadNextPage,
    clearQuery,
    reloadData,
    setQuery,
  }
}
