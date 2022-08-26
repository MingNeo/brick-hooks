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
  const forceUpdate = useForceRender()
  return useHistoryRef({
    ...options,
    onUpdate: (...args) => {
      options.onUpdate && options.onUpdate(...args)
      forceUpdate()
    },
  })
}
