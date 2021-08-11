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
/**
 * 对字符串数据进行去掉空格的处理, 用法同useState
 * @param initialValue
 * @param fullTrim 默认为false，即仅去除首尾空格，为true时将去掉字符串中所有空格
 * @returns
 */
function useTrim(initialValue, fullTrim) {
    if (fullTrim === void 0) { fullTrim = false; }
    var _a = __read(react_1.useState(trim(initialValue || '', fullTrim)), 2), trimState = _a[0], setState = _a[1];
    var setTrimState = function (state) {
        setState(typeof state === 'function'
            ? function (oldState) { return trim(state(oldState), fullTrim); }
            : trim(state, fullTrim));
    };
    return [trimState, setTrimState];
}
exports.default = useTrim;
function trim(target, fullTrim) {
    if (fullTrim === void 0) { fullTrim = false; }
    if (!fullTrim) {
        return target.trim();
    }
    return target.replace(/\s/gm, '');
}
