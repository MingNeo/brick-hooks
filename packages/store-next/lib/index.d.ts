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
export { Store, store, useStore, createStore, registerModule, usePlugin, Options, Module, };
