import { useRef, useEffect } from 'react'

/**
 * 获取上一次的值
 * @param value
 * @param equalsMode 是否仅变更时更新值，默认为true，即只有每次值变化时更新上一次的值。equalsMode = false 则每次函数组件render都返回上次render时的值
 */
export default function usePrevious<S>(value: S, equalsMode: boolean = true) {
  const prevListRef = useRef<S[]>([])
  useEffect(() => {
    if (!equalsMode) {
      prevListRef.current[0] = value
    }
  })

  const last = prevListRef.current[prevListRef.current.length - 1]

  useEffect(() => {
    if (equalsMode) {
      if (!prevListRef.current.length) {
        prevListRef.current = [value]
      } else if (value !== last) {
        prevListRef.current = [last, value]
      }
    }
  }, [value, equalsMode, last])

  if (equalsMode) {
    const lastValue = prevListRef.current[prevListRef.current.length - 1]
    return value === lastValue ? prevListRef.current[prevListRef.current.length - 2] : lastValue
  }

  return prevListRef.current[0]
}
