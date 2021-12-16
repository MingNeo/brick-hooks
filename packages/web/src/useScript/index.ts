import { useEffect, useState, useRef, useCallback } from 'react'

type Status = '' | 'loading' | 'success' | 'error'
type OnLoaded = (status: string) => void

interface Options {
  async?: boolean
}

/**
 *  向页面中插入一段script
 */
export default function useScript(
  src: string,
  onLoaded: OnLoaded,
  options?: Options
): { status: Status; load: any; ref: any; } {
  const { async = true } = options || {}
  const [status, setStatus] = useState<Status>(src ? 'loading' : '')
  const methods = useRef<any>({ onLoaded })
  const scriptTagRef = useRef<any>()
  const promiseRef = useRef<any>()

  const handleLoaded = useCallback((event: Event) => {
    setStatus('success')
    methods.current.onLoaded && methods.current.onLoaded(event.type)
  }, [])

  const loadScript = () => {
    return new Promise((resolve, reject) => {
      if (!src) {
        setStatus('')
        return
      }

      if (scriptTagRef.current && src !== scriptTagRef.current.src) {
        document.body.removeChild(scriptTagRef.current)
        scriptTagRef.current = null
      }

      scriptTagRef.current = scriptTagRef.current || document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)

      if (!scriptTagRef.current) {
        scriptTagRef.current = document.createElement('script')
        scriptTagRef.current.src = src
        scriptTagRef.current.async = async
        scriptTagRef.current.setAttribute('data-status', 'loading')
        scriptTagRef.current.addEventListener('load', (event: Event) => {
          if (event.type === 'load') {
            handleLoaded(event)
            resolve(event)
          } else if (event.type === 'error') {
            setStatus('error')
          }
        })
        scriptTagRef.current.addEventListener('error', reject)

        document.body.appendChild(scriptTagRef.current)
      } else {
        const status: Status = scriptTagRef.current.getAttribute('data-status')
        setStatus(status)
        if (status === 'success') {
          resolve(scriptTagRef.current)
        }
      }
    })
  }

  const load = () => {
    if (!promiseRef.current) {
      promiseRef.current = loadScript()
    }
    return promiseRef.current
  }

  useEffect(() => {
    load()

    return () => {
      if (scriptTagRef.current) {
        document.body.removeChild(scriptTagRef.current)
        scriptTagRef.current = null
      }
    }
  }, [src, handleLoaded])

  return { status, load, ref: scriptTagRef }
}
