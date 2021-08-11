"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// interface DebounceFnOptions {
//   deps?: any[]
//   leading?: boolean // 指定在延迟开始前调用
//   maxWait?: number // 设置 func 允许被延迟的最大值
//   trailing?: boolean
// }
/**
 * 处理一个函数返回防抖的函数
 * @param handler
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
function useDebounceFn(handler, wait
// options: DebounceFnOptions = {},
) {
    if (wait === void 0) { wait = 100; }
    // const { deps } = options
    var timer = react_1.useRef();
    var waitRef = react_1.useRef(wait);
    var fnRef = react_1.useRef(handler);
    fnRef.current = handler;
    return react_1.useMemo(function () {
        var cancel = function () {
            clearTimeout(timer.current);
        };
        var debounceFn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(function () {
                cancel();
                fnRef.current && fnRef.current.apply(null, args);
                timer.current = null;
            }, waitRef.current);
        };
        return [debounceFn, cancel];
    }, []);
}
exports.default = useDebounceFn;
