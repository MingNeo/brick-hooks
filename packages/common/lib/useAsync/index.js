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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCounter_1 = __importDefault(require("../useCounter"));
// type UseAsyncReturn = [exector: () => ]
/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading状态
 * @param asyncFunction
 * @param options.immediate 是否组件加载时自动执行
 * @param options.setState 更新state方法，一般情况下直接.then后处理即可，但有时候希望自动同步状态，则可以配置setState方法
 */
function useAsync(asyncFunction, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.immediate, immediate = _c === void 0 ? false : _c, setState = _b.setState;
    var _d = __read(useCounter_1.default(0, { min: 0 }), 2), pendingCount = _d[0], _e = _d[1], inc = _e.inc, dec = _e.dec;
    var _f = __read(react_1.useState(), 2), result = _f[0], setResult = _f[1];
    var _g = __read(react_1.useState(), 2), error = _g[0], setError = _g[1];
    var setStateRef = react_1.useRef(setState);
    if (setStateRef.current !== setState)
        setStateRef.current = setState;
    var exector = react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        inc();
        return new Promise(function (resolve, reject) {
            var pending = asyncFunction.apply(void 0, __spread(args));
            pending
                .then(function (res) {
                dec();
                setResult(res);
                setStateRef.current && setStateRef.current(res);
                resolve(res);
            })
                .catch(function (error) {
                dec();
                setError(error);
                reject(error);
            });
        });
    }, [asyncFunction, dec, inc]);
    react_1.useEffect(function () {
        if (immediate) {
            exector();
        }
    }, [exector, immediate]);
    return [exector, { result: result, error: error, loading: !!pendingCount, pendingCount: pendingCount }];
}
exports.default = useAsync;
