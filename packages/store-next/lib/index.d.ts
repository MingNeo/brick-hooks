import createStore, { Store, Options, Module } from './base';
declare const store: Store<Record<string, any>>;
declare const useStore: (moduleName: string, assign: boolean) => any;
declare const registerModule: (moduleName: string, initialModule: Module) => void;
declare const usePlugin: (plugin: any) => void;
export { Store, store, useStore, createStore, registerModule, usePlugin, Options, Module, };
export default Store;
