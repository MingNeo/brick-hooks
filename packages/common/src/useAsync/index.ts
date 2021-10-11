import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import useCounter from '../useCounter'
import useDebounceFn from '../useDebounceFn'

type AsyncFunction = (...args: any[]) => Promise<any>
interface Options {
  immediate?: boolean
  onResult?: (res: any) => void
  debounceTime?: number
}

type Exector = (...args: any[]) => Promise<any>

// type UseAsyncReturn = [exector: () => ]

/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading状态
 * @param asyncFunction
 * @param options.immediate 是否组件加载时自动执行
 * @param options.onResult 请求成功返回数据的回调，一般情况下直接.then后处理即可，但有时候希望自动同步状态，则可以配置onResult方法
 * @param options.debounceTime 设置值时自动进行debounce处理
 */
export default function useAsync<A extends AsyncFunction>(
  asyncFunction: A,
  { immediate = false, onResult, debounceTime }: Options = {}
): [
  Exector,
  {
    result: any
    error: any
    loading: boolean
    pendingCount: number
  }
] {
  const [pendingCount, { inc, dec }] = useCounter(0, { min: 0 })
  const [result, setResult] = useState()
  const [error, setError] = useState()

  const unmountedRef = useRef(false)
  const onResultRef = useRef(onResult)
  if (onResultRef.current !== onResult) onResultRef.current = onResult

  const originExector = useCallback(
    (...args: any[]) => {
      inc()
      return new Promise((resolve, reject) => {
        const pending = asyncFunction(...args)
        pending
          .then((res) => {
            dec()
            setResult(res)
            onResultRef.current && onResultRef.current(res)
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

  const [debounceExector] = useDebounceFn(originExector, debounceTime)

  // 如果有debounceTime则使用debounce的函数
  const exector = useMemo(
    () => (debounceTime ? debounceExector : originExector),
    [debounceExector, debounceTime, originExector]
  )

  useEffect(() => {
    !unmountedRef.current && immediate && exector()

    return () => {
      unmountedRef.current = true
    }
    // 只在组件加载时执行一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [exector, { result, error, loading: !!pendingCount, pendingCount }]
}
