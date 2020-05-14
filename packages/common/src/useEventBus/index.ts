import { useRef, useEffect } from 'react'
import { EventSub, Subscription } from './eventBus'

const DEFAULT_ROOT_TYPE = 'DEFAULT_ROOT_TYPE'

export default function useEventSub<T = void>(type = DEFAULT_ROOT_TYPE) {
  const busRef = useRef<EventSub<T>>()
  if (!busRef.current) {
    busRef.current = new EventSub()
  }
  const subscriptionRef = useRef<Subscription<T>>()

  function publish(payload?: T) {
    busRef.current && busRef.current.publish(type, payload)
  }

  /**
   * 订阅当前事件的函数，回调函数传进来后就不会再改变，会造成参数不是最新，多数情况下可直接使用useSubscribe
   * @param callback
   */
  function subscribe(callback: Subscription<T>) {
    busRef.current && busRef.current.subscribe(type, callback)
    return function unSubscribe() {
      busRef.current && busRef.current.unSubscribe(type, callback)
    }
  }

  function useSubscribe(callback: Subscription<T>) {
    subscriptionRef.current = callback

    function subscription(val: T) {
      subscriptionRef.current && subscriptionRef.current(val)
    }

    useEffect(() => {
      const unSubscribe = subscribe(subscription)
      return () => {
        unSubscribe && unSubscribe()
      }
    }, [])
  }

  return { publish, useSubscribe, subscribe }
}

export { EventSub }
