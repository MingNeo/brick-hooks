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
 * 获取当前是否在线状态
 */
function useOnline() {
    var _a = __read(react_1.useState(typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
        ? navigator.onLine
        : true), 2), isOnline = _a[0], setIsOnline = _a[1];
    react_1.useEffect(function () {
        var onOnline = function () { return setIsOnline(true); };
        var onOffline = function () { return setIsOnline(false); };
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);
        return function () {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, []);
    return isOnline;
}
exports.default = useOnline;
