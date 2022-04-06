import { StoreClassFactory } from './store'
import { Options, UseStore, Module, Plugin } from './types'

function sortPlugins(plugins: Plugin[]) {
  return plugins.sort((a, b) => a?.sortIndex - b?.sortIndex)
}

/**
 * 创建独立store实例
 */
export default function createStore<S = Record<string, any>>(options: Options<S> = {}) {
  const { plugins = [], useStoreAutoMerge = true, ...restOptions } = options
  const StoreClass = StoreClassFactory()
  sortPlugins(plugins).forEach((plugin: Plugin) => StoreClass.usePlugin(plugin))

  const store = new StoreClass(restOptions)

  const useStore = <StoreState = any>(
    moduleName: string,
    assign: boolean = useStoreAutoMerge,
    willUpdate: boolean = true
  ) => {
    const useStoreStore: UseStore = store.getUseStore()
    return useStoreStore<StoreState>(moduleName, assign, willUpdate)
  }

  const registerModule = (useStore.registerModule = (moduleName: string, initialModule: Module) => {
    store.registerModule(moduleName, initialModule)
  })

  /**
   * 触发全局的dispatch，如触发test module, dispatch('test/setData', {})
   */
  const dispatch = (useStore.dispatch = (actionName: string, payload: any) => {
    store.dispatch(actionName, payload)
  })

  /**
   * 对全局store 开启插件，这不是一个React hooks
   */
  const usePlugins = (useStore.usePlugins = (plugins: any[]) => {
    if (plugins && plugins.length) {
      sortPlugins(plugins).forEach((plugin: Plugin) => StoreClass.usePlugin(plugin))
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // 因为在createStore之后调用，所以需要重新初始化一下
      store.init()
    }
  })

  /**
   * 对获取全局单一实例的globalState
   * @returns
   */
  const getStoreState = () => {
    return store.getState()
  }

  /**
   * 设置全局单一实例的globalState
   * @returns
   */
  const setStoreState = (nextState: any) => {
    return store.setState(nextState)
  }

  return {
    store,
    useStore,
    registerModule,
    usePlugins,
    getStoreState,
    setStoreState,
    dispatch,
    StoreClass,
  }
}
