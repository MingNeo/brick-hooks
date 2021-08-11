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
var useArray_1 = __importDefault(require("../useArray"));
var useListData_1 = __importDefault(require("../useListData"));
/**
 * 基于useArray及useListData，对Record<string, any>[]格式的数据更新时进行自动处理，可以使用自定义处理函数对数据进行处理
 */
function useListState(initialValue, transform) {
    var _a = __read(useArray_1.default(initialValue), 2), state = _a[0], arrayMethods = _a[1];
    var listState = useListData_1.default(state, transform);
    return [listState, arrayMethods];
}
exports.default = useListState;
