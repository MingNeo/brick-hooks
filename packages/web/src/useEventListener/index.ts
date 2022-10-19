import { useEffect, useRef } from 'react'
import { isBrowser } from '../utils'

type Handler = (...args: any[]) => void
interface Options {
  capture?: boolean
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
  dom?: Element
}

/**
 * 使用事件的hook
 */
function useEventListener(eventName: string, handler: Handler, { dom, ...options }: Options = {}) {
  const ref = useRef<any>()
  const handlerRef = useRef<Handler>(handler)
  handlerRef.current = handler

  const optionsRef = useRef<Options>(options)
  optionsRef.current = options

  useEffect(() => {
    if (isBrowser) {
      const element = dom || ref.current || window
      const eventListener = function (event: Event) {
        handlerRef.current && handlerRef.current.call(this, event)
      }
      element.addEventListener(eventName, eventListener, optionsRef.current)

      return () => {
        element.removeEventListener(eventName, eventListener, optionsRef.current)
      }
    }
  }, [eventName, dom])

  return ref
}

export default useEventListener
