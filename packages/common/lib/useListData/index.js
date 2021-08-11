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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformsMap = exports.chainOriginMethods = exports.baseMethods = void 0;
var react_1 = require("react");
var useArray_1 = require("../useArray");
var helper_1 = require("./helper");
exports.baseMethods = {
    transTree: helper_1.transformListToTree,
    transObj: helper_1.transformListToMap,
    group: helper_1.transformListToGroup,
    partition: helper_1.transformListToPartition,
    removeById: useArray_1.arrayMethods.removeById,
    removeIndex: useArray_1.arrayMethods.removeIndex,
    sortBy: useArray_1.arrayMethods.sortBy,
};
// 一些仅提供chain使用的基础方法
exports.chainOriginMethods = __assign(__assign({}, exports.baseMethods), { add: useArray_1.arrayMethods.push, pop: useArray_1.arrayMethods.pop, slice: useArray_1.arrayMethods.slice, remove: useArray_1.arrayMethods.remove, reverse: useArray_1.arrayMethods.reverse, sort: useArray_1.arrayMethods.sort, filter: function (value, callback) { return value.filter(callback); }, map: function (value, callback) { return value.map(callback); }, reduce: function (value, callback, initialValue) {
        return value.reduce(callback, initialValue);
    } });
exports.transformsMap = __assign({ 
    // 链式操作数据
    chain: function (origin) {
        var chainIns = __assign({ _value: origin, next: function (fn) {
                this._value = fn(this._value, exports.baseMethods);
                return this;
            },
            value: function () {
                return this._value;
            } }, Object.entries(exports.chainOriginMethods).reduce(function (prev, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], method = _c[1];
            return __assign(__assign({}, prev), (_b = {}, _b[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // @ts-ignore
                this._value = method.apply(void 0, __spread([this._value], args));
                return this;
            }, _b));
        }, {}));
        return chainIns;
    } }, exports.baseMethods);
/**
 * 对Record<string, any>[]格式的数据进行memo处理, 自动监听变化并更新，
 * 可以使用自定义处理函数对数据进行各种基础处理及转化为tree、obj、group等高级处理
 */
function useListData(value, transform) {
    if (value === void 0) { value = []; }
    var listData = react_1.useMemo(function () {
        return transform ? transform(value, exports.transformsMap) : value;
    }, [value, transform]);
    return listData;
}
exports.default = useListData;
