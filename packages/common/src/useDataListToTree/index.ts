import useListData from '../useListData'

type Data = Record<string, any>[]

// 转化一个扁平数据为树形数据
export default function useDataListToTree<T extends Data>(
  data: T,
  { parentId = 'pid', id = 'id', children = 'children', rootParentId = undefined } = {},
) {
  return useListData(data, (originValue, { transTree }) =>
    transTree(originValue, { parentId, id, children, rootParentId }),
  ) as T
}
