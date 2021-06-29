import { Options, Module } from 't-store'
import openRedux from './open-redux'

/**
 * 使用这个插件后，store-next的将使用redux，同时可使用redux-dev-tool
 * 具体来说，开启这个插件的时候，所有的store操作被redux接管，并在redux数据变化后通知到store-next更新数据
 * 使用这个插件和不使用这个插件对业务端的表现完全一致，因此可以通过配置仅在开发环境使用此插件
 * @param Store 
 * @returns 
 */
export default function reduxPlugin<S>(Store) {
  // 如果浏览器/debugger 工具没有安装redux-devtool，直接返回空处理
  if(typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION__) {
    return function initial(store) {}
  }

  const StoreOriginRegisterModule = Store.prototype.registerModule
  Store.prototype.registerModule = function afterRegisterModule(moduleName: string, initialModule: Module) {
    StoreOriginRegisterModule.call(this, moduleName, initialModule)
    this._registerReduxModule?.(moduleName, this._reducers[moduleName], this._state[moduleName])
  }

  const StoreOriginSetState = Store.prototype.setState
  Store.prototype.setState = function(nextState: ((state: S) => S) | S) {
    // 如果开启了devtool，使用redux修改值，并同步过来，否则直接修改
    if (this._dispatchRedux) {
      this._dispatchRedux({ type: '$setValue', payload: nextState })
    } else {
      StoreOriginSetState.call(this, nextState)
    }
  }

  const StoreOriginSetModuleState = Store.prototype.setModuleState
  Store.prototype.setModuleState = function (moduleName: string, nextState: ((state: S) => S) | S, merge: boolean) {
    if (!moduleName) return
    if (this._dispatchRedux) {
      this._dispatchRedux({
        type: merge ? `${moduleName}/$setValueMerge` : `${moduleName}/$setValue`,
        payload: nextState,
      })
    } else {
      StoreOriginSetModuleState.call(this, moduleName, nextState, merge)
    }
  }

  const StoreOriginDispatchModuleAction = Store.prototype.dispatchModuleAction
  Store.prototype.dispatchModuleAction = function (moduleName: string, actionName: string, payload: any) {
    if (!moduleName) return
    if (this._dispatchRedux) {
      this._dispatchRedux({
        type: `${moduleName}/${actionName}`,
        payload,
      })
    } else {
      StoreOriginDispatchModuleAction.call(this, moduleName, actionName, payload)
    }
  }

  Store.prototype.initRedux = function(initialState: {} | S, options: Options<S>) {
    const { dispatch, unsubscribe, registerModule, reduxStore } = openRedux(
      this,
      options.devtoolId,
      initialState,
      this._reducers
    )
    this._reduxStore = reduxStore
    this._dispatchRedux = dispatch
    this._unsubscribeRedux = unsubscribe
    this._registerReduxModule = registerModule
  }

  return function initial(store) {
    !store._reduxStore && store.initRedux(store._state, store._options)
  }
}