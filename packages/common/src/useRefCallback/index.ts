import { useCallback } from 'react'
import useRefValue from '../useRefValue'

type Callback = (...args: any[]) => any

/**
 * 返回一个function，可以保证函数引用地址在组件中不会变化
 */
export default function useRefCallback<T = Callback>(cb: T) {
  const fnRef = useRefValue<T>(cb)

  return useCallback((...args: any[]) => {
    return fnRef.current && (fnRef.current as any)(...args)
  }, [])
}
