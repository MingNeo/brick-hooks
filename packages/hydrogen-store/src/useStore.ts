import { useMemo, useEffect, useReducer, useRef } from 'react'
import { ToolMethods, Methods, SetStore, SetStoreAction } from './types'

/**
 * 获取store state和set方法的hook，返回state和setState用法同React.useState。
 * setState增加了一个merge参数，设为true时使用类似类组件的this.setState的自动合并方式
 * @param storeContext
 * @param moduleName
 * @param autoMerge 是否在执行set方法更新数据时使用自动浅合并而非替换,如果数据格式不是object，此设置无效
 * @returns {array} [state, setState, { dispatch }] dispatch方法可以触发注册的reducer
 */
export default function useStore<S = Record<string, any> | any>(
  storeContext: any,
  moduleName: string = '',
  autoMerge: boolean = true,
  doUpdate: boolean = true
): [S, SetStore<SetStoreAction<S>>, ToolMethods<S>] {
  if (!moduleName) throw new Error('moduleName is required!')

  const storeContextRef = useRef(storeContext)
  // 因为没有使用useState或者useContext，因此需要做一个强制刷新
  const [forceUpdateCount, forceUpdate] = useReducer((n: number) => n + 1, 0)

  if (!storeContextRef.current._modules.has(moduleName)) {
    storeContextRef.current._modules.add(moduleName)
  }

  // storeState更新的时候触发强制渲染，每个应用当前hooks的组件都触发一次更新
  useEffect(() => {
    const currentStoreContext = storeContextRef.current
    const eventName = `storeChange.${moduleName}`
    const handleStateChange = () => doUpdate && forceUpdate()
    currentStoreContext?.subscribe(eventName, handleStateChange)

    return () => {
      currentStoreContext?.unSubscribe(eventName, handleStateChange)
    }
  }, [moduleName, doUpdate])

  const methods: Methods<S> = useMemo(() => {
    /**
     * 用法同React.useState的setState, 传值或者使用函数
     * @param nextValue
     * @param merge 控制具体的合并或覆盖
     */
    const setStore = (nextState: S, merge: boolean = autoMerge) => {
      storeContextRef.current?.setModuleState(moduleName, nextState, merge)
    }

    const dispatch = (actionName: string, payload: any) => {
      const actionSplitResult = actionName.split('/')
      // 当前不支持‘a/b/c'格式action type
      const [moduleType, actionType] = actionSplitResult.length > 1 ? actionSplitResult : [moduleName, actionName]
      storeContextRef.current?.dispatchModuleAction(moduleType, actionType, payload)
    }

    const boundMethods = Object.keys(storeContextRef.current?._reducers?.[moduleName] || [])?.reduce((prev, curr) => {
      return { ...prev, [curr]: (payload: any) => dispatch(curr, payload) }
    }, {})

    return { setStore, dispatch, boundMethods }
  }, [autoMerge, moduleName])

  return useMemo(() => {
    const moduleState: S = storeContextRef.current._state[moduleName]
    const { setStore, dispatch, boundMethods } = methods

    return [moduleState, setStore, { dispatch, ...boundMethods } as ToolMethods<S>]
    // 每次强制刷新的时候重续获取存储的全局数据
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods, forceUpdateCount])
}
