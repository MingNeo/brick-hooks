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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayMethods = void 0;
var useMethods_1 = __importDefault(require("../useMethods"));
exports.arrayMethods = {
    set: function (state, value) { return value; },
    push: function (state, value) {
        if (state === void 0) { state = []; }
        return __spread(state, [value]);
    },
    pop: function (state) { return state.slice(0, -1); },
    slice: function (state, start, end) { return state.slice(start, end); },
    clear: function () { return []; },
    reverse: function (state) { return __spread(state).reverse(); },
    sort: function (state, callback) { return __spread(state).sort(callback); },
    sortBy: function (data, _a) {
        if (data === void 0) { data = []; }
        var field = _a.field, _b = _a.order, order = _b === void 0 ? 'ASC' : _b;
        if (!order || !['ASC', 'DESC'].includes(order))
            throw new Error('order error');
        return __spread(data).sort(function (a, b) { return (order === 'ASC' ? a[field] - b[field] : b[field] - a[field]); });
    },
    remove: function (state, value) {
        return state.filter(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return typeof value === 'function' ? !value.apply(void 0, __spread(args)) : args[0] !== value;
        });
    },
    // 根据id移除数据，数据格式必需为[{ [idkey], ... }]
    removeById: function (state, id, idKey) {
        if (idKey === void 0) { idKey = 'id'; }
        return state.filter(function (v) { return v && v[idKey] !== id; });
    },
    removeIndex: function (state, value) { return state.filter(function (v, i) { return i !== value; }); },
};
/**
 * 当state为数组时，数据需要是immutable的，不方便使用push等方法直接操纵数据，此hook提供几个常用方法，修改可以自动触发渲染
 * @param initial
 */
function useArray(initial) {
    var _a = __read(useMethods_1.default(exports.arrayMethods, initial || []), 2), listData = _a[0], actions = _a[1];
    return [listData, actions];
}
exports.default = useArray;
