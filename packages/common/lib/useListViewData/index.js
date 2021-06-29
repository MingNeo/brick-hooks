"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialQuery = void 0;
var react_1 = require("react");
exports.initialQuery = {
    page: {
        pageNo: 1,
        pageSize: 10,
        hasMore: false,
    },
    query: {},
};
/**
 * 处理列表数据的hooks
 */
function useListViewData(fetchFn, query) {
    if (query === void 0) { query = {}; }
    var _a = __read(react_1.useState([]), 2), listData = _a[0], setListData = _a[1];
    var _b = __read(react_1.useState(false), 2), loading = _b[0], setLoading = _b[1];
    var initData = react_1.useMemo(function () { return (__assign(__assign({}, exports.initialQuery), query)); }, [query]);
    // 用于筛选的请求参数
    var _c = __read(react_1.useState(initData), 2), finalQuery = _c[0], setFinalQuery = _c[1];
    // 获取数据, filter通过请求参数传入
    var loadData = react_1.useCallback(function (fetchParams) {
        var page = fetchParams.page, fetchQuery = fetchParams.query, _a = fetchParams.isMerge, isMerge = _a === void 0 ? false : _a;
        setLoading(true);
        return new Promise(function (resolve, reject) {
            fetchFn({ page: page, query: fetchQuery })
                .then(function (_a) {
                var data = _a.data, hasMore = _a.hasMore;
                setLoading(false);
                setListData(function (listData) { return (isMerge ? listData.concat(data) : data || []); });
                setFinalQuery({ page: __assign(__assign({}, page), { hasMore: hasMore }), query: fetchQuery });
                resolve('load data success');
            })
                .catch(function (e) {
                setLoading(false);
                console.log(e);
                reject(new Error("load data error"));
            });
        });
    }, [fetchFn]);
    // 获取下一页数据
    var loadNextPage = react_1.useCallback(function () {
        return loadData(__assign(__assign({}, finalQuery), { page: __assign(__assign({}, finalQuery.page), { pageNo: finalQuery.page.pageNo + 1 }), isMerge: true }));
    }, [loadData, finalQuery]);
    /**
     * 清空筛选条件
     */
    var clearQuery = react_1.useCallback(function () {
        setFinalQuery(initData);
    }, [initData]);
    // 重载数据，即清空分页、查询条件重新请求
    var reloadData = react_1.useCallback(function () {
        setFinalQuery(initData);
        return loadData(initData);
    }, [loadData, initData]);
    return {
        listData: listData,
        initQuery: __assign({}, initData),
        query: finalQuery,
        loading: loading,
        loadData: loadData,
        loadNextPage: loadNextPage,
        clearQuery: clearQuery,
        reloadData: reloadData,
        setQuery: setFinalQuery,
    };
}
exports.default = useListViewData;
