import { useMemo, useState } from 'react'

interface CounterOptions {
  min?: number
  max?: number
  step?: number
}

interface Methods {
  set: (nextValue: number | ((value: number) => number)) => void
  inc: (step?: number) => void
  dec: (step?: number) => void
  reset: () => void
}

/**
 * 数字步进
 */
export default function useCounter(initialValue: number = 0, options: CounterOptions = {}): [number, Methods] {
  const [counter, setCounter] = useState(initialValue)

  const methods = useMemo(() => {
    const { min = -Infinity, max = Infinity, step: defaultStep = 1 } = options
    const setValue = (nextValue: number | ((value: number) => number)) => {
      const disposeValue = (value: number) => (value < min ? min : value > max ? max : value)
      setCounter((value) => disposeValue(typeof nextValue === 'function' ? nextValue(value) : nextValue))
    }
    return {
      set: setValue,
      inc: (step: number = defaultStep) => setValue((value: number) => value + step),
      dec: (step: number = defaultStep) => setValue((value: number) => value - step),
      reset: () => setCounter(initialValue),
    }
  }, [initialValue, options])

  return [counter, methods]
}
