import { useState } from 'react'
import useDebounceFn from '../useDebounceFn'

/**
 * 与React.useState用法一致，对数据进行自动防抖处理
 * @param initialState
 * @param wait
 */
export default function useDebounceState<S>(initialState: S | (() => S), wait = 100) {
  const [state, setState] = useState(initialState)
  const [debounceSetState] = useDebounceFn(setState, wait)

  return [state, debounceSetState] as [S, typeof setState]
}
