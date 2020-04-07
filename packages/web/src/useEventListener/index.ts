import { useEffect, useRef } from 'react'

/**
 * 使用事件的hook
 * @param eventName 
 * @param handler 
 * @param options 
 * @returns 
 */
function useEventListener(
  eventName: string,
  handler: Function,
  options: { capture: any; dom: Element }
) {
  const ref = useRef()
  const handlerRef = useRef<Function>()

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const { capture, dom } = options
    const element = dom || ref.current || window
    const eventListener = (event: Event) => handlerRef.current && handlerRef.current(event)
    element.addEventListener(eventName, eventListener, capture)

    return () => {
      element.removeEventListener(eventName, eventListener, capture)
    }
  }, [eventName, options])
  return ref
}

export default useEventListener
