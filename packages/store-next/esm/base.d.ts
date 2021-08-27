import { SetStore, SetStoreAction, BoundMethods, ToolMethods } from './useStore';
import { EventBus } from './eventBus';
export declare type StoreState = Record<string, any>;
export declare type Dispatch<A> = (value: A) => void | StoreState | Promise<any>;
export interface Module {
    state: StoreState;
    reducers?: Record<string, any>;
}
export declare type Modules = Record<string, Module>;
export declare type Plugin = <S>(Store: Store<S>) => (store: any) => any;
export interface Options<S = Record<string, any>> extends Record<string, any> {
    modules?: Modules;
    plugins?: Plugin[];
    devtoolId?: string;
    initialState?: S;
}
export declare type UseStoreByContext = <S>(storeContext: any, moduleName?: string, autoMerge?: boolean, willUpdate?: boolean) => [S, SetStore<SetStoreAction<S>>, BoundMethods<S>, ToolMethods<S>];
export declare type UseStore = <S>(moduleName?: string, autoMerge?: boolean, willUpdate?: boolean) => [S, SetStore<SetStoreAction<S>>, BoundMethods<S>, ToolMethods<S>];
export declare class Store<S extends StoreState> extends EventBus<any> {
    useStore: UseStoreByContext;
    _state: S | {};
    _reducers: Record<string, any>;
    _modules: Set<string>;
    _options: Options<S>;
    _reduxStore: any;
    _dispatchRedux: any;
    _registerReduxModule: any;
    _unsubscribeRedux: any;
    static pluginsInitial: Set<any>;
    constructor(options?: Options<S>);
    initialBase(options?: Options<S>): void;
    getUseStore(): any;
    /**
     * use plugin
     */
    static usePlugin(plugin: any): void;
    /**
     * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
     */
    init(options?: Options<S>): void;
    /**
     * 除了createStore时初始化，也可以通过这个方法来注册每个模块
     * @param moduleName
     * @param initialModule
     */
    registerModule(moduleName: string, initialModule: Module): void;
    /**
     * 修改配置
     * @param options
     */
    config(options?: Options<S> | ((oldOptions: Options<S>) => Options<S>)): void;
    getState(moduleName?: string): any;
    setState(nextState: ((state: S) => S) | S): void;
    _setState(nextState: {} | S): void;
    setModuleState(moduleName: string, nextState: ((state: S) => S) | S, merge: boolean): void;
    _setModuleState(moduleName: string, nextState: any): void;
    /**
     * 触发一个action并调用reducer修改state
     * @param moduleName
     * @param actionName
     * @param payload
     */
    dispatchModuleAction(moduleName: string, actionName: string, payload: any): Promise<void>;
}
/**
 * 创建独立store实例
 */
export default function createStore<S = Record<string, any>>(options?: Options<S>): {
    useStore: UseStoreByContext;
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
    /**
     * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
     */
    init(options?: Options<unknown>): void;
    /**
     * 除了createStore时初始化，也可以通过这个方法来注册每个模块
     * @param moduleName
     * @param initialModule
     */
    registerModule(moduleName: string, initialModule: Module): void;
    /**
     * 修改配置
     * @param options
     */
    config(options?: Options<unknown> | ((oldOptions: Options<unknown>) => Options<unknown>)): void;
    getState(moduleName?: string): any;
    setState(nextState: unknown): void;
    _setState(nextState: unknown): void;
    setModuleState(moduleName: string, nextState: unknown, merge: boolean): void;
    _setModuleState(moduleName: string, nextState: any): void;
    /**
     * 触发一个action并调用reducer修改state
     * @param moduleName
     * @param actionName
     * @param payload
     */
    dispatchModuleAction(moduleName: string, actionName: string, payload: any): Promise<void>;
    eventContainer: Map<import("./eventBus").EventType, Set<import("./eventBus").Subscription<any>>>;
    publish: (type: import("./eventBus").EventType, payload: any) => void;
    subscribe: (type: import("./eventBus").EventType, handler: import("./eventBus").Subscription<any>) => any;
    unSubscribe: (type: import("./eventBus").EventType, subscription: import("./eventBus").Subscription<any>) => any;
};
export declare function createStoreAndClass<S = Record<string, any>>(options?: Options<S>): {
    store: {
        useStore: UseStoreByContext;
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
        /**
         * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
         */
        init(options?: Options<unknown>): void;
        /**
         * 除了createStore时初始化，也可以通过这个方法来注册每个模块
         * @param moduleName
         * @param initialModule
         */
        registerModule(moduleName: string, initialModule: Module): void;
        /**
         * 修改配置
         * @param options
         */
        config(options?: Options<unknown> | ((oldOptions: Options<unknown>) => Options<unknown>)): void;
        getState(moduleName?: string): any;
        setState(nextState: unknown): void;
        _setState(nextState: unknown): void;
        setModuleState(moduleName: string, nextState: unknown, merge: boolean): void;
        _setModuleState(moduleName: string, nextState: any): void;
        /**
         * 触发一个action并调用reducer修改state
         * @param moduleName
         * @param actionName
         * @param payload
         */
        dispatchModuleAction(moduleName: string, actionName: string, payload: any): Promise<void>;
        eventContainer: Map<import("./eventBus").EventType, Set<import("./eventBus").Subscription<any>>>;
        publish: (type: import("./eventBus").EventType, payload: any) => void;
        subscribe: (type: import("./eventBus").EventType, handler: import("./eventBus").Subscription<any>) => any;
        unSubscribe: (type: import("./eventBus").EventType, subscription: import("./eventBus").Subscription<any>) => any;
    };
    StoreClass: {
        new (options?: Options<unknown>): {
            useStore: UseStoreByContext;
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
            /**
             * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
             */
            init(options?: Options<unknown>): void;
            /**
             * 除了createStore时初始化，也可以通过这个方法来注册每个模块
             * @param moduleName
             * @param initialModule
             */
            registerModule(moduleName: string, initialModule: Module): void;
            /**
             * 修改配置
             * @param options
             */
            config(options?: Options<unknown> | ((oldOptions: Options<unknown>) => Options<unknown>)): void;
            getState(moduleName?: string): any;
            setState(nextState: unknown): void;
            _setState(nextState: unknown): void;
            setModuleState(moduleName: string, nextState: unknown, merge: boolean): void;
            _setModuleState(moduleName: string, nextState: any): void;
            /**
             * 触发一个action并调用reducer修改state
             * @param moduleName
             * @param actionName
             * @param payload
             */
            dispatchModuleAction(moduleName: string, actionName: string, payload: any): Promise<void>;
            eventContainer: Map<import("./eventBus").EventType, Set<import("./eventBus").Subscription<any>>>;
            publish: (type: import("./eventBus").EventType, payload: any) => void;
            subscribe: (type: import("./eventBus").EventType, handler: import("./eventBus").Subscription<any>) => any;
            unSubscribe: (type: import("./eventBus").EventType, subscription: import("./eventBus").Subscription<any>) => any;
        };
        pluginsInitial: Set<any>;
        /**
         * use plugin
         */
        usePlugin(plugin: any): void;
    };
};
