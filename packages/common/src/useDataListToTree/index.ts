import useListData from '../useListData'

type Data = Record<string, any>[]

// 转化一个扁平数据为树形数据
export default function useDataListToTree(
  data: Data,
  { parentId = 'pid', id = 'id', children = 'children' } = {}
) {
  return useListData(data, (originValue, { transTree }) =>
    transTree(originValue, { parentId, id, children })
  )
}
