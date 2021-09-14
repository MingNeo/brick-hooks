import { useEffect, useReducer, useRef, EffectCallback } from 'react'

/**
 * 同useEffect，不同的是，不通过deps进行触发, 而通过返回一个更新函数触发effect callback
 * @param effect 
 * @returns 
 */
export default function useEffectMaunal(effect: EffectCallback) {
  const [count, callEffect] = useReducer((prev) => prev + 1, 0)
  const effectRef = useRef(effect)
  effectRef.current = effect

  useEffect(() => {
    if(count > 0) {
      return effectRef.current()
    }
  }, [count])

  return callEffect
}