// eslint-disable-next-line no-use-before-define
import { createElement, createContext, useContext } from 'react'
import createStore from './createStore'
import { Module, Options } from './types'

/**
 * 创建一个全局store，并使用react context存储store
 */
export default function createApp<S = Record<string, any>>(options: Options<S>) {
  const store = createStore<S>(options)
  const CustomHookContext = createContext({ store })
  const Provider = (props: any) => createElement(CustomHookContext.Provider, { ...props, value: { store } })

  const useStore = <S_1 = S>(moduleName?: string, autoMerge?: boolean, triggerUpdate?: boolean) => {
    const { store } = useContext(CustomHookContext)
    return store?.useStore<S_1>(moduleName, autoMerge, triggerUpdate)
  }

  return { Provider, useStore }
}

/**
 * 创建一个单模块store
 */
export function createContainer<S>(module: Module, options: Options<S> = {}) {
  const store = createStore({ ...options, modules: { __SINGLE_CONTAINER__: module } })
  const CustomHookContext = createContext({ $store: store })
  const Provider = (props: any) => createElement(CustomHookContext.Provider, { ...props, value: { $store: store } })

  const useStore = (autoMerge?: boolean, triggerUpdate?: boolean) => {
    const { $store } = useContext(CustomHookContext)
    return $store.useStore('__SINGLE_CONTAINER__', autoMerge, triggerUpdate)
  }

  return { Provider, useStore }
}
