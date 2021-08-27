import produce, { Draft, PatchListener } from 'immer'
import { ReducerAction, useMemo, useReducer } from 'react'

export { Draft }

type Reducer<S> = (state: Draft<S>, payload: any) => void
type Methods<S> = Record<string, Reducer<S>>
type Actions = Record<string, (payload?: any) => void>

interface Options {
  patchListener?: PatchListener
}

export default function useMethodsImmer<S>(
  methods: Methods<S>,
  initialState: any,
  initializer: any = undefined,
  Options: Options = {}
): [S, Actions] {
  const immerReducer = useMemo(() => {
    return (state: S, action: ReducerAction<Reducer<any>>) => {
      const draftState = produce(
        state,
        (draft: Draft<S>) => {
          const method = methods[action.type]
          if (method) {
            const result = method(draft, action.payload)
            return result
          }
        },
        Options.patchListener
      )
      return draftState
    }
  }, [methods, Options.patchListener])

  const [draftState, dispatch] = useReducer(immerReducer, initialState, initializer)

  const actions: Actions = useMemo(() => {
    const actionTypes: string[] = Object.keys(methods)
    return actionTypes.reduce((prev, type) => {
      prev[type] = (payload: any) => dispatch({ type, payload })
      return prev
    }, {})

    // 因为使用immer，此处并不需要监听state变动，methods也应该是静态配置好的，不会动态增加
    // 但是actions下的reducer应当是纯函数，不然会造成引用的其他state不是最新值
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [draftState, actions]
}
