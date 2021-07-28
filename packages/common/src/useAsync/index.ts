import { useState, useCallback, useEffect, useRef } from 'react'
import useCounter from '../useCounter'

type AsyncFunction = (...args: any[]) => Promise<any>
interface Options {
  immediate?: boolean
  setState?: (...args: any[]) => void
}

// type UseAsyncReturn = [exector: () => ]

/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading状态
 * @param asyncFunction
 * @param options.immediate 是否组件加载时自动执行
 * @param options.setState 更新state方法，一般情况下直接.then后处理即可，但有时候希望自动同步状态，则可以配置setState方法
 */
export default function useAsync<A extends AsyncFunction>(
  asyncFunction: A,
  { immediate = false, setState }: Options = {}
) {
  const [pendingCount, { inc, dec }] = useCounter(0, { min: 0 })
  const [result, setResult] = useState()
  const [error, setError] = useState()
  
  const setStateRef = useRef(setState)
  if(setStateRef.current !== setState) setStateRef.current = setState

  const exector = useCallback(
    (...args: any[]) => {
      inc()
      return new Promise((resolve, reject) => {
        const pending = asyncFunction(...args)
        pending
          .then((res) => {
            dec()
            setResult(res)
            setStateRef.current && setStateRef.current(res)
            resolve(res)
          })
          .catch((error) => {
            dec()
            setError(error)
            reject(error)
          })
      })
    },
    [asyncFunction, dec, inc]
  )

  useEffect(() => {
    if (immediate) {
      exector()
    }
  }, [exector, immediate])

  return [exector, { result, error, loading: !!pendingCount, pendingCount }] as [
    typeof exector,
    {
      result: typeof result
      error: typeof error
      loading: boolean
      pendingCount: number
    }
  ]
}
