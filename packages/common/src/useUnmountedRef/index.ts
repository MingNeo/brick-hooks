import { useRef, useEffect } from 'react'

export default function useUnmountedRef() {
  const unmountedRef = useRef(false)
  useEffect(function () {
    unmountedRef.current = false
    return function () {
      unmountedRef.current = true
    }
  }, [])
  return unmountedRef
}
