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
var defaultMethods = {
    _set: function (prevState, payload) {
        return typeof payload === 'function' ? payload(prevState) : payload;
    },
    _setMerge: function (prevState, payload) {
        if (prevState === void 0) { prevState = {}; }
        return (__assign(__assign({}, (prevState || {})), (typeof payload === 'function' ? payload(prevState) : payload)));
    },
};
/**
 * 面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState
 * @param initialState 约定必须是一个object
 * @param methods 自定义reducers方法
 * @returns [state, setState, stateMethods]
 */
function useObjectState(initialState, methods) {
    if (initialState === void 0) { initialState = {}; }
    if (methods === void 0) { methods = {}; }
    var _a = __read(useMethods_1.default(__assign(__assign({}, methods), defaultMethods), initialState), 2), state = _a[0], stateMethods = _a[1];
    var setState = react_1.useCallback(function (nextState, merge) {
        if (merge === void 0) { merge = true; }
        return merge ? stateMethods._setMerge(nextState) : stateMethods._set(nextState);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return [state, setState, stateMethods];
}
exports.default = useObjectState;
