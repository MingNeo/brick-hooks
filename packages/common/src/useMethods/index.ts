import { useMemo, useReducer } from 'react'

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

export type Methods = Record<string, Reducer>

export interface BoundActionMethods extends Record<string, (...args: any[]) => void> {
  dispatch: Dispatch
}

export default function useMethods<S>(
  methods: Methods,
  initialState: S | (() => S)
): [S, BoundActionMethods, Dispatch] {
  const [value, dispatch] = useReducer((prev: S, action: Action) => {
    return methods[action.type](prev, ...action.args)
  }, initialState)

  const boundMethods: BoundActionMethods = useMemo(() => {
    const dispatchMethods: Dispatch = (...args: any[]) => {
      dispatch(typeof args[0] === 'string' ? { type: args[0], args: args.slice(1) } : { type: args[0]?.type, args })
    }

    return Object.keys(methods).reduce(
      (methods, type: string) => ({
        ...methods,
        [type]: (...args: any[]) => dispatch({ type, args }),
      }),
      { dispatch: dispatchMethods }
    )
  }, [methods])

  return [value, boundMethods, boundMethods.dispatch]
}
