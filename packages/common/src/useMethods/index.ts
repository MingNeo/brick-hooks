import { useMemo, useReducer } from 'react'
import { isFunction } from '../utils'

export type Reducer = (...args: any[]) => any

export interface Action {
  type: string
  payload?: any
  [x: string]: any
}

export interface Dispatch {
  (actionName: string, ...args: any[]): void
  (action: Action): void
}

type MethodsReducer<S> = (state: S) => Record<string, Reducer>
export type Methods = Record<string, Reducer>

export interface BoundActionMethods extends Record<string, (...args: any[]) => void> {
  dispatch: Dispatch
}

export default function useMethods<S>(
  methods: Methods | MethodsReducer<S>,
  initialState: S | (() => S),
): [S, BoundActionMethods, Dispatch] {
  const [value, dispatch] = useReducer((prev: S, action: Action) => {
    return isFunction(methods)
      ? (methods as MethodsReducer<S>)(prev)[action.type](...action.args)
      : methods[action.type](prev, ...action.args)
  }, initialState)

  const boundMethods: BoundActionMethods = useMemo(() => {
    const dispatchMethods: Dispatch = (...args: any[]) => {
      dispatch(typeof args[0] === 'string' ? { type: args[0], args: args.slice(1) } : { type: args[0]?.type, args })
    }

    return (Object.keys(isFunction(methods) ? (methods as MethodsReducer<S>)({} as S) : methods) || []).reduce(
      (prev, type: string) => ({
        ...prev,
        [type]: (...args: any[]) => dispatch({ type, args }),
      }),
      { dispatch: dispatchMethods },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [value, boundMethods, boundMethods.dispatch]
}
