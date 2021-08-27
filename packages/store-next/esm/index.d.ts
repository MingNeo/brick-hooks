import createStore, { Store, Options, Module } from './base';
import { StoreHookDispatch } from './useStore';
declare const store: {
    useStore: import("./base").UseStoreByContext;
    _state: unknown;
    _reducers: Record<string, any>;
    _modules: Set<string>;
    _options: Options<unknown>;
    _reduxStore: any;
    _dispatchRedux: any;
    _registerReduxModule: any;
    _unsubscribeRedux: any;
    initialBase(options?: Options<unknown>): void;
    getUseStore(): any;
    init(options?: Options<unknown>): void;
    registerModule(moduleName: string, initialModule: Module): void;
    config(options?: Options<unknown> | ((oldOptions: Options<unknown>) => Options<unknown>)): void;
    getState(moduleName?: string): any;
    setState(nextState: unknown): void;
    _setState(nextState: unknown): void;
    setModuleState(moduleName: string, nextState: unknown, merge: boolean): void;
    _setModuleState(moduleName: string, nextState: any): void;
    dispatchModuleAction(moduleName: string, actionName: string, payload: any): Promise<void>;
    eventContainer: Map<import("./eventBus").EventType, Set<import("./eventBus").Subscription<any>>>;
    publish: (type: import("./eventBus").EventType, payload: any) => void;
    subscribe: (type: import("./eventBus").EventType, handler: import("./eventBus").Subscription<any>) => any;
    unSubscribe: (type: import("./eventBus").EventType, subscription: import("./eventBus").Subscription<any>) => any;
};
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
