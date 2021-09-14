import { useEffect, useRef } from 'react'

type Callback = () => {}

/**
 * 方便使用setTimeout的hook
 */
export default function useTimeout<S extends Callback>(callback: S, time = 300) {
  const callbackFn = useRef<S>()
  callbackFn.current = callback

  useEffect(() => {
    const timer = setTimeout(() => {
      callbackFn.current()
    }, time)
    
    return () => {
      clearTimeout(timer)
    }
  }, [time])
}
