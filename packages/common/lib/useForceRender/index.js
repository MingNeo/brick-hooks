"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 返回一个forceUpdate方法，每次调用触发函数组件强制更新
 */
function useForceRender() {
    return react_1.useReducer(function (n) { return n + 1; }, 0)[1];
}
exports.default = useForceRender;
