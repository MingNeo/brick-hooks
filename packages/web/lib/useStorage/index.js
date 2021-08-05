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
exports.useSessionStorage = exports.useLocalStorage = void 0;
var react_1 = require("react");
var helper_1 = require("./helper");
function isNil(value) {
    return value === undefined || value === null;
}
/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
function useStorage(itemName, initialValue, _a) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _b = _a === void 0 ? {} : _a, _c = _b.watchStorageChange, watchStorageChange = _c === void 0 ? false : _c, _d = _b.storageType, storageType = _d === void 0 ? 'localStorage' : _d;
    var _e = __read(react_1.useState(function () { return helper_1.getStorage(storageType, itemName) || initialValue; }), 2), value = _e[0], setStateValue = _e[1];
    var methods = react_1.useMemo(function () {
        var setValue = function (value) {
            helper_1.setStorage(storageType, itemName, !isNil(value) ? value : initialValue);
            watchStorageChange || (!isNil(value) ? setStateValue(helper_1.parseValue(value)) : setStateValue(initialValue));
        };
        var clear = function () {
            helper_1.removeStorage(storageType, itemName);
            setValue(undefined);
        };
        return { setValue: setValue, clear: clear };
    }, [itemName, storageType, watchStorageChange]);
    react_1.useEffect(function () {
        if (!(window === null || window === void 0 ? void 0 : window.localStorage) || !watchStorageChange) {
            return;
        }
        // 当storage变化的时候更新state以触发组件render
        var onStorage = function (e) {
            if (e.key === itemName) {
                setStateValue(isNil(e.newValue) ? helper_1.parseValue(e.newValue) : initialValue);
            }
        };
        // watchStorageChange 为 true时， 监听storage事件，即使直接修改也触发更新当前value
        window.addEventListener('storage', onStorage);
        return function () {
            window.removeEventListener('storage', onStorage);
        };
    }, [itemName, watchStorageChange]);
    return [value, methods.setValue, { clear: methods.clear, }];
}
exports.default = useStorage;
exports.useLocalStorage = function (itemName, initialValue, _a) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _b = (_a === void 0 ? {} : _a).watchStorageChange, watchStorageChange = _b === void 0 ? false : _b;
    return useStorage(itemName, initialValue, { watchStorageChange: watchStorageChange, storageType: 'localStorage' });
};
exports.useSessionStorage = function (itemName, initialValue, _a) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _b = (_a === void 0 ? {} : _a).watchStorageChange, watchStorageChange = _b === void 0 ? false : _b;
    return useStorage(itemName, initialValue, {
        watchStorageChange: watchStorageChange,
        storageType: 'sessionStorage',
    });
};
