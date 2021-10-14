import { useCallback, useRef } from 'react'

type Callback = (...args: any[]) => any

/**
 * 返回一个function，可以保证函数引用地址在组件中不会变化
 */
export default function useRefCallback(cb: Callback) {
  const fnRef = useRef<Callback>()
  fnRef.current = cb

  return useCallback((...args) => {
    return fnRef.current(...args)
  }, [])
}
