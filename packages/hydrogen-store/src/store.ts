import { UseStoreByContext, Options, Module, StoreState } from './types'
import useStore from './useStore'
import { combState, invariant } from './utils'
import { EventBus } from './eventBus'
import { defaultReducers, getReducer } from './reducer'

/**
 * 创建Store类的工厂函数
 */
export function StoreClassFactory() {
  /**
   * Store类
   */
  return class Store<S extends StoreState> extends EventBus<any> {
    useStore: UseStoreByContext
    _state: S | {}
    // virtualState: any
    _reducers: Record<string, any>

    _modules: Set<string> = new Set<string>()
    _options: Options<S>
    static _plugins: Set<string> = new Set<string>()
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
    }

    getUseStore() {
      return useStore.bind(this, this)
    }

    /**
     * use plugin
     */
    static usePlugin(plugin) {
      plugin.type && this._plugins.add(plugin.type)
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
          pluginInitial.$i = true
        }
      }

      this.useStore = this.getUseStore()
    }

    /**
     * 除了createStore时初始化，也可以通过这个方法来注册每个模块
     */
    registerModule(moduleName: string, initialModule: Module) {
      const { state, reducers } = initialModule || {}
      state && (this._state[moduleName] = state)
      reducers && (this._reducers[moduleName] = reducers)
      this._modules.add(moduleName)
    }

    /**
     * 修改配置
     */
    config(options: Options<S> | ((oldOptions: Options<S>) => Options<S>) = {}) {
      this._options = typeof options === 'function' ? options(this._options) : options
      this.init()
    }

    getState(moduleName?: string): S | void | null {
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

    dispatch(actionName: string, payload: any) {
      const actionSplitResult = actionName.split('/')
      // 当前不支持‘a/b/c'格式action type
      const moduleName = actionSplitResult.length > 1 ? actionSplitResult[0] : undefined
      invariant(!!moduleName, 'moduleName setTimeout has not been defined')
      this.dispatchModuleAction(moduleName, actionSplitResult[1], payload)
    }

    /**
     * 触发一个action并调用reducer修改state
     */
    async dispatchModuleAction(moduleName: string, actionName: string, payload: any) {
      if (!moduleName) return

      const reducer = this._reducers?.[moduleName]?.[actionName]
      if (!reducer) throw new Error(`not found reducer ${actionName}`)

      const prevState = this._state[moduleName]
      this._state[moduleName] = reducer(prevState, payload)
      // 触发react组件更新
      this.publish(`storeChange.${moduleName}`, this._state[moduleName])
    }
  }
}
