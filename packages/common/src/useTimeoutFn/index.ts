import { useRef, useEffect, useCallback, useState } from 'react'

type Callback = (...args: any[]) => any

/**
 * 方便使用setTimeout函数的hook
 */
export default function useTimeoutFn(
  callback: Callback,
  time = 300
): [
  Callback,
  {
    isPending: boolean
    stop: (timer: any) => void
  }
] {
  const timerRef = useRef<any>()
  const [isPending, setIsPending] = useState(false)
  const fnRef = useRef<Callback>(callback)
  fnRef.current = callback

  const stop = useCallback((timer) => {
    clearTimeout(timer)
  }, [])

  const start = useCallback((...args) => {
    setIsPending(true)
    return new Promise((resolve) => {
      timerRef.current = setTimeout(() => {
        setIsPending(false)
        const callCb = async () => {
          return await fnRef.current(...args)
        }
        callCb().then((result) => resolve(result))
      }, time)
    })
  }, [])

  useEffect(() => {
    return () => {
      timerRef.current && stop(timerRef.current)
    }
  }, [stop])

  return [start, { isPending, stop }]
}
