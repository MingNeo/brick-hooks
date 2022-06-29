import useListData from '../useListData'

/**
 * 转化一个扁平数据为map
 * before: [{ id, value }, { id, value }]
 * after: { [id1]: value1, [id2]: value2 }
 */
export default function useDataListToMap<T = Record<string, any>>(data: T[], { key = 'id' } = {}) {
  return useListData(data, (originValue, { transObj }) => transObj(originValue, { key }))
}
