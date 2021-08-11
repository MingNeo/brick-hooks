export interface QueryParams {
    page: {
        pageNo: number;
        pageSize: number;
        hasMore: boolean;
    };
    query: Record<string, any>;
}
export declare type FetchFn = (query: QueryParams) => Promise<{
    data: any;
    hasMore: undefined | boolean;
}>;
export declare const initialQuery: QueryParams;
/**
 * 处理列表数据的hooks
 */
export default function useListViewData(fetchFn: FetchFn, query?: {}): {
    listData: any;
    initialQuery: {
        page: {
            pageNo: number;
            pageSize: number;
            hasMore: boolean;
        };
        query: Record<string, any>;
    };
    query: any;
    loading: any;
    loadData: (fetchParams: any) => Promise<unknown>;
    loadNextPage: () => Promise<unknown>;
    clearQuery: () => void;
    reloadData: () => Promise<unknown>;
    setQuery: (...args: any[]) => void;
};
