import { useEffect, useRef } from 'react'

/**
 * 对一个函数进行节流处理，返回处理过的函数
 * @param handler 
 * @param ms 
 * @returns [throttleFn, cancel]
 */
function useThrottleFn(handler: (...args: any[]) => any, ms: number = 200) {
  const timeoutRef = useRef<any>()
  const nextArgsRef = useRef<any[]>(null)

  const throttleFn = (...args) => {
    if (!timeoutRef.current) {
      const timeoutCallback = () => {
        if (nextArgsRef.current) {
          const currentArgs = [...nextArgsRef.current]
          nextArgsRef.current = null
          timeoutRef.current = setTimeout(timeoutCallback, ms)

          return handler(...currentArgs)
        } else {
          timeoutRef.current = null
        }
      }
      timeoutRef.current = setTimeout(timeoutCallback, ms)

      return handler(...args)
    } else {
      // 当前已经有等待执行的函数，忽略本次触发，仅更新一下参数
      nextArgsRef.current = args
    }
  }

  const cancel = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = nextArgsRef.current = null
  }

  useEffect(() => {
    return () => {
      cancel()
    }
  }, [])

  return [throttleFn, cancel] as [typeof throttleFn, typeof cancel]
}

export default useThrottleFn
