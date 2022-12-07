import { isNil } from '../utils'

type Data = Record<string, any>[]

export function transformListToTree(
  data: Data,
  { rootParentId = undefined, parentId = 'pid', id = 'id', children = 'children' } = {},
) {
  const cloneData = JSON.parse(JSON.stringify(data)) as Data
  const dataMap = transformListToMap(data)
  return cloneData.filter((curr) => {
    const childrenItem = cloneData.filter((child) => curr[id] === child[parentId])
    if (childrenItem.length) {
      curr[children] = childrenItem
    }
    return curr[parentId] === rootParentId || !curr[parentId] || isNil(dataMap[curr[parentId]])
  })
}

export function transformListToMap(data: Data, { key = 'id' } = {}) {
  return data.reduce((prev: any, cur: any) => {
    prev[cur[key]] = cur
    return prev
  }, {})
}

export function transformListToGroup(data: Data = [], { groupKey }: { groupKey?: string } = {}) {
  const groupByDataMap = {}
  if (groupKey) {
    data.forEach((item) => {
      groupByDataMap[item[groupKey]] = [...(groupByDataMap[item[groupKey]] || []), item].filter((v) => !!v)
    })
    return groupByDataMap
  } else {
    return data
  }
}

export function transformListToPartition(data: Data = [], { groupKey }: { groupKey?: string } = {}) {
  const groupMap = transformListToGroup(data, { groupKey })
  return Object.values(groupMap)
}

/**
 * 字段展开
 */
export function transformListToFoldList(data: Data = [], { fields }: { fields?: string[] } = {}) {
  return fields.reduce((prev, field) => [...prev, ...foldData(data, { field })], [])
}

function foldData(data: Data = [], { field }) {
  return data.reduce((prev: any[], item) => {
    const { field: fieldValue, ...restData } = item
    return [...prev, { key: field, value: fieldValue, ...restData }]
  }, []) as any[]
}

const transform = {
  tree: transformListToTree,
  obj: transformListToMap,
  group: transformListToGroup,
  partition: transformListToPartition,
  fold: transformListToFoldList,
}

export default transform
