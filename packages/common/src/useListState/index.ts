import { useState, useCallback } from 'react'
import { transformsMap } from '../useListData'

/**
 * 对Record<string, any>[]格式的数据更新时进行自动处理，可以使用自定义处理函数对数据进行处理
 */
export default function useListState<T extends Record<string, any>>(
  initialValue: T[],
  transform?: (originData: T[], transformMethods: typeof transformsMap) => any
) {
  const formatListData = useCallback(
    (originData) => {
      return transform ? transform(originData, transformsMap) : originData
    },
    [transform]
  )

  const [state, setState] = useState(formatListData(initialValue || []))

  const updateState = useCallback((value: any | ((prevState: T[]) => T[])) => {
    setState(
      typeof value === 'function'
        ? (prevState: T[]) => formatListData(value(prevState))
        : formatListData(value)
    )
  }, [formatListData])

  return [state, updateState]
}
