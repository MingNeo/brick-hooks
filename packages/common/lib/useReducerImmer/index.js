"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var react_1 = require("react");
/**
 * 使用immer的reducer
 * @param reducer immer形式组织的reducer
 * @param initialState 同React.Reducer的initialState
 * @param initializer 同React.Reducer的initializer
 */
function useImmerReducer(reducer, initialState, initializer) {
    var immerReducer = react_1.useMemo(function () { return immer_1.default(reducer); }, [reducer]);
    // @ts-ignore
    return react_1.useReducer(immerReducer, initialState, initializer);
}
exports.default = useImmerReducer;
