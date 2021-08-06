import { useState, useCallback } from 'react'

interface CounterOptions {
  min?: number
  max?: number
  step?: number
}

export const arrayMethods = {
  inc: (state, step) => state + step,
  dec: (state, step) => state - step,
  reset: (state, initialValue) => initialValue
}

/**
 * 数字步进
 * @param {number} initialValue 默认值
 * @param {object} options 配置
 */
export default function useCounter(initialValue: number = 0, options: CounterOptions = {}) {
  const [counter, setCounter] = useState(initialValue)
  const { min = -Infinity, max = Infinity, step: defaultStep = 1 } = options

  const setValue = useCallback(
    (nextValue: number | ((value: number) => number)) => {
      const disposeValue = (value: number) => (value < min ? min : value > max ? max : value)
      setCounter(
        typeof nextValue === 'function'
          ? (value) => disposeValue(nextValue(value))
          : disposeValue(nextValue)
      )
    },
    [min, max]
  )

  const inc = (step: number = defaultStep) => setValue((value: number) => value + step)
  const dec = (step: number = defaultStep) => setValue((value: number) => value - step)
  const reset = useCallback(() => setCounter(initialValue), [initialValue])

  return [counter, { set: setValue, inc, dec, reset }] as [
    number,
    { set: typeof setValue; inc: typeof inc; dec: typeof dec; reset: typeof reset }
  ]
}
