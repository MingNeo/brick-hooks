import { useEffect, useRef, useCallback } from 'react';

type DebounceFn = (...args: any[]) => any;

interface DebounceFnOptions {
  deps?: any[]
  leading?: boolean //指定在延迟开始前调用
  maxWait?: number // 设置 func 允许被延迟的最大值
  trailing?: boolean
};

/**
 * 处理一个函数返回防抖的函数
 * @param fn
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(fn: DebounceFn, wait: number = 0, options: DebounceFnOptions = {}) {
  const { deps } = options
  const timer = useRef<any>()
  const argsRef = useRef<any>()

  const fnRef = useRef<any>()
  fnRef.current = fn

  const cancel = useCallback(() => {
    clearTimeout(timer.current)
  }, [])

  const debounceFn = useCallback((...args) => {
    argsRef.current = args
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      cancel()
      fnRef.current.apply(null, args)
    }, wait)
  }, [])

  useEffect(() => {
    // 如果配置了deps，即自动在deps变化的时候执行debounceFn
    if (deps) debounceFn(...argsRef.current)
    return cancel
  }, [...(deps || []), debounceFn])

  return [debounceFn, cancel]
}
