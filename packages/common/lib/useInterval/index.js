"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 */
function useInterval(callback, time) {
    if (time === void 0) { time = 300; }
    var intervalFn = react_1.useRef();
    react_1.useEffect(function () {
        intervalFn.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        var timer = setInterval(function () {
            intervalFn.current();
        }, time);
        return function () {
            clearInterval(timer);
        };
    }, [time]);
}
exports.default = useInterval;
