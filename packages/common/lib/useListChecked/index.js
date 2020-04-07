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
var react_1 = require("react");
var checkedMapReducer = function (checkedMap, action) {
    var _a;
    switch (action.type) {
        case 'SET_CHECKED': {
            var key = action.key, checked = action.checked;
            return __assign(__assign({}, checkedMap), (_a = {}, _a[key] = checked, _a));
        }
        case 'SET_ALL_CHECKED': {
            var checked_1 = action.checked;
            return Object.keys(checkedMap).reduce(function (prev, curr) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[curr] = checked_1, _a)));
            }, {});
        }
        case 'SET_CHECKED_MAP': {
            return action.payload;
        }
        case 'EXPAND_CHECKED_MAP': {
            var _b = action.payload, payload = _b === void 0 ? [] : _b;
            return payload.reduce(function (prev, curr) {
                var _a;
                return prev[curr] !== undefined ? prev : __assign(__assign({}, prev), (_a = {}, _a[curr] = false, _a));
            }, checkedMap);
        }
        default:
            return checkedMap;
    }
};
/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中的map
 */
function useListChecked(items, defaultSelecteds) {
    if (items === void 0) { items = []; }
    if (defaultSelecteds === void 0) { defaultSelecteds = []; }
    // 当前已选中
    var currCheckedMap = react_1.useMemo(function () { return items.reduce(function (prev, curr) {
        var _a;
        return (__assign(__assign({}, prev), (_a = {}, _a[curr] = defaultSelecteds.includes(curr), _a)));
    }, {}); }, [items, defaultSelecteds]);
    var _a = __read(react_1.useReducer(checkedMapReducer, currCheckedMap), 2), checkedMap = _a[0], dispatch = _a[1];
    var setChecked = function (key, checked) {
        return dispatch({ type: 'SET_CHECKED', key: key, checked: checked });
    }; // 切换全选
    var isAllChecked = react_1.useMemo(function () { return !!Object.values(checkedMap).length && !Object.values(checkedMap).some(function (v) { return !v; }); }, [checkedMap]);
    var setAllChecked = function (checked) { return dispatch({ type: 'SET_ALL_CHECKED', checked: checked }); };
    // 扩展checkMap，用于动态载入下一页数据等时更新checkMap
    var updateCheckMap = function (newItems) {
        return dispatch({ type: 'EXPAND_CHECKED_MAP', payload: newItems });
    };
    // ids列表变化时, 更新map数据
    react_1.useEffect(function () {
        updateCheckMap(items);
    }, [items]);
    // 切换全选状态或设置为指定的全选状态
    var toggleAllChecked = react_1.useCallback(function (checked) { return setAllChecked(checked !== undefined ? checked : !isAllChecked); }, [isAllChecked]);
    // 清空选中
    var clearChecked = function () { return dispatch({ type: 'SET_CHECKED_MAP', payload: {} }); };
    // 当前选中的key列表
    var checkedIds = react_1.useMemo(function () { return Object.keys(checkedMap).filter(function (key) { return !!checkedMap[key]; }); }, [checkedMap]);
    return {
        isAllChecked: isAllChecked,
        checkedIds: checkedIds,
        checkedMap: checkedMap,
        setChecked: setChecked,
        toggleAllChecked: toggleAllChecked,
        clearChecked: clearChecked,
    };
}
exports.default = useListChecked;
