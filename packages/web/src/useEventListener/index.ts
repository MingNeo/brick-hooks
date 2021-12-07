import { useEffect, useRef } from 'react'

type Handler = (...args: any[]) => any
interface Options {
  capture?: any
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
  dom?: Element
}

/**
 * 使用事件的hook
 */
function useEventListener(eventName: string, handler: Handler, { dom, ...options }: Options = {}) {
  const ref = useRef()
  const handlerRef = useRef<Handler>(handler)
  handlerRef.current = handler

  const optionsRef = useRef<Options>(options)
  optionsRef.current = options

  useEffect(() => {
    const element = dom || ref.current || window
    const eventListener = function (event: Event) {
      handlerRef.current && handlerRef.current.call(this, event)
    }
    element.addEventListener(eventName, eventListener, optionsRef.current)

    return () => {
      element.removeEventListener(eventName, eventListener, optionsRef.current)
    }
  }, [eventName, dom])

  return ref
}

export default useEventListener
