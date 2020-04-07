import createStore, { Store, Options, Module } from './base'

const store = createStore()

const useStore = (moduleName: string, assign: boolean) => store.useStore(moduleName, assign)

const registerModule = (moduleName: string, initialModule: Module) => {
  store.registerModule(moduleName, initialModule)
}

const usePlugin = (plugin: any) => {
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

export default Store
