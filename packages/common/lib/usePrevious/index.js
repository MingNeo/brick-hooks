"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePreviousRenderValue = void 0;
var react_1 = require("react");
function usePreviousRenderValue(value) {
    var previousRef = react_1.useRef();
    // useEffect会在完成这次'渲染'之后执行
    react_1.useEffect(function () {
        previousRef.current = value;
    });
    return previousRef.current;
}
exports.usePreviousRenderValue = usePreviousRenderValue;
/**
 * 获取上一次的值
 * @param value
 * @param equalsMode 是否仅变更时更新值，默认为true，即只有每次值变化时更新上一次的值。equalsMode = false 则每次函数组件render都返回上次render时的值
 */
function usePrevious(value, equalsMode) {
    if (equalsMode === void 0) { equalsMode = true; }
    var prevListRef = react_1.useRef([]);
    // const prevRenderValue = usePreviousRenderValue(value)
    // useEffect会在完成这次'渲染'之后执行
    react_1.useEffect(function () {
        if (!equalsMode) {
            prevListRef.current[0] = value;
        }
    });
    var last = prevListRef.current[prevListRef.current.length - 1];
    react_1.useEffect(function () {
        if (equalsMode) {
            if (!prevListRef.current.length) {
                prevListRef.current = [value];
            }
            else if (value !== last) {
                prevListRef.current = [last, value];
            }
        }
    }, [value, equalsMode, last]);
    // if (!equalsMode) return prevRenderValue
    if (equalsMode) {
        var lastValue = prevListRef.current[prevListRef.current.length - 1];
        return value === lastValue ? prevListRef.current[prevListRef.current.length - 2] : lastValue;
    }
    return prevListRef.current[0];
}
exports.default = usePrevious;
