import { useEffect } from 'react'
import useValueRef from '../useValueRef'

/**
 * 提供一个类似于class组件生命周期的hooks
 */
export default function useWillUnmount(onMount: () => void): void {
  const ref = useValueRef(onMount)

  useEffect(() => () => ref.current && ref.current(), [])
}
