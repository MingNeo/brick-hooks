import { useRef, useMemo } from 'react'

type DebunceFn = (...args: any[]) => any

// interface DebounceFnOptions {
//   deps?: any[]
//   leading?: boolean // 指定在延迟开始前调用
//   maxWait?: number // 设置 func 允许被延迟的最大值
//   trailing?: boolean
// }

/**
 * 处理一个函数返回防抖的函数
 * @param handler
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(
  handler: DebunceFn,
  wait = 100
  // options: DebounceFnOptions = {},
): [DebunceFn, () => void] {
  // const { deps } = options
  const timer = useRef<number>()
  const waitRef = useRef<number>(wait)
  const fnRef = useRef<DebunceFn>(handler)
  fnRef.current = handler

  return useMemo(() => {
    const cancel = () => {
      clearTimeout(timer.current)
    }

    const debounceFn = (...args: any) => {
      timer.current && clearTimeout(timer.current)

      timer.current = setTimeout(() => {
        cancel()
        fnRef.current && fnRef.current.apply(null, args)
        timer.current = null
      }, waitRef.current) as unknown as number
    }
    return [debounceFn, cancel]
  }, [])
}
