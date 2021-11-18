import useArray from '../useArray'
import { BoundActionMethods } from '../useMethods'
import useListData, { transformsMap } from '../useListData'

/**
 * 基于useArray及useListData，对Record<string, any>[]格式的数据更新时进行自动处理，可以使用自定义处理函数对数据进行处理
 */
export default function useListState<T extends Record<string, any>>(
  initialValue: T[],
  transform?: (originData: T[], transformMethods: typeof transformsMap) => any
): [T[], BoundActionMethods] {
  const [state, arrayMethods] = useArray<T>(initialValue)
  const listState = useListData(state, transform)

  return [listState, arrayMethods]
}
