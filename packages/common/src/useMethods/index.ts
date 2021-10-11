import { useMemo, useState } from 'react'

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

export interface BoundMethods extends Record<string, (...args: any[]) => void> {
  dispatch: Dispatch
}

export default function useMethods<S>(
  methods: Methods,
  initialState: S | (() => S)
): [S, BoundMethods, Dispatch] {
  const [value, setValue] = useState(initialState)

  const { boundMethods, dispatch } = useMemo(() => {
    const dispatch: Dispatch = (...args: any[]) => {
      let actionName: any
      let payloads: any
      if (typeof args[0] === 'string') {
        actionName = args[0]
        payloads = args.slice(1)
      } else {
        actionName = args[0]?.type
        payloads = args
      }
      const fn = methods[actionName]
      setValue((value: S) => fn(value, ...payloads))
    }

    const boundMethods: BoundMethods = Object.entries(methods).reduce(
      (methods, [name, fn]: [string, Reducer]) => {
        const method = (...args: any[]) => {
          setValue((value: S) => fn(value, ...args))
        }
        methods[name] = method
        return methods
      },
      { dispatch }
    )

    return {
      boundMethods,
      dispatch,
    }
  }, [methods])

  return [value, boundMethods, dispatch]
}
