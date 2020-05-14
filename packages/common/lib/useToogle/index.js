"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 切换布尔值
 */
function useToggle(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    return react_1.useReducer(function (state) { return !state; }, initialValue);
}
exports.default = useToggle;
