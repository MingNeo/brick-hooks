import { useMemo } from 'react'

/**
 * 转化一个扁平数据为[{id, value}, {id, value}]为{ [id1]: value1, [id2]: value2 }
 * @param data 
 * @param param1 
 * @returns 
 */
export default function useDataListToMap<D = Record<string, any>>(data: D[], { key = 'id' }) {
  return useMemo(
    () =>
      data.reduce((prev: D, cur: D) => {
        prev[cur[key]] = cur
        return prev
      }, {}),
    [data, key]
  )
}
