import { useRef, useCallback } from 'react'
import useFocusEffect from '../useFocusEffect'

export default function usePageFocus(callback: any, { navigation }: { navigation?: any } = {}) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  return useFocusEffect(
    useCallback((...args: any[]) => {
      callbackRef.current(...args)
    }, []),
    navigation
  )
}
