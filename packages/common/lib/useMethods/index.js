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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useMethods(methods, initialState) {
    var _a = __read(react_1.useState(initialState), 2), value = _a[0], setValue = _a[1];
    var _b = react_1.useMemo(function () {
        var dispatch = function (actionName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var fn = methods[actionName];
            setValue(function (value) { return fn.apply(void 0, __spread([value], args)); });
        };
        var boundMethods = Object.entries(methods).reduce(function (methods, _a) {
            var _b = __read(_a, 2), name = _b[0], fn = _b[1];
            var method = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                setValue(function (value) { return fn.apply(void 0, __spread([value], args)); });
            };
            methods[name] = method;
            return methods;
        }, { dispatch: dispatch });
        return {
            boundMethods: boundMethods,
            dispatch: dispatch,
        };
    }, [methods]), boundMethods = _b.boundMethods, dispatch = _b.dispatch;
    return [value, boundMethods, dispatch];
}
exports.default = useMethods;
