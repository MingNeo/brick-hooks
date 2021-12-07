type Data = Record<string, any>[]

export function transformListToTree(
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
