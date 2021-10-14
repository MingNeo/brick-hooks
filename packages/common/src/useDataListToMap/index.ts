import useListData from '../useListData'

/**
 * 转化一个扁平数据为[{id, value}, {id, value}]为{ [id1]: value1, [id2]: value2 }
 */
export default function useDataListToMap<T = Record<string, any>>(data: T[], { key = 'id' } = {}) {
  return useListData(data, (originValue, { transObj }) => transObj(originValue, { key }))
}
