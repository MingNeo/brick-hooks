// eslint-disable-next-line no-use-before-define
import React, {
  createContext as createReactContext,
  useContext as useReactContext,
  useEffect,
  useReducer,
} from 'react'
import { EventBus } from '../useEventBus/eventBus'

interface UseCustomHook {
  (...args: any[]): any
}

interface memoResultFn {
  (): Record<string, any>
  __IS_GETTER_HOOK__: boolean
  type: 'object' | 'array'
}

type MemoObject = (memoObj: Record<string, any>) => memoResultFn
type MemoArray = (memoArr: any[]) => memoResultFn

type Getter = (result: any, methods?: { memoObject?: MemoObject; memoArray?: MemoArray }) => any

/**
 * 创建一个hooks的context
 */
export default function createHookContext(
  useCustomHook: UseCustomHook,
  getters: Record<string, Getter> = {}
) {
  const initialState = {}
  const CustomHookContext = createReactContext<any>(initialState)
  const eventBus = new EventBus()
  // 创建一个全局变量存储实时result，从创建起引用就不会变化
  const globalResult: any = {}

  const Provider = (props: any) => {
    const { children, ...restProps } = props || {}
    const hookResult = useCustomHook({ ...restProps })
    globalResult.hookResult = hookResult

    useEffect(() => {
      eventBus.publish('__hookContext__:getterHookChanged')
    }, [hookResult])

    useEffect(() => {
      // 卸载时将globalResult清空掉，防止持续占内存
      return () => {
        delete globalResult.hookResult
      }
    }, [])

    return (
      <CustomHookContext.Provider value={{ hookResult }}>{children}</CustomHookContext.Provider>
    )
  }

  const useHook = () => {
    const { hookResult } = useReactContext(CustomHookContext)
    return hookResult
  }

  const resultGetters = Object.entries(getters).reduce((prev, [name, getter]) => {
    const useGetterHook = () => {
      const [result, dispatch] = useReducer(
        (prev: any, current: any) => getNewGetterResult({ current, prev, getter }),
        getNewGetterResult({ current: globalResult.hookResult, prev, getter })
      )

      useEffect(() => {
        eventBus.subscribe(`__hookContext__:getterHookChanged`, () => {
          dispatch(globalResult.hookResult)
        })
      }, [])
      return result
    }
    return { ...prev, [name]: useGetterHook }
  }, {})

  return { Provider, ...resultGetters, useHook }
}

function getNewGetterResult({ current, getter, prev }: any = {}) {
  const getterResult = getter ? getter(current, { memoObject, memoArray }) : current

  if (typeof getterResult === 'function' && getterResult.__IS_GETTER_HOOK__) {
    const result = getterResult()
    if (prev === undefined) {
      return result
    }
    let shoudUpdate = false
    if (getterResult.type === 'object') {
      shoudUpdate = Array.from(new Set(Object.keys(result).concat(Object.keys(prev || {})))).some(
        (key) => prev[key] !== result[key]
      )
    } else if (getterResult.type === 'array') {
      shoudUpdate = Array.from(new Set([...result].concat(prev))).some(
        (value, index) => prev[index] !== result[index]
      )
    }

    return shoudUpdate ? result : prev
  }

  return getterResult
}

function memoObject(obj = {}) {
  const getResult = () => {
    return obj
  }
  getResult.__IS_GETTER_HOOK__ = true
  getResult.type = 'object'
  return getResult
}

function memoArray(arr = []) {
  const getResult = () => {
    return [...arr]
  }
  getResult.__IS_GETTER_HOOK__ = true
  getResult.type = 'array'
  return getResult
}
