import { useState, useCallback, useMemo } from 'react'

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

/**
 * 处理列表数据的hooks
 */
export default function useListViewData(fetchFn: FetchFn, query = {}) {
  const [listData, setListData] = useState([])
  const [loading, setLoading] = useState(false)
  const initData = useMemo(() => ({ ...initialQuery, ...query }), [query])
  // 用于筛选的请求参数
  const [finalQuery, setFinalQuery] = useState(initData)

  // 获取数据, filter通过请求参数传入
  const loadData = useCallback(
    (fetchParams) => {
      const { page, query: fetchQuery, isMerge = false } = fetchParams
      setLoading(true)
      return new Promise((resolve, reject) => {
        fetchFn({ page, query: fetchQuery })
          .then(({ data, hasMore }) => {
            setLoading(false)
            setListData((listData) => (isMerge ? listData.concat(data) : data || []))
            setFinalQuery({ page: { ...page, hasMore }, query: fetchQuery })
            resolve('load data success')
          })
          .catch((e) => {
            setLoading(false)
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
    setFinalQuery(initData)
  }, [initData])

  // 重载数据，即清空分页、查询条件重新请求
  const reloadData = useCallback(() => {
    setFinalQuery(initData)
    return loadData(initData)
  }, [loadData, initData])

  return {
    listData,
    initQuery: { ...initData },
    query: finalQuery,
    loading,
    loadData,
    loadNextPage,
    clearQuery,
    reloadData,
    setQuery: setFinalQuery,
  }
}
