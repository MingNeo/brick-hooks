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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var react_1 = require("react");
function useMethodsImmer(methods, initialState, initializer, Options) {
    if (initializer === void 0) { initializer = undefined; }
    if (Options === void 0) { Options = {}; }
    var immerReducer = react_1.useMemo(function () {
        return function (state, action) {
            return immer_1.default(state, function (draft) {
                var _a;
                return (_a = methods(draft))[action.type].apply(_a, __spread([draft], action.payload));
            }, Options.patchListener);
        };
    }, [methods, Options.patchListener]);
    var _a = __read(react_1.useReducer(immerReducer, initialState, initializer), 2), draftState = _a[0], dispatch = _a[1];
    var actions = react_1.useMemo(function () {
        var actionTypes = Object.keys(methods(draftState));
        return actionTypes.reduce(function (prev, type) {
            prev[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return prev;
        }, {});
        // 因为使用immer，此处并不需要监听state变动，methods也应该是静态配置好的，不会动态增加
        // 但是actions下的reducer应当是纯函数，不然会造成引用的其他state不是最新值
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [draftState, actions];
}
exports.default = useMethodsImmer;
