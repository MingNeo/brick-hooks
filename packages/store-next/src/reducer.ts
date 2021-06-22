import { combineReducers, isObject } from './utils'
import { StoreState } from './base'

function getNextState(prevState: any, nextState: Function) {
  return typeof nextState === 'function' ? (nextState as Function)(prevState) : nextState
}

/**
 * 默认的reducer, 提供两种模式，直接覆盖, 和自动合并(需数据格式是object，否则自动使用setValue)
 * @param prevState
 * @param action
 */
export const defaultReducers = {
  $setValueMerge: (prevState: StoreState, value: StoreState | any) =>
    isObject(value)
      ? { ...(prevState || {}), ...(getNextState(prevState, value) || {}) }
      : defaultReducers.$setValue(prevState, value),
  $setValue: (prevState: StoreState, value: StoreState | any) => getNextState(prevState, value),
}

export function getReducer(modules = {}) {
  const reducers = Object.entries(modules).reduce((prev, [moduleName, value]: any[]) => {
    if(value) prev[moduleName] = value.reducers
    return prev
  }, {})
  return combineReducers(reducers, defaultReducers)
}
