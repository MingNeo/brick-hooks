import { Module as ModuleBase, StoreHookDispatch } from 'hydrogen-store'
import { useMemo } from 'react'

type EffectCallback<S> = ({ state, dispatch }: { state: S; dispatch: StoreHookDispatch }, payload: any) => any

export type StoreHookDispatchEffect = (actionName: string, ...args: any[]) => any

interface Module<S> extends ModuleBase {
  effects?: Record<string, EffectCallback<S>>
  _effectPluginOpened?: boolean
}

function registerModule<S = any>(moduleName: string | number, initialModule: Module<S>) {
  if (this._effectPluginOpened) return
  this._effects = this._effects || {}
  initialModule?.effects && (this._effects[moduleName] = initialModule?.effects)
  this._effectPluginOpened = true
}

function getUseStore(store, originGetUseStore, dispatchModuleEffectAction) {
  const useStoreStore = originGetUseStore.call(store)

  return function useStore<S>(moduleName: string = '', autoMerge: boolean = false, willUpdate: boolean = true) {
    const [moduleState, setStore, boundMethods] = useStoreStore(moduleName, autoMerge, willUpdate)

    return useMemo(
      () => [
        moduleState,
        setStore,
        { ...boundMethods, dispatchEffect: dispatchModuleEffectAction.bind(store, moduleName) },
      ],
      [boundMethods, moduleState, setStore, moduleName]
    )
  }
}

export function getEffects(modules = {}) {
  return Object.entries(modules).reduce((prev, [moduleName, value]: any[]) => {
    if (value) prev[moduleName] = value.effects
    return prev
  }, {})
}

/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @returns
 */
function effectPlugin<S>(Store: any) {
  const StoreOriginRegisterModule = Store.prototype.registerModule
  Store.prototype.registerModule = function afterRegisterModule(moduleName: string, initialModule: Module<S>) {
    StoreOriginRegisterModule.call(this, moduleName, initialModule)
    registerModule.call(this, moduleName, initialModule)
  }

  async function dispatchModuleEffectAction(moduleName: string, actionName: string, payload: any) {
    if (!moduleName) return

    const handler = this._effects?.[moduleName]?.[actionName]
    if (!handler) throw new Error(`not found effect ${actionName}`)

    const rootState = this._state
    const prevState = this._state[moduleName]
    const dispatch = (commitActionName: string, commitPayload: any) => {
      Store.prototype.dispatchModuleAction.bind(this, moduleName)(commitActionName, commitPayload)
    }

    const dispatchEffect = (effectActionName: string, effectPayload: any, module: string = moduleName) => {
      Store.prototype.dispatchModuleEffectAction.bind(this, module)(effectActionName, effectPayload)
    }
    return handler({ state: prevState, dispatch, dispatchEffect, rootState }, payload)
  }

  const StoreOriginInitialBase = Store.prototype.initialBase

  Store.prototype.initialBase = function (options?: any) {
    this._options = this._options || options
    const { modules = {} } = this._options || {}
    StoreOriginInitialBase.call(this, options)
    this._effects = getEffects(modules)
    // this.useStore = this.getUseStore()
  }

  Store.prototype.dispatchModuleEffectAction = dispatchModuleEffectAction

  const StoreOriginGetUseStore = Store.prototype.getUseStore
  Store.prototype.initEffects = function () {
    this._effects = this._effects || {}
    this.getUseStore = getUseStore.bind(this, this, StoreOriginGetUseStore.bind(this), dispatchModuleEffectAction)
    // this.useStore = this.getUseStore()
  }

  return function initial(store) {
    store.initEffects()
  }
}

effectPlugin.type = 'effectPlugin'
effectPlugin.sortIndex = 0

export default effectPlugin
