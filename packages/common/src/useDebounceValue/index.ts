import { useEffect, useRef, useState } from 'react'

/**
 * 防抖hooks
 * @param value
 * @param wait
 */
export default function useDebounceValue(value: any, wait = 100) {
  const timer = useRef<any>()
  const [state, setstate] = useState(value)

  useEffect(() => {
    timer.current && clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setstate(value)
    }, wait)

    return () => {
      clearTimeout(timer.current)
    }
  }, [value, wait])

  return state
}
