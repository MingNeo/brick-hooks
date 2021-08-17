import createStore, { Store, Options, Module } from './base';
import { StoreHookDispatch } from './useStore';
declare const store: Store<Record<string, any>>;
declare const useStore: {
    <S = any>(moduleName: string, assign?: boolean, willUpdate?: boolean): [S, import("./useStore").SetStore<import("./useStore").SetStoreAction<S>>, Record<string, (state: S, payload: any) => S>, import("./useStore").ToolMethods<S>];
    registerModule(moduleName: string, initialModule: Module): void;
    usePlugins(plugins: any[]): void;
};
declare const registerModule: (moduleName: string, initialModule: Module) => void;
/**
 * 对全局store 开启插件，这不是一个React hooks
 */
declare const usePlugins: (plugins: any[]) => void;
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
export { Store, store, useStore, createStore, registerModule, usePlugins, getStoreState, setStoreState, Options, Module, StoreHookDispatch, };
