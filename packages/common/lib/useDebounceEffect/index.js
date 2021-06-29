"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 一个防抖触发的useEffect
 * @param callback
 * @param wait
 */
function useDebounceEffect(callback, wait, deps) {
    if (wait === void 0) { wait = 100; }
    if (deps === void 0) { deps = []; }
    var timerRef = react_1.useRef();
    var waitRef = react_1.useRef(wait);
    var callbackRef = react_1.useRef(callback);
    callbackRef.current = callback;
    var destructorSetRef = react_1.useRef(new Set());
    var _a = react_1.useMemo(function () {
        var cancel = function () {
            var e_1, _a;
            clearTimeout(timerRef.current);
            try {
                for (var _b = __values(destructorSetRef.current), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var destructor = _c.value;
                    destructor && destructor();
                    destructorSetRef.current.delete(destructor);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        var debounceCallback = function () {
            timerRef.current && clearTimeout(timerRef.current);
            timerRef.current = setTimeout(function () {
                if (callbackRef.current) {
                    var destructor = callbackRef.current.apply(null);
                    destructor && destructorSetRef.current.add(destructor);
                }
                timerRef.current = null;
            }, waitRef.current);
        };
        return {
            debounceCallback: debounceCallback,
            cancel: cancel,
        };
    }, []), debounceCallback = _a.debounceCallback, cancel = _a.cancel;
    react_1.useEffect(function () {
        // 如果配置了deps，即自动在deps变化的时候执行debounceCallback
        if (deps === null || deps === void 0 ? void 0 : deps.length) {
            debounceCallback();
        }
        return function () {
            cancel();
        };
    }, deps);
}
exports.default = useDebounceEffect;
