import { useRef, useEffect, createContext, useContext } from 'react'
import useCallbackRef from '../useCallbackRef'
import { EventBus, EventType, Subscription } from './eventBus'

interface Publish {
  (type: EventType, payload?: any): void
  (payload?: any): void
}

interface SubscribeOptions {
  once?: boolean
}

interface UseSubscribe<T = any> {
  (type: EventType, callback: Subscription<T>, options?: SubscribeOptions): void
}

interface Subscribe {
  <T>(type: EventType, callback: Subscription<T>, options?: SubscribeOptions): any
  <T>(callback: Subscription<T>, options?: SubscribeOptions): any
}

type UseEventBus = <T = any>(
  type?: EventType
) => {
  publish: Publish
  useSubscribe: T
  subscribe: any
}

interface EventBusContext<T>
  extends React.Context<{
    publish: Publish
    useSubscribe: UseSubscribe<T>
    subscribe: Subscribe
    useEventBus: UseEventBus
  }> {
  useEventBus?: () => {
    publish: Publish
    useSubscribe: UseSubscribe<T>
    subscribe: Subscribe
    useEventBus: UseEventBus
  }
}

/**
 * 订阅当前事件的函数，回调函数传进来后就不会再改变，如果在react组件中中使用有可能会造成函数依赖值不是最新
 * 一般情况下hooks/组件中直接使用useSubscribe，外部js中订阅使用subscribe
 */
function subscribeOrigin<T>(
  bus: EventBus<T>,
  type: EventType,
  callback: Subscription<T>,
  options: SubscribeOptions = {}
) {
  return options.once ? bus?.subscribeOnce(type, callback) : bus?.subscribe(type, callback)
}

function useSubscribeOrigin<T>(
  bus: EventBus,
  eventName: EventType,
  callback: Subscription<T>,
  options: SubscribeOptions = {}
) {
  const subscription = useCallbackRef<Subscription<T>>(callback)

  useEffect(() => {
    const unSubscribe = subscribeOrigin<T>(bus, eventName, subscription, options)
    return () => {
      unSubscribe && unSubscribe()
    }
  }, [])
}

function useEventBus(
  bus: EventBus,
  type?: EventType
): {
  publish: Publish
  useSubscribe: UseSubscribe
  subscribe: Subscribe
} {
  return {
    publish: type ? bus.publish.bind(null, type) : bus.publish.bind(null),
    useSubscribe: type ? useSubscribeOrigin.bind(null, bus, type) : useSubscribeOrigin.bind(null, bus),
    subscribe: type ? subscribeOrigin.bind(null, bus, type) : subscribeOrigin.bind(null, bus),
  }
}

/**
 * 创建一个独立的eventBus实例
 * @returns
 */
export function createEventBus() {
  const bus = new EventBus()

  return {
    publish: bus?.publish.bind(null) as Publish,
    useSubscribe: useSubscribeOrigin.bind(null, bus) as UseSubscribe,
    subscribe: subscribeOrigin.bind(null, bus) as Subscribe,
    useEventBus: useEventBus.bind(null, bus) as UseEventBus,
  }
}

/**
 * 可以生成一个用于上下文的EventBus及相关hooks
 */
export function createContextEventBus<T = any>() {
  const contextState = createEventBus()
  const eventBusContext: EventBusContext<T> = createContext(contextState)

  const useContextEventBus = () => {
    return useContext(eventBusContext)
  }

  eventBusContext.useEventBus = useContextEventBus

  return eventBusContext
}

const { publish, useEventBus: useEventBusWithoutContext, useSubscribe: useSubscribeWithoutContext } = createEventBus()

export { useEventBusWithoutContext as default, EventBus, publish, useSubscribeWithoutContext as useSubscribe }
