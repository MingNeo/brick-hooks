import createStore, { Store, Options, Module, UseStore, createStoreAndClass } from './base'
import { StoreHookDispatch } from './useStore'

const { store, StoreClass } = createStoreAndClass()

const useStore = <S = any>(
  moduleName: string,
  assign: boolean = true,
  willUpdate: boolean = true
) => {
  const useStoreStore: UseStore = store.getUseStore()
  return useStoreStore<S>(moduleName, assign, willUpdate)
}

const registerModule = (useStore.registerModule = (moduleName: string, initialModule: Module) => {
  store.registerModule(moduleName, initialModule)
})

/**
 * 对全局store 开启插件，这不是一个React hooks
 */
const usePlugins = (useStore.usePlugins = (plugins: any[]) => {
  if (plugins && plugins.length) {
    plugins.forEach((plugin) => StoreClass.usePlugin(plugin))
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
 * @param nextState
 * @returns
 */
const setStoreState = (nextState: any) => {
  return store.setState(nextState)
}

export {
  Store,
  store,
  useStore,
  createStore,
  registerModule,
  usePlugins,
  getStoreState,
  setStoreState,
  // ts types
  Options,
  Module,
  StoreHookDispatch,
}
