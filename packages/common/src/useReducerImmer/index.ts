import produce from 'immer'
import { Draft } from 'immer/dist/immer.d'
import { useReducer, Dispatch } from 'react'

type Reducer<S, A> = (state: Draft<S>, action: A) => void

/**
 * 使用immer的reducer
 * @param reducer immer形式组织的reducer
 * @param initialState 同React.Reducer的initialState
 * @param initializer 同React.Reducer的initializer
 */
export default function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initialState: S,
  initializer?: (initial: any) => S
): [S, Dispatch<A>] {
  // @ts-ignore
  return useReducer(() => produce(reducer), initialState as any, initializer)
}
