import { useEffect, useRef } from 'react'

type Callback = () => {}

/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 */
export default function useInterval<C extends Callback>(callback: C, time = 300) {
  const intervalFn = useRef<C>()

  useEffect(() => {
    intervalFn.current = callback
  }, [callback])

  useEffect(() => {
    const timer = setInterval(() => {
      intervalFn.current()
    }, time)

    return () => {
      clearInterval(timer)
    }
  }, [time])
}
