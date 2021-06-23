import useStore from './useStore'
import { combState } from './utils'
import { EventBus } from './eventBus'
import { defaultReducers, getReducer } from './reducer'

export type StoreState = Record<string, any>

export type Dispatch<A> = (value: A) => void | StoreState | Promise<any>

export interface Module {
  state: StoreState
  reducers?: Record<string, any>
}

export type Modules = Record<string, Module>

export interface Options<S> extends Record<string, any> {
  modules?: Modules
  initialState?: S
}

export class Store<S extends StoreState> extends EventBus<any> {
  useStore: any
  _state: S | {}
  // virtualState: any
  _reducers: any

  _modules: Set<string> = new Set<string>()
  _options: Options<S>
  _reduxStore: any
  _dispatchRedux: any
  _registerReduxModule
  _unsubscribeRedux: any

  static pluginsInitial = new Set<((...args: any[]) => void) | any>()

  constructor(options: Options<S> = {}) {
    super()
    this.init(options)
  }

  initialBase(options?: Options<S>) {
    this._options = this._options || options
    const { modules = {} } = this._options || {}
    this._modules = new Set(Object.keys(modules))
    
    const initialState = combState(modules)
    this._state = this._state || initialState || {}
    this._reducers = this._reducers || getReducer(modules)
    this.useStore = useStore.bind(this, this)
  }

  /**
   * use plugin
   */
  static usePlugin(plugin) {
    // 此处的this是class,返回用于实例的插件初始化函数
    const initialFn = plugin(this)
    initialFn && this.pluginsInitial.add(initialFn)
  }

  /**
   * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
   */
  init(options?: Options<S>) {
    this.initialBase(options)
    for (const pluginInitial of Store.pluginsInitial) {
      if (!pluginInitial.$i) {
        pluginInitial(this)
        pluginInitial.$i = true;
      }
    }
  }

  /**
   * 除了createStore时初始化，也可以通过这个方法来注册每个模块
   * @param moduleName
   * @param initialModule
   */
  registerModule(moduleName: string, initialModule: Module) {
    const { state, reducers } = initialModule || {}
    state && (this._state[moduleName] = state)
    reducers && (this._reducers[moduleName] = reducers)
    this._modules.add(moduleName)
  }

  /**
   * 修改配置
   * @param options 
   */
  config(options: (Options<S> | ((oldOptions: Options<S>) => Options<S>)) = {}) {
    this._options = typeof options === 'function' ? options(this._options) : options
    this.init()
  }

  getState(moduleName?: string) {
    return moduleName ? this._state[moduleName] : this._state
  }

  setState(nextState: ((state: S) => S) | S) {
    const state = defaultReducers.$setValue(this._state, nextState)
    this._setState(state)
  }

  _setState(nextState: {} | S) {
    this._state = nextState
    this.publish('storeChange', this._state)
  }

  setModuleState(moduleName: string, nextState: ((state: S) => S) | S, merge: boolean) {
    if (!moduleName) return
    const prevState = this._state[moduleName]
    const state = merge
      ? defaultReducers.$setValueMerge(prevState, nextState)
      : defaultReducers.$setValue(prevState, nextState)
    this._setModuleState(moduleName, state)
  }

  _setModuleState(moduleName: string, nextState: any) {
    this._state[moduleName] = nextState
    this.publish(`storeChange.${moduleName}`, this._state[moduleName])
  }

  /**
   * 触发一个action并调用reducer修改state
   * @param moduleName
   * @param actionName
   * @param payload
   */
  async dispatchModuleAction(moduleName: string, actionName: string, payload: any) {
    if (!moduleName) return

    const reducer = this._reducers?.[moduleName]?.[actionName]
    if (!reducer) throw new Error(`not found reducer ${actionName}`)

    const prevState = this._state[moduleName]
    this._state[moduleName] = await reducer(prevState, payload)
    // 触发react组件更新
    this.publish(`storeChange.${moduleName}`, this._state[moduleName])
  }
}

export default function createStore(options = {}) {
  return new Store(options)
}
