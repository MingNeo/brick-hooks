import { useEffect } from 'react'
import useRefValue from '../useRefValue'

/**
 * 提供一个类似于class组件生命周期的hooks
 */
export default function useDidMount(onMount: () => void): void {
  const ref = useRefValue(onMount)

  useEffect(() => {
    ref.current && ref.current()
  }, [])
}
