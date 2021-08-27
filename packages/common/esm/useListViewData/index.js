import { useCallback, useMemo } from 'react';
import useObjectState from '../useObjectState';
export const initialQuery = {
    page: {
        pageNo: 1,
        pageSize: 10,
        hasMore: false,
    },
    query: {},
};
const listViewReducers = {
    setListData: (state, payload) => (Object.assign(Object.assign({}, state), { listData: typeof payload === 'function' ? payload(state.listData) : payload })),
    setFinalQuery: (state, payload) => (Object.assign(Object.assign({}, state), { finalQuery: typeof payload === 'function' ? payload(state.finalQuery) : payload })),
};
/**
 * 处理列表数据的hooks
 */
export default function useListViewData(fetchFn, query = {}) {
    const initData = useMemo(() => (Object.assign(Object.assign({}, initialQuery), query)), [query]);
    const [{ listData, loading, finalQuery }, setObjectState, { setFinalQuery }] = useObjectState({
        listData: [],
        loading: false,
        finalQuery: initData,
    }, listViewReducers);
    // 获取数据, filter通过请求参数传入
    const loadData = useCallback((fetchParams) => {
        const { page, query: fetchQuery, isMerge = false } = fetchParams;
        setObjectState({ loading: true });
        return new Promise((resolve, reject) => {
            fetchFn({ page, query: fetchQuery })
                .then(({ data, hasMore }) => {
                setObjectState((prevState) => ({
                    loading: false,
                    finalQuery: { page: Object.assign(Object.assign({}, page), { hasMore }), query: fetchQuery },
                    listData: isMerge ? prevState.listData.concat(data) : data || [],
                }));
                resolve('load data success');
            })
                .catch((e) => {
                setObjectState({ loading: false });
                console.log(e);
                reject(new Error(`load data error`));
            });
        });
    }, [fetchFn]);
    // 获取下一页数据
    const loadNextPage = useCallback(() => {
        return loadData(Object.assign(Object.assign({}, finalQuery), { page: Object.assign(Object.assign({}, finalQuery.page), { pageNo: finalQuery.page.pageNo + 1 }), isMerge: true }));
    }, [loadData, finalQuery]);
    /**
     * 清空筛选条件
     */
    const clearQuery = useCallback(() => {
        setObjectState({ finalQuery: initData });
    }, [initData]);
    // 重载数据，即清空分页、查询条件重新请求
    const reloadData = useCallback(() => {
        setObjectState({ finalQuery: initData });
        return loadData(initData);
    }, [loadData, initData]);
    return {
        listData,
        initialQuery: Object.assign({}, initData),
        query: finalQuery,
        loading,
        loadData,
        loadNextPage,
        clearQuery,
        reloadData,
        setQuery: setFinalQuery,
    };
}
