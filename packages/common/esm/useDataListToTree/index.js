import useListData from '../useListData';
// 转化一个扁平数据为树形数据
export default function useDataListToTree(data, { parentId = 'pid', id = 'id', children = 'children', topParentId = 0 } = {}) {
    return useListData(data, (originValue, { transTree }) => transTree(originValue, { parentId, id, children, topParentId }));
}
