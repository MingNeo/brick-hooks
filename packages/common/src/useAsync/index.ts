import { useEffect } from 'react'
import useRequest from '../useRequest'

type AsyncFunction = (...args: any[]) => any | Promise<any>

type Exector = (...args: any[]) => Promise<any>

/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading、result、error等状态
 * @param asyncFunction 异步函数
 * @param options.immediate 是否在组件加载时自动执行，默认为false
 * @param options.onResult 请求成功返回数据的回调函数，默认为undefined
 * @param options.debounceTime 设置值时自动进行debounce处理，默认为undefined
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
  const { exector, result, status, error, loading, mutate } = useRequest(asyncFunction, {
    immediate,
    onSuccess: onResult,
    debounceTime,
  })

  console.warn('`useAsync` is deprecated, please use `useRequest` instead')

  return [
    exector,
    {
      result,
      status,
      error,
      loading,
      mutate,
    },
  ]
}
