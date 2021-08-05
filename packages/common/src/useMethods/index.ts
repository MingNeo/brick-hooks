import { useMemo, useState } from 'react'

type Reducer = (...args: any[]) => any

type Dispatch = (actionName: string, ...args: any[]) => void

type Methods = Record<string, Reducer>

export interface BoundMethods extends Record<string, (...args: any[]) => void> {
  dispatch: Dispatch
}

function useMethods<S>(methods: Methods, initialState: S | (() => S)): [S, BoundMethods, Dispatch] {
  const [value, setValue] = useState(initialState)

  const { boundMethods, dispatch } = useMemo(() => {
    const dispatch: Dispatch = (actionName: string, ...args: any[]) => {
      const fn = methods[actionName]
      setValue((value: S) => fn(value, ...args))
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

export default useMethods
