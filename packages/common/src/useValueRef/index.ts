import { useRef } from 'react'

export default function useValueRef<T>(value: T) {
  const valueRef = useRef<T>(value)
  valueRef.current = value
  return valueRef
}
