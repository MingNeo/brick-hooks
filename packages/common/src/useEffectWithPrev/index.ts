import { useEffect, useRef } from 'react'

type Deps = any[]

/**
 * 带有上次数据的useEffect
 */
export default function useEffectWithPrev(effect: (prevDeps: Deps) => void | (() => void), deps: Deps) {
  const prevRef = useRef(deps)
  useEffect(() => {
    if (!deps) {
      return effect(prevRef.current)
    }

    const prev = prevRef.current
    prevRef.current = deps
    if (deps.length !== prev.length || deps.some((dep, index) => dep !== prev[index])) {
      return effect(prev)
    }
  })
}
