import { useEffect, useState } from 'react'

type Status = '' | 'loading' | 'success' | 'error'

/**
 *  向页面中插入一段script
*/ 
export default function useScript(src: string): Status {
  const [status, setStatus] = useState<Status>(src ? 'loading' : '')

  useEffect(() => {
    if (!src) {
      setStatus('')
      return
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    let onStatusChange = (event: Event) => {
      setStatus(event.type === 'load' ? 'success' : 'error')
    }
    if (!script) {
      script = document.createElement('script')
      script.src = src
      script.async = true
      script.setAttribute('data-status', 'loading')
      document.body.appendChild(script)
      onStatusChange = (event: Event) => {
        setStatus(event.type === 'load' ? 'success' : 'error')
        script.setAttribute('data-status', event.type === 'load' ? 'success' : 'error')
      }
    } else {
      setStatus(script.getAttribute('data-status') as Status)
    }

    script.addEventListener('load', onStatusChange)
    script.addEventListener('error', onStatusChange)

    return () => {
      if (script) {
        script.removeEventListener('load', onStatusChange)
        script.removeEventListener('error', onStatusChange)
      }
    }
  }, [src])

  return status
}
