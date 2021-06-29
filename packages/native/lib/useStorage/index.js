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
var helper_1 = require("./helper");
/**
 *
 * @param itemName
 * @param initialValue
 */
function useStorage(itemName, initialValue) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _a = __read(react_1.useState(function () { return helper_1.getStorage(itemName) || initialValue; }), 2), value = _a[0], setStateValue = _a[1];
    var methods = react_1.useMemo(function () {
        var setValue = function (value) {
            helper_1.setStorage(itemName, value);
            setStateValue(helper_1.parseValue(value));
        };
        var clear = function () {
            helper_1.removeStorage(itemName);
            setValue(undefined);
        };
        return { setValue: setValue, clear: clear };
    }, [itemName]);
    return [value, methods.setValue, methods.clear];
}
exports.default = useStorage;
