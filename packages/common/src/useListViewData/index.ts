import { useCallback, useMemo } from 'react'
import useObjectState from '../useObjectState'

export interface QueryParams {
  page: {
    pageNo: number
    pageSize: number
    hasMore: boolean
  }
  query: Record<string, any>
}

export type FetchFn = (query: QueryParams) => Promise<{ data: any; hasMore: undefined | boolean }>

export const initialQuery: QueryParams = {
  page: {
    pageNo: 1,
    pageSize: 10,
    hasMore: false,
  },
  query: {},
}

const listViewReducers = {
  setListData: (state: any, payload: any) => ({
    ...state,
    listData: typeof payload === 'function' ? payload(state.listData) : payload,
  }),
  setFinalQuery: (state: any, payload: any) => ({
    ...state,
    finalQuery: typeof payload === 'function' ? payload(state.finalQuery) : payload,
  }),
}

/**
 * 处理列表数据的hooks
 */
export default function useListViewData(fetchFn: FetchFn, query = {}) {
  const initData = useMemo(() => ({ ...initialQuery, ...query }), [query])

  const [{ listData, loading, finalQuery }, setObjectState, { setFinalQuery }] = useObjectState(
    {
      listData: [],
      loading: false,
      finalQuery: initData, // 用于筛选的请求参数
    },
    listViewReducers
  )

  // 获取数据, filter通过请求参数传入
  const loadData = useCallback(
    (fetchParams) => {
      const { page, query: fetchQuery, isMerge = false } = fetchParams
      setObjectState({ loading: true })
      return new Promise((resolve, reject) => {
        fetchFn({ page, query: fetchQuery })
          .then(({ data, hasMore }) => {
            setObjectState((prevState) => ({
              loading: false,
              finalQuery: { page: { ...page, hasMore }, query: fetchQuery },
              listData: isMerge ? prevState.listData.concat(data) : data || [],
            }))
            resolve('load data success')
          })
          .catch((e) => {
            setObjectState({ loading: false })
            console.log(e)
            reject(new Error(`load data error`))
          })
      })
    },
    [fetchFn]
  )

  // 获取下一页数据
  const loadNextPage = useCallback(() => {
    return loadData({
      ...finalQuery,
      page: { ...finalQuery.page, pageNo: finalQuery.page.pageNo + 1 },
      isMerge: true,
    })
  }, [loadData, finalQuery])

  /**
   * 清空筛选条件
   */
  const clearQuery = useCallback(() => {
    setObjectState({ finalQuery: initData })
  }, [initData])

  // 重载数据，即清空分页、查询条件重新请求
  const reloadData = useCallback(() => {
    setObjectState({ finalQuery: initData })
    return loadData(initData)
  }, [loadData, initData])

  return {
    listData,
    initialQuery: { ...initData },
    query: finalQuery,
    loading,
    loadData,
    loadNextPage,
    clearQuery,
    reloadData,
    setQuery: setFinalQuery,
  }
}
