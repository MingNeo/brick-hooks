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
exports.isObject = exports.combState = exports.combineReducers = exports.combineFlatReducers = void 0;
function combineFlatReducers(modules, defaultReducers) {
    if (modules === void 0) { modules = {}; }
    if (defaultReducers === void 0) { defaultReducers = {}; }
    return Object.entries(modules).reduce(function (prev, _a) {
        var _b = __read(_a, 2), moduleName = _b[0], value = _b[1];
        if (!(value === null || value === void 0 ? void 0 : value.reducers))
            return prev;
        Object.entries(value === null || value === void 0 ? void 0 : value.reducers).forEach(function (_a) {
            var _b = __read(_a, 2), actionName = _b[0], reducer = _b[1];
            prev[moduleName + "/" + actionName] = reducer;
        });
        return prev;
    }, __assign({}, defaultReducers));
}
exports.combineFlatReducers = combineFlatReducers;
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
