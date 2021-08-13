"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 对字符串数据进行自动去掉空格的处理, 基于useMemo封装
 * @param value
 * @param fullTrim 默认为false，即仅去除首尾空格，为true时将去掉字符串中所有空格
 * @returns
 */
function useTrim(value, fullTrim) {
    if (fullTrim === void 0) { fullTrim = false; }
    return react_1.useMemo(function () { return trim(value || '', fullTrim); }, [fullTrim, value]);
}
exports.default = useTrim;
function trim(target, fullTrim) {
    if (fullTrim === void 0) { fullTrim = false; }
    if (!fullTrim) {
        return target.trim();
    }
    return target.replace(/\s/gm, '');
}
