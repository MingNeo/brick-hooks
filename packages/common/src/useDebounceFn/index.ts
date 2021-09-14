import { useRef, useMemo, useEffect } from 'react'
import { isNil } from '../utils'

type DebunceFn = (...args: any[]) => any
type Cancel = () => void

interface DebounceFnOptions {
  cancelWhenDestroy?: boolean // 是否在组件销毁时取消debounce
  // deps?: any[]
  // leading?: boolean // 指定在延迟开始前调用
  // maxWait?: number // 设置 func 允许被延迟的最大值
  // trailing?: boolean
}

/**
 * 处理一个函数返回防抖的函数
 * @param handler
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(
  handler: DebunceFn,
  wait?: number,
  options: DebounceFnOptions = {},
): [DebunceFn, Cancel] {
  const { cancelWhenDestroy = true } = options
  const timer = useRef<number>()
  const waitRef = useRef<number>(wait)
  const fnRef = useRef<DebunceFn>(handler)
  fnRef.current = handler

  useEffect(() => {
    return () => {
      cancelWhenDestroy && timer.current && clearTimeout(timer.current)
    }
  }, [cancelWhenDestroy])

  return useMemo(() => {
    const cancel = () => {
      timer.current && clearTimeout(timer.current)
    }

    const debounceFn = (...args: any) => {
      cancel()
      const cb = () => {
        cancel()
        fnRef.current && fnRef.current.apply(null, args)
        timer.current = null
      }
      if(!isNil(waitRef.current)) {
        timer.current = setTimeout(cb, waitRef.current) as unknown as number
      } else {
        cb()
      }
    }
    return [debounceFn, cancel]
  }, [])
}
