import { useCallback, useEffect, useMemo } from 'react'
import useObjectState from '../useObjectState'
import useAsync from '../useAsync'

export interface QueryParams {
  pageNo: number
  pageSize: number
  query: Record<string, any>
}

interface Options {
  isMerge?: boolean // 是否自动合并，用于翻页
  autoLoad?: boolean
  initialQuery?: {
    pageSize?: number
    pageNo?: number
  }
}

export type FetchFn = (
  query: QueryParams,
) => Promise<{ data: any[]; hasMore?: boolean; total?: number; [x: string]: any }>

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
export default function useListViewData(fetchFn: FetchFn, options: Options = {}) {
  const { isMerge = false, autoLoad = false, initialQuery = {} } = options
  const initQuery = useMemo(() => ({ ...defaultInitialQuery, ...initialQuery }), [initialQuery])

  const [asyncFetchData, { loading }] = useAsync(fetchFn)

  const [{ listData, query, hasMore, total, pageTotal }, setObjectState, { setQuery }] = useObjectState(
    {
      hasMore: false,
      total: 0,
      pageTotal: 0,
      listData: [],
      query: initQuery, // 用于筛选的请求参数
    },
    listViewReducers,
  )

  // 获取数据, filter通过请求参数传入
  const loadData = useCallback(
    (params: Record<string, any> = {}) => {
      const currentQuery = { ...query, ...params }
      return new Promise((resolve, reject) => {
        asyncFetchData(currentQuery)
          .then(({ data, hasMore: hasMorePage, total }) => {
            const pageTotal = +(total / currentQuery.pageSize).toFixed(0)
            setObjectState((prevState) => ({
              total,
              pageTotal,
              hasMore: hasMorePage ?? pageTotal > currentQuery.pageNo,
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
    [asyncFetchData, isMerge, query, setObjectState],
  )

  useEffect(() => {
    autoLoad && loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoLoad])

  // 获取下一页数据
  const loadNextPage = useCallback(() => {
    return (
      hasMore &&
      loadData({
        ...query,
        pageNo: +query.pageNo + 1,
      })
    )
  }, [loadData, query, hasMore])

  // 获取上一页数据
  const loadPrevPage = useCallback(() => {
    return (
      query.pageNo - 1 > 0 &&
      loadData({
        ...query,
        pageNo: query.pageNo - 1,
      })
    )
  }, [loadData, query])

  /**
   * 清空筛选条件
   */
  const clearQuery = useCallback(() => {
    setQuery(initQuery)
  }, [initQuery, setQuery])

  // 重载数据，即清空分页、查询条件重新请求
  const reloadData = useCallback(() => {
    setQuery(initQuery)
    return loadData(initQuery)
  }, [initQuery, loadData, setQuery])

  return {
    current: query.pageNo,
    total,
    pageTotal,
    hasMore,
    listData,
    query,
    loading,
    loadData,
    loadNextPage,
    loadPrevPage,
    clearQuery,
    reloadData,
    setQuery,
  }
}
