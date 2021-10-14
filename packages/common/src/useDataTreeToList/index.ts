import { useMemo } from 'react'

type Data = Record<string, any>[]

/**
 * 将一个树转化为数组
 */

function transformTreeToList(data: Data, pid = 0, { pidKey = 'pid' } = {}) {
  const newData: any[] = []
  data.forEach((item) => {
    const { children, ...restData } = item
    newData.push({ ...restData, [pidKey]: pid })
    if (children) {
      newData.push(...transformTreeToList(children, item.id))
      delete item.children
    }
  })
  return newData
}

/**
 *  转化一个树形数据为扁平数据
 */ 
export default function useDataTreeToList(data: any) {
  return useMemo(() => transformTreeToList(data), [data])
}
