import { useRef, useMemo, useEffect } from 'react'
import { isNil } from '../utils'

type DebunceFn = (...args: any[]) => any
type Cancel = () => void

interface DebounceFnOptions {
  cancelWhenDestroy?: boolean // 是否在组件销毁时取消debounce
  leading?: boolean // 为true时在延迟开始前立即调用
  trailing?: boolean // 为true时在延迟结束后触发调用
  // maxWait?: number // 设置 func 允许被延迟的最大值
}

/**
 * 处理一个函数返回防抖的函数
 * @param handler 需要进行防抖处理的函数
 * @param wait 等待时间
 * @param options.cancelWhenDestroy 是否在组件销毁时取消debounce
 * @param options.leading 是否在延迟开始前立即调用
 * @param options.trailing 是否在延迟结束后触发调用
 * @returns 
 */
export default function useDebounceFn(
  handler: DebunceFn,
  wait?: number,
  options: DebounceFnOptions = {}
): [DebunceFn, Cancel] {
  const { cancelWhenDestroy = true, leading = false, trailing = true } = options
  const optionsRef = useRef({ wait, cancelWhenDestroy, leading, trailing, fired: false })
  optionsRef.current = { ...optionsRef.current, wait, cancelWhenDestroy, leading, trailing }

  const timer = useRef<number>()
  const fnRef = useRef<DebunceFn>(handler)
  fnRef.current = handler

  useEffect(() => {
    return () => {
      if (optionsRef.current.cancelWhenDestroy && timer.current) {
        clearTimeout(timer.current)
        timer.current = null
      }
    }
  }, [])

  return useMemo(() => {
    const cancel = () => {
      timer.current && clearTimeout(timer.current)
    }

    const debounceFn = (...args: any) => {
      const cb = (fire: boolean) => {
        cancel()
        fire && fnRef.current && fnRef.current.apply(null, args)
        timer.current = null
      }

      if (!isNil(optionsRef.current.wait)) {
        if (optionsRef.current.leading && !timer.current) {
          cb(true)
        }
  
        cancel()
        timer.current = setTimeout(() => {
          cb(optionsRef.current.trailing)
        }, optionsRef.current.wait) as unknown as number
      } else {
        cancel()
        cb(true)
      }
    }
    return [debounceFn, cancel]
  }, [])
}
