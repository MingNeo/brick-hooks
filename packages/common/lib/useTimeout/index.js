"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 方便使用setTimeout的hook
 */
function useTimeout(callback, time) {
    if (time === void 0) { time = 300; }
    var callbackFn = react_1.useRef();
    react_1.useEffect(function () {
        callbackFn.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            callbackFn.current();
        }, time);
        return function () {
            clearTimeout(timer);
        };
    }, [time]);
}
exports.default = useTimeout;
