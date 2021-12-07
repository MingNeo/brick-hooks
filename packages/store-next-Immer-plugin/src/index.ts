import produce, { Draft } from 'immer'

function getNextState(prevState: any, nextState: any) {
  return typeof nextState === 'function'
    ? produce(prevState, (draft: Draft<any>) => {
        nextState(draft)
      })
    : nextState
}

function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 使用这个插件后，store-next将可以使用immer的语法编写reducer
 */
function immerPlugin<S>(Store: any) {
  Store.prototype.dispatchModuleAction = function (moduleName: string, actionName: string, payload: any) {
    if (!moduleName) return

    const reducer = this._reducers?.[moduleName]?.[actionName]
    if (!reducer) throw new Error(`not found reducer ${actionName}`)

    const prevState = this._state[moduleName]
    this._state[moduleName] = reducer(prevState, payload)
    // 触发react组件更新
    this.publish(`storeChange.${moduleName}`, this._state[moduleName])
  }

  const defaultReducers = {
    $setValueMerge: (prevState: any, value: any) => {
      const nextState = getNextState(prevState, value)
      return isObject(prevState || nextState) ? { ...(prevState || {}), ...(nextState || {}) } : nextState
    },
    $setValue: (prevState: any, value: any) => getNextState(prevState, value),
  }

  return function initial(store) {
    store._reducers._base = { ...store._reducers._base, ...defaultReducers }
    Object.entries(store._reducers).forEach(([moduleName, moduleReducers]) => {
      Object.entries(moduleReducers).forEach(([actionName, reducer]) => {
        store._reducers[moduleName][actionName] = (prevState: any, payload: any) => {
          return produce(prevState, (draft: Draft<S>) => reducer(draft, payload))
        }
      })
    })
  }
}
immerPlugin.type = 'immerPlugin'
immerPlugin.sortIndex = 10

export default immerPlugin
