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
exports.getReducer = exports.defaultReducers = void 0;
var utils_1 = require("./utils");
function getNextState(prevState, nextState) {
    return typeof nextState === 'function' ? nextState(prevState) : nextState;
}
/**
 * 默认的reducer, 提供两种模式，直接覆盖, 和自动合并(需数据格式是object，否则自动使用setValue)
 * @param prevState
 * @param action
 */
exports.defaultReducers = {
    $setValueMerge: function (prevState, value) {
        return utils_1.isObject(value)
            ? __assign(__assign({}, prevState), (getNextState(prevState, value) || {})) : exports.defaultReducers.$setValue(prevState, value);
    },
    $setValue: function (prevState, value) { return getNextState(prevState, value); },
};
function getReducer(modules) {
    if (modules === void 0) { modules = {}; }
    var reducers = Object.entries(modules).reduce(function (prev, _a) {
        var _b = __read(_a, 2), moduleName = _b[0], value = _b[1];
        if (value)
            prev[moduleName] = value.reducers;
        return prev;
    }, {});
    return utils_1.combineReducers(reducers, exports.defaultReducers);
}
exports.getReducer = getReducer;
