import { useEffect, useState } from 'react'

// 向页面中插入一段script
export default function useScript(src: string) {
  const [status, setStatus] = useState(src ? 'loading' : '')

  useEffect(() => {
    if (!src) {
      setStatus('')
      return
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = src
      script.async = true
      script.setAttribute('data-status', 'loading')
      document.body.appendChild(script)
      const setAttributeFromEvent = (event: Event) => {
        ;(script as HTMLScriptElement).setAttribute(
          'data-status',
          event.type === 'load' ? 'success' : 'error'
        )
      }
      script.addEventListener('load', setAttributeFromEvent)
      script.addEventListener('error', setAttributeFromEvent)
    } else {
      setStatus(script.getAttribute('data-status') as string)
    }
    const setStateFromEvent = (event: Event) => {
      setStatus(event.type === 'load' ? 'success' : 'error')
    }
    script.addEventListener('load', setStateFromEvent)
    script.addEventListener('error', setStateFromEvent)

    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent)
        script.removeEventListener('error', setStateFromEvent)
      }
    }
  }, [src])
  
  return status
}
