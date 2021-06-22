import produce, { Draft } from 'immer'
import { useMemo, useReducer } from 'react'

type Reducer<S, A> = (state: Draft<S>, action: A) => void

/**
 * 使用immer的reducer
 * @param reducer immer形式组织的reducer
 * @param initialState 同React.Reducer的initialState
 * @param initializer 同React.Reducer的initializer
 * @returns
 */
export default function useReducerImmer<S, A>(
  reducer: Reducer<S, A>,
  initialState: S,
  initializer?: (initial: any) => S
) {
  const immerReducer = useMemo(() => produce(reducer), [reducer])
  const [state, dispatch] = useReducer(immerReducer, initialState as any, initializer as any)
  return [state, dispatch] as [S, typeof dispatch]
}
