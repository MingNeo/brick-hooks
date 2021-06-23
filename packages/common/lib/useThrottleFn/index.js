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
/**
 * 对一个函数进行节流处理，返回处理过的函数
 * @param handler
 * @param ms
 * @returns [throttleFn, cancel]
 */
function useThrottleFn(handler, ms) {
    if (ms === void 0) { ms = 200; }
    var timeoutRef = react_1.useRef();
    var nextArgsRef = react_1.useRef(null);
    var throttleFn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!timeoutRef.current) {
            var timeoutCallback_1 = function () {
                if (nextArgsRef.current) {
                    var currentArgs = __spread(nextArgsRef.current);
                    nextArgsRef.current = null;
                    timeoutRef.current = setTimeout(timeoutCallback_1, ms);
                    return handler.apply(void 0, __spread(currentArgs));
                }
                else {
                    timeoutRef.current = null;
                }
            };
            timeoutRef.current = setTimeout(timeoutCallback_1, ms);
            return handler.apply(void 0, __spread(args));
        }
        else {
            // 当前已经有等待执行的函数，忽略本次触发，仅更新一下参数
            nextArgsRef.current = args;
        }
    };
    var cancel = function () {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        timeoutRef.current = nextArgsRef.current = null;
    };
    react_1.useEffect(function () {
        return function () {
            cancel();
        };
    }, []);
    return [throttleFn, cancel];
}
exports.default = useThrottleFn;
