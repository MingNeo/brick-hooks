import { useRef } from 'react'

export default function useRenderCount() {
  const renderCountRef = useRef(0)
  return ++renderCountRef.current
}
