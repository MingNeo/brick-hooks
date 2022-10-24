import { useCallback, useEffect, useMemo, useRef } from 'react'
import useDebounceFn from '../useDebounceFn'
import useObjectState from '../useObjectState'

type AsyncFunction = (...args: any[]) => any | Promise<any>

type Exector = (...args: any[]) => Promise<any>

type Status = 'success' | 'loading' | 'idle' | 'fail' | 'mutate success'

// type UseAsyncReturn = [exector: () => ]
/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading、result、error等状态
 * @param asyncFunction
 * @param options.immediate 是否组件加载时自动执行
 * @param options.onResult 请求成功返回数据的回调，一般情况下直接.then后处理即可，但有时候希望自动同步状态，则可以配置onResult方法
 * @param options.debounceTime 设置值时自动进行debounce处理
 */
export default function useAsync<A extends AsyncFunction>(
  asyncFunction: A,
  {
    immediate = false,
    onResult,
    debounceTime,
  }: {
    immediate?: boolean
    onResult?: (res: any) => void
    debounceTime?: number
    manual?: boolean
  } = {},
): [
  Exector,
  {
    result: any
    error: any
    loading: boolean
    status: 'success' | 'loading' | 'idle' | 'fail' | 'mutate success'
    mutate: (...args: any[]) => any
  },
] {
  const [{ result, status, error }, setData] = useObjectState<{ status: Status; result: any; error: any }>({
    status: 'idle',
    result: undefined,
    error: undefined,
  })

  const unmountedRef = useRef(false)
  const onResultRef = useRef(onResult)
  const resultRef = useRef(result)
  resultRef.current = result
  const fetchingPromiseRef = useRef<Promise<any>>()
  if (onResultRef.current !== onResult) onResultRef.current = onResult

  const originExector = useCallback(
    (...args: any[]) => {
      // 如果正在请求中，则直接返回请求的promise
      if (fetchingPromiseRef.current) {
        return fetchingPromiseRef.current
      }
      fetchingPromiseRef.current = (async () => {
        setData({ status: 'loading' })
        try {
          const res = await asyncFunction(...args)
          fetchingPromiseRef.current = null
          setData({ result: res, status: 'success' })
          onResultRef.current && onResultRef.current(res)
          return res
        } catch (error) {
          fetchingPromiseRef.current = null
          setData({ result: undefined, error, status: 'fail' })
          throw new Error(error)
        }
      })()
      return fetchingPromiseRef.current
    },
    [asyncFunction, setData],
  )

  const [debounceExector] = useDebounceFn(originExector, debounceTime)

  // 如果有debounceTime则使用debounce的函数
  const exector = useMemo(
    () => (debounceTime ? debounceExector : originExector),
    [debounceExector, debounceTime, originExector],
  )

  const mutate = useCallback(async (callback) => {
    const data = await callback(resultRef.current)
    setData({ result: data, status: 'mutate success' })
  }, [])

  useEffect(() => {
    !unmountedRef.current && immediate && exector()

    return () => {
      unmountedRef.current = true
    }
    // 只在组件加载时执行一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [
    exector,
    {
      result,
      status,
      error,
      loading: status === 'loading' || status === 'mutate success',
      mutate,
    },
  ]
}
