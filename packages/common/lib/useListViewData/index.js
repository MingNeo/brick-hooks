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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialQuery = void 0;
var react_1 = require("react");
var useObjectState_1 = __importDefault(require("../useObjectState"));
exports.initialQuery = {
    page: {
        pageNo: 1,
        pageSize: 10,
        hasMore: false,
    },
    query: {},
};
var listViewReducers = {
    setListData: function (state, payload) { return (__assign(__assign({}, state), { listData: typeof payload === 'function' ? payload(state.listData) : payload })); },
    setFinalQuery: function (state, payload) { return (__assign(__assign({}, state), { finalQuery: typeof payload === 'function' ? payload(state.finalQuery) : payload })); },
};
/**
 * 处理列表数据的hooks
 */
function useListViewData(fetchFn, query) {
    if (query === void 0) { query = {}; }
    var initData = react_1.useMemo(function () { return (__assign(__assign({}, exports.initialQuery), query)); }, [query]);
    var _a = __read(useObjectState_1.default({
        listData: [],
        loading: false,
        finalQuery: initData,
    }, listViewReducers), 3), _b = _a[0], listData = _b.listData, loading = _b.loading, finalQuery = _b.finalQuery, setObjectState = _a[1], setFinalQuery = _a[2].setFinalQuery;
    // 获取数据, filter通过请求参数传入
    var loadData = react_1.useCallback(function (fetchParams) {
        var page = fetchParams.page, fetchQuery = fetchParams.query, _a = fetchParams.isMerge, isMerge = _a === void 0 ? false : _a;
        setObjectState({ loading: true });
        return new Promise(function (resolve, reject) {
            fetchFn({ page: page, query: fetchQuery })
                .then(function (_a) {
                var data = _a.data, hasMore = _a.hasMore;
                setObjectState(function (prevState) { return ({
                    loading: false,
                    finalQuery: { page: __assign(__assign({}, page), { hasMore: hasMore }), query: fetchQuery },
                    listData: isMerge ? prevState.listData.concat(data) : data || [],
                }); });
                resolve('load data success');
            })
                .catch(function (e) {
                setObjectState({ loading: false });
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
        setObjectState({ finalQuery: initData });
    }, [initData]);
    // 重载数据，即清空分页、查询条件重新请求
    var reloadData = react_1.useCallback(function () {
        setObjectState({ finalQuery: initData });
        return loadData(initData);
    }, [loadData, initData]);
    return {
        listData: listData,
        initialQuery: __assign({}, initData),
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
