import { useEffect, useRef, useState, useMemo } from 'react'

type Callback = (...args: any[]) => any
interface Options {
  autoRun?: boolean
}

/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 * @returns  stopInterval
 */
export default function useInterval(
  callback: Callback,
  time = 300,
  { autoRun = true }: Options = {}
) {
  const intervalFn = useRef<Callback>()
  intervalFn.current = callback
  const intervalId = useRef<number>(null)
  const [isRunning, setIsRunning] = useState(false)

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
      },
    }
  }, [time])

  useEffect(() => {
    autoRun && start()
    return () => {
      stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return {
    isRunning,
    start,
    stop,
  }
}
