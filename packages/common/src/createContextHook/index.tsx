// eslint-disable-next-line no-use-before-define
import React, { createContext as createReactContext, useContext as useReactContext, useEffect, useReducer } from 'react'
import { isObject } from '../utils'
import { EventBus } from '../useEventBus/eventBus'

interface UseCustomHook {
  (...args: any[]): any
}

interface WrapperStateFn {
  (): Record<string, any>
  __IS_GETTER_HOOK__: boolean
  type: 'object' | 'array'
}

type WrapperState = (memoObj: Record<string, any>) => WrapperStateFn

type Getter = (result: any, methods?: { wrapperState?: WrapperState }) => any

/**
 * 创建一个hooks的context
 */
export default function createContextHook(useCustomHook: UseCustomHook, getters: Record<string, Getter> = {}) {
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

    return <CustomHookContext.Provider value={{ hookResult }}>{children}</CustomHookContext.Provider>
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
  const getterResult = getter ? getter(current, { wrapperState }) : current

  if (typeof getterResult === 'function' && getterResult.__IS_GETTER_HOOK__) {
    const result = getterResult()
    if (!getterResult.type || prev === undefined) {
      return result
    }
    if (getterResult.type === 'object') {
      return checkArrayShouldUpdate({ result, prev }) ? result : prev
    } else if (getterResult.type === 'array') {
      return checkObjShouldUpdate({ result, prev }) ? result : prev
    }
  }

  return getterResult
}

function checkArrayShouldUpdate({ result, prev }) {
  return Array.from(new Set(Object.keys(result).concat(Object.keys(prev || {})))).some(
    (key) => prev[key] !== result[key]
  )
}

function checkObjShouldUpdate({ result, prev }) {
  return Array.from(new Set([...result].concat(prev))).some((value, index) => prev[index] !== result[index])
}

function wrapperState(result) {
  let getResult = () => result
  if (isObject(result)) {
    getResult = () => {
      return result || {}
    }
    ;(getResult as WrapperStateFn).type = 'object'
  } else if (Array.isArray(result)) {
    getResult = () => {
      return result || []
    }
    ;(getResult as WrapperStateFn).type = 'array'
  }

  ;(getResult as WrapperStateFn).__IS_GETTER_HOOK__ = true
  return getResult as WrapperStateFn
}
