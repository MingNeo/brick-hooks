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
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
/**
 * 在每次更新时进行深比较，并返回新的值
 * 深比较比较耗性能，慎用
 */
function useDeepCompare(value) {
    var _a = __read(react_1.useState({ value: value, isEqual: true }), 2), state = _a[0], setState = _a[1];
    if (value && !lodash_isequal_1.default(value, state.value)) {
        setState({ isEqual: false, value: lodash_clonedeep_1.default(value) });
    }
    return state;
}
exports.default = useDeepCompare;
