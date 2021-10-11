import { useEffect, useRef } from 'react'

type Handler = (...args: any[]) => any
/**
 * 使用事件的hook
 */
function useEventListener(
  eventName: string,
  handler: Handler,
  options: { capture?: any; dom?: Element }
) {
  const ref = useRef()
  const handlerRef = useRef<Handler>(handler)
  handlerRef.current = handler

  useEffect(() => {
    const { capture, dom } = options
    const element = dom || ref.current || window
    const eventListener = function (event: Event) {
      handlerRef.current && handlerRef.current.call(this, event)
    }
    element.addEventListener(eventName, eventListener, capture)

    return () => {
      element.removeEventListener(eventName, eventListener, capture)
    }
  }, [eventName, options])
  return ref
}

export default useEventListener
