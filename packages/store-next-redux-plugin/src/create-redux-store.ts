import { ReducerAction, Reducer } from 'react'
import { createStore } from 'redux'

export type UnsubscribeFn = () => void
export type EnhancedStore = any

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any
  }
}

interface StoreReducerAction {
  type: string
  payload: any
}

const omit = (obj: Record<string, any>, keyToRemove: string) =>
  Object.keys(obj)
    .filter((key) => key !== keyToRemove)
    .reduce<Record<string, any>>((acc, key) => {
      acc[key] = obj[key]

      return acc
    }, {})

function getModuleReducers(reducers: any, moduleName: string) {
  return Object.entries({
    ...(reducers?._base || {}),
    ...(reducers?.[moduleName] || {}),
  }).map(([reducerName, reducer]) => [
    moduleName ? `${moduleName}/${reducerName}` : reducerName,
    reducer,
  ])
}

export const createReduxStore: any = ({ name, initialState = {}, reducers = {} }: any) => {
  if (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION__) {
    return undefined
  }

  const registeredReducers: Record<string | number, Reducer<any, ReducerAction<any>>> = reducers

  const storeReducer: Reducer<any, StoreReducerAction> = (state, action) => {
    const actionSplitResult = action.type.split('/')
    // 当前不支持‘a/b/c'格式action type
    const moduleName = actionSplitResult.length > 1 ? actionSplitResult[0] : undefined
    const isInitModule = /\/_initModule$/.test(action.type)
    const isDeleteAction = /\/_deleteModule$/.test(action.type)

    const currentState = isDeleteAction && moduleName ? omit(state, moduleName) : { ...state }

    const nextState = moduleName
      ? getModuleReducers(registeredReducers, moduleName).reduce(
          (state, [reducerName, reducer]: [string, any]) => {
            const moduleState = state[moduleName]
            if (isInitModule) {
              state[moduleName] = action.payload
            } else if (action.type === reducerName) {
              state[moduleName] = reducer(moduleState, action.payload)
            }
            return state
          },
          currentState
        )
      : currentState

    return nextState
  }

  const store: EnhancedStore = createStore(
    storeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__({
      name: name || 'React state',
      actionsBlacklist: ['/_deleteModule'],
    })
  )

  store.clearModule = (moduleName) => {
    delete registeredReducers[moduleName]

    store.dispatch({
      type: `${moduleName}/_deleteModule`,
    })
  }

  store.registerModule = (
    moduleName: string | number,
    reducers: Reducer<any, unknown>,
    initialState: any
  ) => {
    registeredReducers[moduleName] = reducers

    store.dispatch({
      type: `${moduleName}/_initModule`,
      payload: initialState,
    })

    return () => {
      store.clearModule(moduleName)
    }
  }

  return store
}
