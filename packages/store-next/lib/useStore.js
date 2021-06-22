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
 * 获取store state和set方法的hook，返回state和setState用法同React.useState。
 * setState增加了一个merge参数，设为true时使用类似类组件的this.setState的自动合并方式
 * @param storeContext
 * @param moduleName
 * @param autoMerge 是否在执行set方法更新数据时使用自动浅合并而非替换,如果数据格式不是object，此设置无效
 * @returns {array} [state, setState, dispatch] dispatch方法可以触发注册的reducer
 */
function useStore(storeContext, moduleName, autoMerge) {
    if (moduleName === void 0) { moduleName = ''; }
    if (autoMerge === void 0) { autoMerge = false; }
    if (!moduleName)
        throw new Error('moduleName is required!');
    var storeContextRef = react_1.useRef(storeContext);
    // 因为没有使用useState或者useContext，因此需要做一个强制刷新
    var _a = __read(react_1.useReducer(function (n) { return n + 1; }, 0), 2), forceUpdateCount = _a[0], forceUpdate = _a[1];
    if (!storeContextRef.current._modules.has(moduleName)) {
        storeContextRef.current._modules.add(moduleName);
    }
    // storeState更新的时候触发强制渲染，每个应用当前hooks的组件都触发一次更新
    react_1.useEffect(function () {
        var currentStoreContext = storeContextRef.current;
        var eventName = "storeChange." + moduleName;
        currentStoreContext === null || currentStoreContext === void 0 ? void 0 : currentStoreContext.subscribe(eventName, forceUpdate);
        return function () {
            currentStoreContext === null || currentStoreContext === void 0 ? void 0 : currentStoreContext.unSubscribe(eventName, forceUpdate);
        };
    }, [moduleName]);
    var methods = react_1.useMemo(function () {
        /**
         * 用法同React.useState的setState, 传值或者使用函数
         * @param nextValue
         * @param merge 控制具体的合并或覆盖
         */
        var setStore = function (nextState, merge) {
            var _a;
            if (merge === void 0) { merge = autoMerge; }
            (_a = storeContextRef.current) === null || _a === void 0 ? void 0 : _a.setModuleState(moduleName, nextState, merge);
        };
        var dispatch = function (actionName, payload) {
            var _a;
            (_a = storeContextRef.current) === null || _a === void 0 ? void 0 : _a.dispatchModuleAction(moduleName, actionName, payload);
        };
        return { setStore: setStore, dispatch: dispatch };
    }, [autoMerge, moduleName]);
    return react_1.useMemo(function () {
        var moduleState = storeContextRef.current._state[moduleName];
        var setStore = methods.setStore, dispatch = methods.dispatch;
        return [moduleState, setStore, dispatch];
        // 每次强制刷新的时候重续获取存储的全局数据
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [methods, forceUpdateCount]);
}
exports.default = useStore;
