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
 * @param callback
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
function useDebounceFn(callback, wait
// options: DebounceFnOptions = {},
) {
    if (wait === void 0) { wait = 100; }
    // const { deps } = options
    var timer = react_1.useRef();
    var waitRef = react_1.useRef(wait);
    var fnRef = react_1.useRef(callback);
    if (!fnRef.current)
        fnRef.current = callback;
    var result = react_1.useMemo(function () {
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
            }, waitRef.current);
        };
        return [debounceFn, cancel];
    }, []);
    // useEffect(() => {
    //   // 如果配置了deps，即自动在deps变化的时候执行debounceFn
    //   if (deps) result[0]()
    //   return result[1]
    // }, deps || [])
    return result;
}
exports.default = useDebounceFn;
