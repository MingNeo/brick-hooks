import { useState, useCallback, useMemo } from 'react';

export const initialQuery = {
  page: {
    pageNo: 0,
    pageSize: 10,
    hasMore: false,
  },
  query: {},
};

// 处理列表数据的hooks
export default function useListViewData(fetchFn, propsQuery = {}) {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const initData = useMemo(() => ({ ...initialQuery, ...propsQuery }), [propsQuery]);

  // 用于筛选的请求参数
  const [query, setQuery] = useState(initData);

  // 获取数据, filter通过请求参数传入
  const fetchData = useCallback((fetchParams) => {
    const { page, query: fetchQuery, isMerge = false } = fetchParams;
    setLoading(true);

    return fetchFn({ page, query: fetchQuery })
      .then(({ data, hasMore }) => {
        setListData(isMerge ? listData.concat(data) : data || []);
        setQuery({ page: { ...page, hasMore }, fetchQuery });
      })
      .finally(() => setLoading(false));
  }, [fetchFn, listData]);

  // 获取下一页数据
  const fetchNextPage = useCallback(() => {
    return fetchData({
      ...query,
      page: { ...query.page, pageNo: query.page.pageNo + 1 },
      isMerge: true,
    });
  }, [fetchData, query]);

  /**
   * 清空筛选条件
   */
  const clearQuery = useCallback(() => {
    setQuery(initData);
  }, [initData]);

  // 重载数据，即清空分页、查询条件重新请求
  const reFetchData = useCallback(() => {
    setQuery(initData);
    return fetchData(initData);
  }, [fetchData, initData]);

  return { listData, initQuery: { ...initData }, query, loading, fetchData, fetchNextPage, clearQuery, reFetchData, setQuery };
}
