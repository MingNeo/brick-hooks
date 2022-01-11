import { useRef } from 'react'

// 返回一个始终保持最新依赖的函数，且函数自身引用始终不变
export default function useCallbackRef<T>(callback: T) {
  const callbackRef = useRef<T>(callback)
  callbackRef.current = callback
  
  const immutableFnRef = useRef((...args: any[]) => {
    callbackRef.current && (callbackRef.current as any)(...args)
  })

  return immutableFnRef.current as unknown as T
}
