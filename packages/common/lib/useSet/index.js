"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useMethods_1 = __importDefault(require("../useMethods"));
// export interface SetMethods<S> {
//   add: (item: S) => void
//   remove: (item: S) => void
//   toggle: (item: S) => void
//   reset: () => void
//   has: (item: S) => boolean
// }
var methods = {
    add: function (prevState, item) { return new Set(Array.from(prevState.add(item))); },
    delete: function (prevState, item) {
        return new Set(Array.from((prevState.delete(item), prevState)));
    },
    has: function (prevState, item) { return prevState.has(item); },
    toggle: function (prevState, item) {
        return new Set(Array.from(prevState.has(item) ? (prevState.delete(item), prevState) : prevState.add(item)));
    },
    reset: function (prevState, initialSet) { return new Set(initialSet); },
};
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    return useMethods_1.default(methods, initialSet);
};
exports.default = useSet;
