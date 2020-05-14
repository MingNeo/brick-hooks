import { useMemo } from 'react'

type Data = Record<string, any>[]

function transformListToTree(
  data: Data,
  { parentId = 'pid', id = 'id', children = 'children', topParentId = 0 } = {}
) {
  const cloneData = JSON.parse(JSON.stringify(data)) as Data
  return cloneData.filter((parent) => {
    const childrenItem = cloneData.filter((child) => parent[id] === child[parentId])
    if (childrenItem.length) {
      parent[children] = childrenItem
    }
    return parent[parentId] === topParentId
  })
}

// 转化一个扁平数据为树形数据
export default function useDataListToTree(data: any) {
  return useMemo(() => transformListToTree(data), [data])
}
