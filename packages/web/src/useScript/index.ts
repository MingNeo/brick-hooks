import { useEffect, useState, useRef } from 'react'

type Status = '' | 'loading' | 'success' | 'error'
type OnStatusChange = (status: string) => void

/**
 *  向页面中插入一段script
 */
export default function useScript(
  src: string,
  onStatusChange: OnStatusChange
): { status: Status; whenLoaded: (cb: any) => void } {
  const [status, setStatus] = useState<Status>(src ? 'loading' : '')
  const methods = useRef<any>({ onStatusChange })

  useEffect(() => {
    if (!src) {
      setStatus('')
      return
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    let changeStatusFromEvent = (event: Event) => {
      setStatus(event.type === 'load' ? 'success' : 'error')
      methods.current.onStatusChange && methods.current.onStatusChange(event.type)

      // whenLoaded 只执行一次
      if (
        event.type === 'load' &&
        methods.current.whenLoaded &&
        !methods.current.whenLoaded.fired
      ) {
        methods.current.whenLoaded.fired = true
        methods.current.whenLoaded()
      }
    }

    if (!script) {
      script = document.createElement('script')
      script.src = src
      script.async = true
      script.setAttribute('data-status', 'loading')
      document.body.appendChild(script)

      const originOnStatusChange = changeStatusFromEvent
      changeStatusFromEvent = (event: Event) => {
        originOnStatusChange(event)
        script.setAttribute('data-status', event.type === 'load' ? 'success' : 'error')
      }
    } else {
      setStatus(script.getAttribute('data-status') as Status)
    }

    script.addEventListener('load', changeStatusFromEvent)
    script.addEventListener('error', changeStatusFromEvent)

    return () => {
      if (script) {
        script.removeEventListener('load', changeStatusFromEvent)
        script.removeEventListener('error', changeStatusFromEvent)
      }
    }
  }, [src])

  const whenLoaded = (cb: any) => {
    methods.current.whenLoaded = function () {
      cb()
    }
  }

  return { status, whenLoaded }
}
