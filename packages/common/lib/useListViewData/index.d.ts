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
    listData: any[];
    initQuery: {
        page: {
            pageNo: number;
            pageSize: number;
            hasMore: boolean;
        };
        query: Record<string, any>;
    };
    query: {
        page: {
            pageNo: number;
            pageSize: number;
            hasMore: boolean;
        };
        query: Record<string, any>;
    };
    loading: boolean;
    loadData: (fetchParams: any) => Promise<void>;
    loadNextPage: () => Promise<void>;
    clearQuery: () => void;
    reloadData: () => Promise<void>;
    setQuery: import("react").Dispatch<import("react").SetStateAction<{
        page: {
            pageNo: number;
            pageSize: number;
            hasMore: boolean;
        };
        query: Record<string, any>;
    }>>;
};
