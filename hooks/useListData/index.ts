import { useCallback, useState } from 'react'

/**
 * 当state为数组时，不方便使用push等方法直接操纵数据，此hooks提供几个常用方法
 * @param initial
 * @param idKey
 */
export default function useListData<T>(initial?: T[] | (() => T[]), idKey: string = 'id') {
  const [listData, setListData] = useState(initial || [])
  const actions = {
    set: setListData,
    push: useCallback(newVal => setListData(v => [...v, newVal]), []),
    clear: useCallback(() => setListData(() => []), []),
    removeById: useCallback(id => setListData(arr => arr.filter(v => v && v[idKey] !== id)), []),
    removeIndex: useCallback(
      index =>
        setListData(v => {
          v.splice(index, 1)
          return v
        }),
      []
    )
  }
  return [listData, actions]
}
