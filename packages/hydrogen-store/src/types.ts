import { EventBus } from './eventBus'

export type StoreState = Record<string, any>
export type Dispatch<A> = (value: A) => void | StoreState | Promise<any>
export interface Module {
  state: StoreState
  reducers?: Record<string, any>
  [x: string]: any
}
export type Modules = Record<string, Module>
export interface Plugin {
  <StoreClass>(Store: StoreClass): (store: any) => any
  type?: string
  sortIndex?: number
}
export interface Options<S = Record<string, any>> extends Record<string, any> {
  modules?: Modules
  plugins?: Plugin[]
  devtoolId?: string
  initialState?: S
  useStoreAutoMerge?: boolean
}

// useStore
export type StoreHookDispatch = (actionName: string, ...args: any[]) => void
export type StoreHookDispatchEffect = (actionName: string, ...args: any[]) => any | Promise<any>
export type SetStoreAction<S> = S | ((prevState: S) => S)
export type SetStore<A> = (value: A, merge?: boolean) => void
export type BoundMethods<S> = Record<string, (state: S, payload?: any) => S>
export type ToolMethods<S> = {
  dispatch: StoreHookDispatch
  dispatchEffect?: StoreHookDispatchEffect
} & Exclude<Record<string, (payload?: any) => S>, 'dispatch'>
export interface Methods<S> {
  setStore: SetStore<SetStoreAction<S>>
  dispatch: StoreHookDispatch
  boundMethods: BoundMethods<S>
}
export type UseStore = <S>(
  moduleName?: string,
  autoMerge?: boolean,
  willUpdate?: boolean
) => [S, SetStore<SetStoreAction<S>>, ToolMethods<S>]
export type UseStoreByContext = <S>(
  storeContext: any,
  moduleName?: string,
  autoMerge?: boolean,
  willUpdate?: boolean
) => [S, SetStore<SetStoreAction<S>>, ToolMethods<S>]

export declare class StoreInstance<S extends StoreState> extends EventBus<any> {
  useStore: UseStoreByContext
  _state?: S | {}
  _reducers?: Record<string, any>
  _modules?: Set<string>
  _options?: Options<S>
  static _plugins?: Set<string>
  _reduxStore?: any
  _dispatchRedux?: any
  _registerReduxModule?: any
  _unsubscribeRedux?: any
  static pluginsInitial: Set<any>
  constructor(options?: Options<S>)
  initialBase(options?: Options<S>): void
  getUseStore(): any
  /**
   * use plugin
   */
  static usePlugin(plugin: any): void
  /**
   * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
   */
  init(options?: Options<S>): void
  /**
   * 除了createStore时初始化，也可以通过这个方法来注册每个模块
   */
  registerModule(moduleName: string, initialModule: Module): void
  /**
   * 修改配置
   */
  config(options?: Options<S> | ((oldOptions: Options<S>) => Options<S>)): void
  getState(moduleName?: string): any
  setState(nextState: ((state: S) => S) | S): void
  _setState(nextState: {} | S): void
  setModuleState(moduleName: string, nextState: ((state: S) => S) | S, merge: boolean): void
  _setModuleState(moduleName: string, nextState: any): void
  dispatch(actionName: string, payload: any): void
  /**
   * 触发一个action并调用reducer修改state
   */
  dispatchModuleAction(moduleName: string, actionName: string, payload: any): Promise<void>
}

export type CreateAppStore<S extends StoreState> = {
  store: StoreInstance<S>
  useStore: {
    <S_1 = any>(moduleName: string, assign?: boolean, willUpdate?: boolean): [
      S_1,
      SetStore<SetStoreAction<S_1>>,
      ToolMethods<S_1>
    ]
    registerModule(moduleName: string, initialModule: Module): void
    dispatch(actionName: string, payload: any): void
    usePlugins(plugins: any[]): void
  }
  registerModule: (moduleName: string, initialModule: Module) => void
  usePlugins: (plugins: any[]) => void
  getStoreState: () => any
  setStoreState: (nextState: any) => void
  dispatch: (actionName: string, payload: any) => void
  StoreClass: {
    new <S_2 extends Record<string, any>>(options?: Options<S_2>): StoreInstance<S_2>
    _plugins: Set<string>
    pluginsInitial: Set<any>
    usePlugin(plugin: any): void
  }
}
