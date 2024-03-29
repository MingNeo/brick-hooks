import { useRef, useMemo, useEffect, EffectCallback } from 'react'

/**
 * 一个防抖触发的useEffect
 */
export default function useDebounceEffect(callback: EffectCallback, wait = 100, deps = []) {
  const timerRef = useRef<number>()
  const waitRef = useRef<number>(wait)
  const callbackRef = useRef<EffectCallback>(callback)
  callbackRef.current = callback

  const destructorSetRef = useRef(new Set<any>())

  const { debounceCallback, cancel } = useMemo(() => {
    const cancel = () => {
      clearTimeout(timerRef.current)
      for (const destructor of destructorSetRef.current) {
        destructor && destructor()
        destructorSetRef.current.delete(destructor)
      }
    }

    const debounceCallback = () => {
      timerRef.current && clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        if (callbackRef.current) {
          const destructor = callbackRef.current.apply(null)
          destructor && destructorSetRef.current.add(destructor)
        }
        timerRef.current = null
      }, waitRef.current) as unknown as number
    }
    return {
      debounceCallback,
      cancel,
    }
  }, [])

  useEffect(() => {
    deps?.length && debounceCallback()
    return () => {
      cancel()
    }
  }, deps)
}
