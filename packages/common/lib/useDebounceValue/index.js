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
 * 防抖hooks
 * @param value
 * @param wait
 */
function useDebounceValue(value, wait) {
    if (wait === void 0) { wait = 100; }
    var timer = react_1.useRef();
    var _a = __read(react_1.useState(value), 2), state = _a[0], setstate = _a[1];
    react_1.useEffect(function () {
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(function () {
            setstate(value);
        }, wait);
        return function () {
            clearTimeout(timer.current);
        };
    }, [value, wait]);
    return state;
}
exports.default = useDebounceValue;
