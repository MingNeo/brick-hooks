import produce, { Draft, PatchListener } from 'immer'
import { ReducerAction, useMemo, useReducer } from 'react'

export { Draft }

interface Action {
  type: string
  payload?: any
  [x: string]: any
}

interface Reducer<S> {
  (state: Draft<S>, payload?: Action | any): void
}

type Methods<S> = Record<string, Reducer<S>>
interface Dispatch {
  (actionType: string, payload?: any): void
  (action: Action): void
}

export type Actions = {
  dispatch: Dispatch
} & Exclude<Record<string, (payload?: any) => void>, 'dispatch'>

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
    return (state: S, action: ReducerAction<Reducer<any>>) =>
      produce(
        state,
        (draft: Draft<S>) => {
          const method = methods[action.type]
          if (method) {
            return method(draft, ...(action.args || []))
          }
        },
        Options.patchListener
      )
  }, [methods, Options.patchListener])

  const [state, dispatch] = useReducer(immerReducer, initialState, initializer)

  const actions: Actions = useMemo(() => {
    const dispatchMethod: Dispatch = (...args: any[]) => {
      dispatch(
        typeof args[0] === 'string'
          ? { type: args[0], args: args.slice(1) }
          : { type: args[0]?.type, args }
      )
    }
    return Object.keys(methods).reduce(
      (prev, type) => ({ ...prev, [type]: (...args: any[]) => dispatch({ type, args }) }),
      { dispatch: dispatchMethod }
    )

    // 因为使用immer，此处并不需要监听state变动，methods也应该是静态配置好的，不会动态增加
    // 但是actions下的reducer应当是纯函数，不然会造成引用的其他state不是最新值
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [state, actions]
}
