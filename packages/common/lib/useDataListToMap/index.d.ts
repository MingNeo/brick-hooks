/**
 * 转化一个扁平数据为[{id, value}, {id, value}]为{ [id1]: value1, [id2]: value2 }
 * @param data
 * @param options
 * @returns
 */
export default function useDataListToMap<T = Record<string, any>>(data: T[], { key }?: {
    key?: string;
}): any;
