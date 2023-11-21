import { useCallback, useRef } from 'react'

type Callback = (...args: any[]) => any

/**
 * 返回一个函数，该函数的引用在组件的生命周期内保持不变。
 * @param cb - 一个回调函数，它接受一个参数数组并返回任何值。
 * @returns 一个回调函数，它接受一个参数数组并返回任何值。这个函数的引用在组件的生命周期内保持不变。
 */
export default function useRefCallback<T extends Callback>(cb: T): T {
  const fnRef = useRef<T>(cb)
  fnRef.current = cb

  return useCallback((...args: any[]) => {
    return fnRef.current?.(...args)
  }, []) as T
}