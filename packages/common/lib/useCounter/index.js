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
exports.arrayMethods = void 0;
var react_1 = require("react");
exports.arrayMethods = {
    inc: function (state, step) { return state + step; },
    dec: function (state, step) { return state - step; },
    reset: function (state, initialValue) { return initialValue; }
};
/**
 * 数字步进
 * @param {number} initialValue 默认值
 * @param {object} options 配置
 */
function useCounter(initialValue, options) {
    if (initialValue === void 0) { initialValue = 0; }
    if (options === void 0) { options = {}; }
    var _a = __read(react_1.useState(initialValue), 2), counter = _a[0], setCounter = _a[1];
    var _b = options.min, min = _b === void 0 ? -Infinity : _b, _c = options.max, max = _c === void 0 ? Infinity : _c, _d = options.step, defaultStep = _d === void 0 ? 1 : _d;
    var setValue = react_1.useCallback(function (nextValue) {
        var disposeValue = function (value) { return (value < min ? min : value > max ? max : value); };
        setCounter(typeof nextValue === 'function'
            ? function (value) { return disposeValue(nextValue(value)); }
            : disposeValue(nextValue));
    }, [min, max]);
    var inc = function (step) {
        if (step === void 0) { step = defaultStep; }
        return setValue(function (value) { return value + step; });
    };
    var dec = function (step) {
        if (step === void 0) { step = defaultStep; }
        return setValue(function (value) { return value - step; });
    };
    var reset = react_1.useCallback(function () { return setCounter(initialValue); }, [initialValue]);
    return [counter, { set: setValue, inc: inc, dec: dec, reset: reset }];
}
exports.default = useCounter;
