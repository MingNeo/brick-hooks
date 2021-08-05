import { useRef, useEffect, createContext, useContext } from 'react'
import { EventBus, EventType, Subscription } from './eventBus'

function subscribe<T>(bus: EventBus<T>, type: EventType, callback: Subscription<T>) {
  return bus?.subscribe(type, callback)
}

function useSubscribe<T>(bus: EventBus<T>, type: EventType, ...args: [string, Subscription<T>] | [Subscription<T>]) {
  const [eventName, callback] = type
    ? [type, ...(args as [Subscription<T>])]
    : (args as [string, Subscription<T>])
  const subscriptionRef = useRef<Subscription<T>>(callback)
  subscriptionRef.current = callback

  function subscription(val: T) {
    subscriptionRef.current && subscriptionRef.current(val)
  }

  useEffect(() => {
    const unSubscribe = subscribe<T>(bus, eventName, subscription)
    return () => {
      unSubscribe && unSubscribe()
    }
  }, [])
}

function useEventBus<T = void>(bus: EventBus<T>, type?: EventType) {
  return {
    publish: type ? bus.publish.bind(null, type) : bus.publish.bind(null),
    useSubscribe: type ? <T>useSubscribe.bind(null, bus, type) : <T>useSubscribe.bind(null, bus),
    // 订阅当前事件的函数，回调函数传进来后就不会再改变，会造成参数不是最新，一般情况下直接使用useSubscribe
    subscribe: type ? subscribe.bind(null, bus, type) : subscribe.bind(null, bus),
  }
}

/**
 * 创建一个独立的eventBus实例
 * @returns
 */
const createEventBus = () => {
  const bus = new EventBus()

  return {
    publish: bus?.publish.bind(null),
    useSubscribe: useSubscribe.bind(null, bus),
    useEventBus: useEventBus.bind(null, bus),
  }
}

/**
 * 可以生成一个用于上下文的EventBus及相关hooks
 */
export function createContextEventBus() {
  const contextState = createEventBus()
  const eventBusContext = createContext(contextState)

  const useContextEventBus = () => {
    return useContext(eventBusContext)
  }

  (eventBusContext as any).useEventBus = useContextEventBus

  return eventBusContext
}

const {
  publish,
  useEventBus: useEventBusWithoutContext,
  useSubscribe: useSubscribeWithoutContext,
} = createEventBus()

export {
  useEventBusWithoutContext as default,
  EventBus,
  publish,
  createEventBus,
  useSubscribeWithoutContext as useSubscribe,
}
