import useListData from '../useListData';
/**
 * 转化一个扁平数据为[{id, value}, {id, value}]为{ [id1]: value1, [id2]: value2 }
 * @param data
 * @param options
 * @returns
 */
export default function useDataListToMap(data, { key = 'id' } = {}) {
    return useListData(data, (originValue, { transObj }) => transObj(originValue, { key }));
}
