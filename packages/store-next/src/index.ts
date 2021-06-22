import createStore, { Store, Options, Module } from './base'

const store = createStore()

const useStore = (moduleName: string, assign: boolean) => store.useStore(moduleName, assign)

const registerModule = useStore.registerModule = (moduleName: string, initialModule: Module) => {
  store.registerModule(moduleName, initialModule)
}

/**
 * 对全局store 开启插件，这不是一个React hooks
 */
const usePlugin = useStore.usePlugin = (plugin: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Store.usePlugin(plugin)
  store.init()
}

export {
  Store,
  store,
  useStore,
  createStore,
  registerModule,
  usePlugin,
  // ts types
  Options,
  Module,
}
