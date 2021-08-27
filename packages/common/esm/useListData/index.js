import { useMemo } from 'react';
import { arrayMethods } from '../useArray';
import { transformListToTree, transformListToMap, transformListToGroup, transformListToPartition, } from './helper';
export const baseMethods = {
    transTree: transformListToTree,
    transObj: transformListToMap,
    group: transformListToGroup,
    partition: transformListToPartition,
    removeById: arrayMethods.removeById,
    removeIndex: arrayMethods.removeIndex,
    sortBy: arrayMethods.sortBy,
};
// 一些仅提供chain使用的基础方法
export const chainOriginMethods = Object.assign(Object.assign({}, baseMethods), { add: arrayMethods.push, pop: arrayMethods.pop, slice: arrayMethods.slice, remove: arrayMethods.remove, reverse: arrayMethods.reverse, sort: arrayMethods.sort, filter: (value, callback) => value.filter(callback), map: (value, callback) => value.map(callback), reduce: (value, callback, initialValue) => value.reduce(callback, initialValue) });
export const transformsMap = Object.assign({ 
    // 链式操作数据
    chain: (origin) => {
        const chainIns = Object.assign({ _value: origin, next(fn) {
                this._value = fn(this._value, baseMethods);
                return this;
            },
            value() {
                return this._value;
            } }, Object.entries(chainOriginMethods).reduce((prev, [key, method]) => {
            return Object.assign(Object.assign({}, prev), { [key]: function (...args) {
                    // @ts-ignore
                    this._value = method(this._value, ...args);
                    return this;
                } });
        }, {}));
        return chainIns;
    } }, baseMethods);
/**
 * 对Record<string, any>[]格式的数据进行memo处理, 自动监听变化并更新，
 * 可以使用自定义处理函数对数据进行各种基础处理及转化为tree、obj、group等高级处理
 */
export default function useListData(value = [], transform) {
    const listData = useMemo(() => {
        return transform ? transform(value, transformsMap) : value;
    }, [value, transform]);
    return listData;
}
