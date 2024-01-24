import { useCallback, useEffect, useRef, useState } from 'react'
import useDebounceFn from '../useDebounceFn'
import { isFunction } from '../utils'

type AsyncFunction = (...args: any[]) => any | Promise<any>

type Exector = (...args: any[]) => Promise<any>

type Status = 'success' | 'loading' | 'idle' | 'fail' | 'mutate success'

/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading、result、error等状态
 * @param asyncFunction
 * @param options.immediate 是否组件加载时自动执行
 * @param options.onSuccess 请求成功返回数据的回调，一般情况下直接.then后处理即可，但有时候希望自动同步状态，则可以配置onSuccess方法
 * @param options.debounceTime 设置值时自动进行debounce处理
 */
export default function useRequest<A extends AsyncFunction>(
  asyncFunction: A,
  {
    immediate = false,
    onSuccess,
    debounceTime,
  }: {
    immediate?: boolean
    onSuccess?: (res: any) => void
    debounceTime?: number
  } = {},
): {
  exector: Exector
  result: any
  error: any
  loading: boolean
  status: 'success' | 'loading' | 'idle' | 'fail' | 'mutate success'
  mutate: (...args: any[]) => any
} {
  const [{ result, status, error }, setState] = useState<{ status: Status; result: any; error: any }>({
    status: 'idle',
    result: undefined,
    error: undefined,
  })

  const unmountedRef = useRef(false)
  const onSuccessRef = useRef(onSuccess)
  const resultRef = useRef(result)
  const cbRef = useRef(asyncFunction)
  resultRef.current = result
  cbRef.current = asyncFunction
  const fetchingPromiseRef = useRef<Promise<any>>()
  if (onSuccessRef.current !== onSuccess) onSuccessRef.current = onSuccess

  const originExector = useCallback((...args: any[]) => {
    // 如果正在请求中，则直接返回请求的promise
    if (fetchingPromiseRef.current) {
      return fetchingPromiseRef.current
    }
    fetchingPromiseRef.current = (async () => {
      setState((prev) => ({ ...prev, status: 'loading' }))
      try {
        const res = await cbRef.current(...args)
        fetchingPromiseRef.current = null
        setState((prev) => ({ ...prev, result: res, status: 'success' }))
        onSuccessRef.current?.(res)
        return res
      } catch (error) {
        fetchingPromiseRef.current = null
        setState((prev) => ({ ...prev, result: undefined, error, status: 'fail' }))
        Promise.reject(error)
      }
    })()
    return fetchingPromiseRef.current
  }, [])

  const [debounceExector] = useDebounceFn(originExector, debounceTime)

  // 如果有debounceTime则使用debounce的函数
  const exector = debounceTime ? debounceExector : originExector

  const mutate = useCallback(
    async (newData: (Record<string, any> | any[] | ((result: any) => any))) => {
      const data = isFunction(newData) ? await (newData as any)(resultRef.current) : newData
      setState((prev) => ({ ...prev, result: data, status: 'mutate success' }))
    },
    [setState],
  )

  useEffect(() => {
    !unmountedRef.current && immediate && exector()

    return () => {
      unmountedRef.current = true
    }
    // 只在组件加载时执行一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    exector,
    result,
    status,
    error,
    loading: status === 'loading' || status === 'mutate success',
    mutate,
  }
}
