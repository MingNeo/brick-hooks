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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDebounceFn_1 = __importDefault(require("../useDebounceFn"));
/**
 * 与React.useState用法一致，对数据进行自动防抖处理
 * @param initialState
 * @param wait
 */
function useDebounceState(initialState, wait) {
    if (wait === void 0) { wait = 100; }
    var _a = __read(react_1.useState(initialState), 2), state = _a[0], setState = _a[1];
    var _b = __read(useDebounceFn_1.default(setState, wait), 1), debounceSetState = _b[0];
    return [state, debounceSetState];
}
exports.default = useDebounceState;
