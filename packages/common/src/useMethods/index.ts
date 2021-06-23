import { useMemo, useCallback, useState } from 'react'

type Reducer = (...args: any[]) => any


type Methods = Record<string,Reducer>

export type BoundMethods = Record<string, (...args: any[]) => void>

function useMethods<S>(methods: Methods, initialState: S) {
  const [value, setValue] = useState(initialState)
  const boundMethods: BoundMethods = useMemo(
    () =>
      Object.entries(methods).reduce((methods, [name, fn]: [string, Reducer]) => {
        const method = (...args: any[]) => {
          setValue((value: S) => fn(value, ...args))
        }
        methods[name] = method
        return methods
      }, {} as Methods),
    [methods]
  )

  const dispatch = useCallback((actionName: string, ...args: any[]) => {
    const fn = methods[actionName]
    setValue((value: S) => fn(value, ...args))
  }, [methods])
  
  return [value, boundMethods, dispatch] as [S, BoundMethods, typeof dispatch]
}

export default useMethods
