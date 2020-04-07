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
 *
 * @param initialValue 默认值
 * @param [valueKey] 可选，取值的key，默认为value
 * @param [onChange]  可选，onChange事件
 */
function useInput(initialValue, valueKey, onChange) {
    if (typeof valueKey === 'function') {
        onChange = valueKey;
    }
    var valueType = valueKey || 'value';
    var _a = __read(react_1.useState(initialValue), 2), value = _a[0], setValue = _a[1];
    var setValueFromEvent = react_1.useCallback(function (event) {
        setValue(event.currentTarget[valueType]);
        if (typeof onChange === 'function')
            onChange(event);
    }, [onChange, valueType]);
    return {
        value: value,
        onChange: setValueFromEvent,
        setValue: setValue,
        bindEvent: {
            value: value,
            onChange: setValueFromEvent,
        },
    };
}
exports.default = useInput;
