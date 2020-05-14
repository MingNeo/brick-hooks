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
var useMethods_1 = __importDefault(require("../useMethods"));
var methods = {
    set: function (state, value) { return value; },
    push: function (state, value) {
        if (state === void 0) { state = []; }
        return __spread(state, [value]);
    },
    pop: function (state) { return state.slice(0, -1); },
    slice: function (state, start, end) { return state.slice(start, end); },
    clear: function () { return []; },
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
    removeById: function (state, _a) {
        var idKey = _a.idKey, id = _a.id;
        return state.filter(function (v) { return v && v[idKey] !== id; });
    },
    removeIndex: function (state, value) { return state.filter(function (v, i) { return i !== value; }); },
};
/**
 * 当state为数组时，不方便使用push等方法直接操纵数据，此hooks提供几个常用方法
 * @param initial
 * @param idKey
 */
function useArray(initial) {
    var _a = __read(useMethods_1.default(methods, initial || []), 2), listData = _a[0], actions = _a[1];
    return [listData, actions];
}
exports.default = useArray;
