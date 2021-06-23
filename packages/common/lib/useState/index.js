"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/**
 * 自动进行合并的setState，基本可以认为等同于class组件的this.setState
 * @param initialState 同React.setState参数
 * @param merge 是否合并，默认为true，设为false则当前hooks完全等于React.useState
 * @returns
 */
function useState(initialState, merge) {
    if (merge === void 0) { merge = true; }
    var _a = __read(useState(initialState), 2), state = _a[0], setReactState = _a[1];
    var setState = merge
        ? function (nextDiffState) {
            return setReactState(function (prevState) { return (__assign(__assign({}, prevState), (typeof nextDiffState === 'function' ? nextDiffState(prevState) : nextDiffState))); });
        }
        : setReactState;
    return [state, setState];
}
exports.default = useState;
