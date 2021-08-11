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
var react_1 = require("react");
var useMethods_1 = __importDefault(require("../useMethods"));
var checkedMapReducers = {
    setChecked: function (checkedMap, payload) {
        var _a;
        if (checkedMap === void 0) { checkedMap = {}; }
        return (__assign(__assign({}, checkedMap), (_a = {}, _a[payload.key] = payload.checked, _a)));
    },
    setAllChecked: function (checkedMap, checked) {
        if (checkedMap === void 0) { checkedMap = {}; }
        return Object.keys(checkedMap).reduce(function (prev, curr) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[curr] = checked, _a)));
        }, {});
    },
    clearChecked: function () { return ({}); },
    expandCheckedMap: function (checkedMap, payload) {
        if (checkedMap === void 0) { checkedMap = {}; }
        if (payload === void 0) { payload = []; }
        return (__assign(__assign({}, payload.reduce(function (prev, curr) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[curr] = false, _a)));
        }, {})), checkedMap));
    },
};
/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中ids
 */
function useListChecked(items, defaultSelecteds) {
    if (items === void 0) { items = []; }
    if (defaultSelecteds === void 0) { defaultSelecteds = []; }
    // 当前已选中
    var currCheckedMap = react_1.useMemo(function () { return items.reduce(function (prev, curr) {
        var _a;
        return (__assign(__assign({}, prev), (_a = {}, _a[curr] = defaultSelecteds.includes(curr), _a)));
    }, {}); }, [items, defaultSelecteds]);
    var _a = __read(useMethods_1.default(checkedMapReducers, currCheckedMap), 2), checkedMap = _a[0], checkedMapMethods = _a[1];
    var _b = react_1.useMemo(function () { return ({
        isAllChecked: !!Object.values(checkedMap).length && !Object.values(checkedMap).some(function (v) { return !v; }),
        // 当前选中的key列表
        checkedIds: Object.keys(checkedMap).filter(function (key) { return !!checkedMap[key]; }),
    }); }, [checkedMap]), isAllChecked = _b.isAllChecked, checkedIds = _b.checkedIds;
    var _c = react_1.useMemo(function () {
        return {
            setChecked: function (key, checked) { return checkedMapMethods.setChecked({ key: key, checked: checked }); },
            // 清空选中
            clearChecked: checkedMapMethods.clearChecked,
        };
    }, []), setChecked = _c.setChecked, clearChecked = _c.clearChecked;
    // 切换全选状态或设置为指定的全选状态
    var toggleAllChecked = react_1.useCallback(function (checked) { return checkedMapMethods.setAllChecked(checked !== undefined ? checked : !isAllChecked); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAllChecked]);
    // ids列表变化时, 更新map数据, 动态载入下一页数据等时更新checkMap
    react_1.useEffect(function () {
        checkedMapMethods.expandCheckedMap(items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);
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
