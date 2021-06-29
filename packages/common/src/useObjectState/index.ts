import { useCallback } from 'react'
import useMethods from '../useMethods'

type State = Record<string, any>

const defaultMethods = {
  _set: (prevState: State, payload: State) =>
    typeof payload === 'function' ? payload(prevState) : payload,
  _setMerge: (prevState: State = {}, payload: State) => ({
    ...(prevState || {}),
    ...(typeof payload === 'function' ? payload(prevState) : payload),
  }),
}

/**
 * 面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState
 * @param initialState 约定必须是一个object
 * @param methods 自定义reducers方法
 * @returns [state, setState, stateMethods]
 */
export default function useObjectState<S extends State>(
  initialState: S,
  methods: Record<string, (...args: any[]) => S> = {}
) {
  const [state, stateMethods] = useMethods(
    { ...methods, ...defaultMethods },
    initialState || {}
  )

  const setState = useCallback(
    (nextState, merge: boolean = true) =>
      merge ? stateMethods._setMerge(nextState) : stateMethods._set(nextState),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return [state, setState, stateMethods] as [S, typeof setState, typeof stateMethods]
}
