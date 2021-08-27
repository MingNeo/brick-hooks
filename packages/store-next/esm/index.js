import createStore, { Store, createStoreAndClass } from './base';
const { store, StoreClass } = createStoreAndClass();
const useStore = (moduleName, assign = true, willUpdate = true) => {
    const useStoreStore = store.getUseStore();
    return useStoreStore(moduleName, assign, willUpdate);
};
const registerModule = (useStore.registerModule = (moduleName, initialModule) => {
    store.registerModule(moduleName, initialModule);
});
/**
 * 对全局store 开启插件，这不是一个React hooks
 */
const usePlugins = (useStore.usePlugins = (plugins) => {
    if (plugins && plugins.length) {
        plugins.forEach((plugin) => StoreClass.usePlugin(plugin));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // 因为在createStore之后调用，所以需要重新初始化一下
        store.init();
    }
});
/**
 * 对获取全局单一实例的globalState
 * @returns
 */
const getStoreState = () => {
    return store.getState();
};
/**
 * 设置全局单一实例的globalState
 * @param nextState
 * @returns
 */
const setStoreState = (nextState) => {
    return store.setState(nextState);
};
export { Store, store, useStore, createStore, registerModule, usePlugins, getStoreState, setStoreState, };
