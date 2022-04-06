import { useEffect, useState, useRef, useCallback, useMemo } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'
type OnLoaded = (status: string) => void

type Load = () => Promise<Element>

/**
 *  向页面中插入一段script
 */
export default function useScript(
  src: string,
  onLoaded?: OnLoaded,
  options?: {
    async?: boolean
    manual?: boolean
    removeOnDestroy?: boolean
  }
): { status: Status; load: Load; ref: any } {
  const { async = true, manual = false, removeOnDestroy = false } = options || {}
  const [status, setStatus] = useState<Status>(src ? 'loading' : 'idle')
  const methods = useRef<any>({ onLoaded })
  const scriptTagRef = useRef<any>()
  const promiseRef = useRef<any>()

  const handleLoaded = useCallback((event: Event) => {
    setStatus('success')
    methods.current.onLoaded && methods.current.onLoaded(event.type)
  }, [])

  const load = useMemo(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        if (!src) {
          setStatus('idle')
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
          const statusAttr: Status = scriptTagRef.current.getAttribute('data-status')
          setStatus(statusAttr)
          if (statusAttr === 'success') {
            resolve(scriptTagRef.current)
          }
        }
      })
    }

    return () => {
      if (!promiseRef.current) {
        promiseRef.current = loadScript()
      }
      return promiseRef.current
    }
  }, [async, handleLoaded, src])

  useEffect(() => {
    !manual && load()

    return () => {
      if (removeOnDestroy && scriptTagRef.current) {
        document.body.removeChild(scriptTagRef.current)
        scriptTagRef.current = null
      }
    }
  }, [src])

  return { status, load, ref: scriptTagRef }
}
