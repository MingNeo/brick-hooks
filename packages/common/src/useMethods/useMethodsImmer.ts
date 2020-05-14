import produce, { PatchListener } from 'immer'
import { useMemo, useReducer } from 'react'

type Reducer<S> = (state: S, ...payload: any[]) => void
type Methods<S> = (state: S) => Record<string, Reducer<S>>

export default function useMethodsImmer<S>(
  methods: Methods<S>,
  initialState: any,
  initializer: any = undefined,
  Options: any = {}
) {
  const immerReducer = useMemo(() => {
    return (state: S, action: any) =>
      produce(
        state,
        (draft: any) => methods(draft)[action.type](draft, ...action.payload),
        Options.patchListener as PatchListener | undefined
      )
  }, [methods, Options.patchListener])

  const [draftState, dispatch] = useReducer(immerReducer, initialState, initializer)

  const actions = useMemo(() => {
    const actionTypes: string[] = Object.keys(methods(draftState))
    return actionTypes.reduce((prev, type) => {
      prev[type] = (...payload: any) => dispatch({ type, payload })
      return prev
    }, {} as Record<string, any>)

    // 因为使用immer，此处并不需要监听state变动，methods也应该是静态配置好的，不会动态增加
    // 但是actions下的reducer应当是纯函数，不然会造成引用的其他state不是最新值
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [draftState, actions] as [typeof draftState, typeof actions]
}
