import { invariant } from '../utils'
import useForceRender from '../useForceRender'
import useHistoryRef, { Return, useHistoryRefOptions } from "../useHistoryRef"

/**
 *
 * @param source
 * @param options
 * @returns
 */
export default function useHistoryState<Raw, Serialized = Raw>(
  options: useHistoryRefOptions<Raw, Serialized> = {}
): Return<Raw, Serialized> {
  console.warn('`useHistoryState` is deprecated, please use `useHistoryRef` instead')
  
  const forceUpdate = useForceRender()
  return useHistoryRef({
    ...options,
    onUpdate: (...args) => {
      options.onUpdate && options.onUpdate(...args)
      forceUpdate()
    },
  })
}
