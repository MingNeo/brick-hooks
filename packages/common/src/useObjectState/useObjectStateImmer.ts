import { createDraft } from 'immer'
import { useCallback } from 'react'
import useMethodsImmer from '../useMethods/useMethodsImmer'

type State = Record<string, any>

const defaultMethods = {
  _set: (draftState, payload: State = {}) => {
    if (typeof payload === 'function') {
      payload(draftState)
    } else {
      // 返回一个新的值
      return { ...payload }
    }
  },
  _setMerge: (draftState, payload: State) => {
    if (typeof payload === 'function') {
      payload(draftState)
    } else {
      Object.entries(payload).forEach(([key, value]) => {
        draftState[key] = value
      })
    }
  }
}

/**
 * 面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState
 * @param initialState 约定必须是一个object
 * @param methods 自定义reducers方法
 * @returns [state, setState, stateMethods]
 */
export default function useObjectStateImmer<S extends State>(
  initialState: S,
  methods: Record<string, (...args: any[]) => S>
) {
  const [state, stateMethods] = useMethodsImmer<S>(
    { ...methods, ...defaultMethods },
    initialState || {}
  )

  const setState = useCallback(
    (nextState, merge: boolean = false) =>
    merge ? stateMethods._setMerge(nextState) : stateMethods._set(nextState),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return [state, setState, stateMethods] as [S, typeof setState, typeof stateMethods]
}
