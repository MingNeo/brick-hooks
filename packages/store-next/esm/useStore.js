import { useMemo, useEffect, useReducer, useRef } from 'react';
/**
 * 获取store state和set方法的hook，返回state和setState用法同React.useState。
 * setState增加了一个merge参数，设为true时使用类似类组件的this.setState的自动合并方式
 * @param storeContext
 * @param moduleName
 * @param autoMerge 是否在执行set方法更新数据时使用自动浅合并而非替换,如果数据格式不是object，此设置无效
 * @returns {array} [state, setState, { dispatch }] dispatch方法可以触发注册的reducer
 */
export default function useStore(storeContext, moduleName = '', autoMerge = true, willUpdate = true) {
    if (!moduleName)
        throw new Error('moduleName is required!');
    const storeContextRef = useRef(storeContext);
    // 因为没有使用useState或者useContext，因此需要做一个强制刷新
    const [forceUpdateCount, forceUpdate] = useReducer((n) => n + 1, 0);
    if (!storeContextRef.current._modules.has(moduleName)) {
        storeContextRef.current._modules.add(moduleName);
    }
    // storeState更新的时候触发强制渲染，每个应用当前hooks的组件都触发一次更新
    useEffect(() => {
        const currentStoreContext = storeContextRef.current;
        const eventName = `storeChange.${moduleName}`;
        const handleStateChange = () => willUpdate && forceUpdate();
        currentStoreContext === null || currentStoreContext === void 0 ? void 0 : currentStoreContext.subscribe(eventName, handleStateChange);
        return () => {
            currentStoreContext === null || currentStoreContext === void 0 ? void 0 : currentStoreContext.unSubscribe(eventName, handleStateChange);
        };
    }, [moduleName]);
    const methods = useMemo(() => {
        var _a, _b, _c;
        /**
         * 用法同React.useState的setState, 传值或者使用函数
         * @param nextValue
         * @param merge 控制具体的合并或覆盖
         */
        const setStore = (nextState, merge = autoMerge) => {
            var _a;
            (_a = storeContextRef.current) === null || _a === void 0 ? void 0 : _a.setModuleState(moduleName, nextState, merge);
        };
        const dispatch = (actionName, payload) => {
            var _a;
            (_a = storeContextRef.current) === null || _a === void 0 ? void 0 : _a.dispatchModuleAction(moduleName, actionName, payload);
        };
        const boundMethods = (_c = Object.keys(((_b = (_a = storeContextRef.current) === null || _a === void 0 ? void 0 : _a._reducers) === null || _b === void 0 ? void 0 : _b[moduleName]) || [])) === null || _c === void 0 ? void 0 : _c.reduce((prev, curr) => {
            return Object.assign(Object.assign({}, prev), { [curr]: (payload) => dispatch(curr, payload) });
        }, {});
        return { setStore, dispatch, boundMethods };
    }, [autoMerge, moduleName]);
    return useMemo(() => {
        const moduleState = storeContextRef.current._state[moduleName];
        const { setStore, dispatch, boundMethods } = methods;
        return [moduleState, setStore, Object.assign({ dispatch }, boundMethods)];
        // 每次强制刷新的时候重续获取存储的全局数据
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [methods, forceUpdateCount]);
}
