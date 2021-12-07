import { combineReducers, isObject } from './utils'
import { StoreState } from './types'

type NextState = StoreState | ((...args: any[]) => StoreState | any) | any

/**
 * 默认的reducer, 提供两种模式，直接覆盖, 和自动合并(需数据格式是object，否则自动使用setValue)
 */
export const defaultReducers = {
  $setValueMerge: (prevState: StoreState, value: NextState) => {
    const nextState = getNextState(prevState, value)
    return isObject(prevState || nextState) ? { ...(prevState || {}), ...(nextState || {}) } : nextState
  },
  $setValue: (prevState: StoreState, value: NextState) => getNextState(prevState, value),
}

export function getReducer(modules = {}) {
  const reducers = Object.entries(modules).reduce((prev, [moduleName, value]: any[]) => {
    if (value) prev[moduleName] = value.reducers
    return prev
  }, {})
  return combineReducers(reducers, defaultReducers)
}

function getNextState(prevState: any, nextState: NextState) {
  return typeof nextState === 'function' ? (nextState as Function)(prevState) : nextState
}
