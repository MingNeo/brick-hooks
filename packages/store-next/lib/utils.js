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
exports.isObject = exports.combState = exports.combineReducers = void 0;
function combineReducers(reducers, defaultReducers) {
    if (reducers === void 0) { reducers = {}; }
    if (defaultReducers === void 0) { defaultReducers = {}; }
    return Object.entries(reducers).reduce(function (prev, _a) {
        var _b = __read(_a, 2), moduleName = _b[0], value = _b[1];
        if (value)
            prev[moduleName] = value;
        return prev;
    }, { _base: defaultReducers });
}
exports.combineReducers = combineReducers;
function combState(modules) {
    if (modules === void 0) { modules = {}; }
    return Object.entries(modules).reduce(function (prev, _a) {
        var _b = __read(_a, 2), moduleName = _b[0], value = _b[1];
        if (value)
            prev[moduleName] = value.state;
        return prev;
    }, {});
}
exports.combState = combState;
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
exports.isObject = isObject;
