import { useMemo, useRef } from 'react'

type Deps = any[]

/**
 * 带有上次数据的useMemo
 */
export default function useMemoWithPrev(nextCreate: (prevDeps: Deps, prevValue: any) => any, deps: Deps) {
  const prevRef = useRef({ deps, value: undefined, nextCreate })
  prevRef.current.nextCreate = nextCreate

  return useMemo(() => {
    const current = prevRef.current.nextCreate(prevRef.current.deps, prevRef.current.value)
    prevRef.current.deps = deps
    prevRef.current.value = current

    return current
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
