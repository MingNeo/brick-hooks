import { useEffect, useRef, useCallback } from 'react'

type Fn = (...args: any[]) => any

/**
 * 防抖hooks, 初始及deps变化时自动执行函数
 * @param fn 
 * @param ms 
 * @param deps 
 * @param skipMount 是否跳过挂载阶段再执行
 */
export default function useDebounce(fn: () => void, ms: number = 100, deps?: any[], skipMount?: boolean) {
  const mounted = useRef(false)
  const timer = useRef<any>()

  const fnRef = useRef<Fn>()
  fnRef.current = fn

  useEffect(() => {
    // 跳过挂载执行
    if (skipMount && !mounted.current) {
      mounted.current = true
      return
    }
    
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      fnRef.current()
    }, ms)

    return () => {
      clearTimeout(timer.current)
    }
  }, deps)

  const cancel = useCallback(() => {
    clearTimeout(timer.current)
    fnRef.current = null
  }, [])

  return [cancel]
}
