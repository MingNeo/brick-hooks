import createStore, { Store, Options, Module } from './base';
declare const store: Store<Record<string, any>>;
declare const useStore: {
    (moduleName: string, assign: boolean): any;
    registerModule(moduleName: string, initialModule: Module): void;
    usePlugin(plugin: any): void;
};
declare const registerModule: (moduleName: string, initialModule: Module) => void;
/**
 * 对全局store 开启插件，这不是一个React hooks
 */
declare const usePlugin: (plugin: any) => void;
/**
 * 对获取全局单一实例的globalState
 * @returns
 */
declare const getStoreState: () => any;
/**
 * 设置全局单一实例的globalState
 * @param nextState
 * @returns
 */
declare const setStoreState: (nextState: any) => void;
export { Store, store, useStore, createStore, registerModule, usePlugin, getStoreState, setStoreState, Options, Module, };
