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
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 * @returns  stopInterval
 */
function useInterval(callback, time) {
    if (time === void 0) { time = 300; }
    var intervalFn = react_1.useRef();
    var intervalId = react_1.useRef(null);
    var _a = __read(react_1.useState(false), 2), isRunning = _a[0], setIsRunning = _a[1];
    react_1.useEffect(function () {
        intervalFn.current = callback;
    }, [callback]);
    var _b = react_1.useMemo(function () {
        return {
            start: function () {
                intervalId.current = setInterval(function () {
                    intervalFn.current();
                    setIsRunning(true);
                }, time);
            },
            stop: function () {
                clearInterval(intervalId.current);
                intervalId.current = null;
                setIsRunning(false);
            }
        };
    }, [time]), start = _b.start, stop = _b.stop;
    react_1.useEffect(function () {
        start();
        return function () {
            stop();
        };
    }, [time]);
    return {
        isRunning: isRunning,
        start: start,
        stop: stop
    };
}
exports.default = useInterval;
