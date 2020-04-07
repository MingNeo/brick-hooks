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
exports.getStorage = exports.setStorage = void 0;
var react_1 = require("react");
function setStorage(key, value) {
    try {
        window.localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    }
    catch (error) {
        console.log(error);
    }
}
exports.setStorage = setStorage;
function getStorage(key, initialValue) {
    if (!(window === null || window === void 0 ? void 0 : window.localStorage)) {
        return initialValue;
    }
    var value = window.localStorage.getItem(key);
    try {
        return value !== undefined && value !== null ? JSON.parse(value) : initialValue;
    }
    catch (error) {
        // if error, return value
        console.log(error);
        return value !== null && value !== void 0 ? value : initialValue;
    }
}
exports.getStorage = getStorage;
function parseValue(value, initialValue) {
    try {
        return value ? JSON.parse(value) : initialValue;
    }
    catch (_a) {
        return initialValue;
    }
}
/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
function useLocalStorage(itemName, initialValue, watchStorageChange) {
    if (initialValue === void 0) { initialValue = undefined; }
    if (watchStorageChange === void 0) { watchStorageChange = false; }
    var _a = __read(react_1.useState(function () { return getStorage(itemName, initialValue); }), 2), value = _a[0], setStateValue = _a[1];
    var setValue = react_1.useCallback(function (value) {
        setStorage(itemName, value);
        watchStorageChange || setStateValue(parseValue(value, initialValue));
    }, [initialValue, itemName, watchStorageChange]);
    react_1.useEffect(function () {
        if (!(window === null || window === void 0 ? void 0 : window.localStorage) || !watchStorageChange) {
            return;
        }
        // 当storage变化的时候更新state以触发组件render
        var onStorage = function (e) {
            if (e.key === itemName) {
                setStateValue(parseValue(e.newValue, initialValue));
            }
        };
        // watchStorageChange 为 true时， 监听storage事件，即使直接调用window.localStorage.setItem也会更新当前value
        window.addEventListener('storage', onStorage);
        return function () {
            window.removeEventListener('storage', onStorage);
        };
    }, [initialValue, itemName, watchStorageChange]);
    return [value, setValue];
}
exports.default = useLocalStorage;
