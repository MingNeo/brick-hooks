import { Store } from './store'
import { Options, UseStore, Module } from './types'

export function classFactory<S>() {
  return class extends Store<S> {}
}

export function createStoreAndClass<S = Record<string, any>>(options: Options<S> = {}) {
  const { plugins = [], ...restOptions } = options
  const SingleClass = classFactory()
  plugins.forEach((plugin) => SingleClass.usePlugin(plugin))

  return {
    store: new SingleClass(restOptions),
    StoreClass: SingleClass,
  }
}

/**
 * 创建独立store实例
 */
export default function createStore<S = Record<string, any>>(options: Options<S> = {}) {
  const { store, StoreClass } = createStoreAndClass(options)

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

  return {
    store,
    useStore,
    registerModule,
    usePlugins,
    getStoreState,
    setStoreState,
    dispatch,
  }
}

// function createStoreContext<S = Record<string, any>>(options: Options<S> = {}) {
//   const {
//     store: baseStore,
//     registerModule,
//     usePlugins,
//     getStoreState,
//     setStoreState,
//     dispatch,
//   } = createStore(options)

//   const context = React.createContext({
//     store: baseStore,
//   })

//   const useStore = <S = any>(
//     moduleName: string,
//     assign: boolean = true,
//     willUpdate: boolean = true
//   ) => {
//     const { store } = React.useContext(context)
//     const useStoreStore: UseStore = store.getUseStore()
//     return useStoreStore<S>(moduleName, assign, willUpdate)
//   }

//   return {
//     store: baseStore,
//     useStore,
//     registerModule,
//     usePlugins,
//     getStoreState,
//     setStoreState,
//     dispatch,
//   }
// }
