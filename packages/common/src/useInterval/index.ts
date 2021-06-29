import { useEffect, useRef, useState, useMemo } from 'react'

type Callback = (...args: any[]) => any

/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 * @returns  stopInterval 
 */
export default function useInterval(callback: Callback, time = 300) {
  const intervalFn = useRef<Callback>()
  const intervalId = useRef<number>(null)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    intervalFn.current = callback
  }, [callback])

  const { start, stop } = useMemo(() => {
    return {
      start: () => {
        intervalId.current = setInterval(() => {
          intervalFn.current()
          setIsRunning(true)
        }, time)
      },
      stop: () => {
        clearInterval(intervalId.current)
        intervalId.current = null
        setIsRunning(false)
      }
    }
  }, [time])

  useEffect(() => {
    start()
    return () => {
      stop()
    }
  }, [time])
  
  return {
    isRunning,
    start,
    stop
  } 
}
