"use strict";
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
var useListData_1 = require("../useListData");
/**
 * 对Record<string, any>[]格式的数据更新时进行自动处理，可以使用自定义处理函数对数据进行处理
 */
function useListState(initialValue, transform) {
    var formatListData = react_1.useCallback(function (originData) {
        return transform ? transform(originData, useListData_1.transformsMap) : originData;
    }, [transform]);
    var _a = __read(react_1.useState(formatListData(initialValue || [])), 2), state = _a[0], setState = _a[1];
    var updateState = react_1.useCallback(function (value) {
        setState(typeof value === 'function'
            ? function (prevState) { return formatListData(value(prevState)); }
            : formatListData(value));
    }, [formatListData]);
    return [state, updateState];
}
exports.default = useListState;
