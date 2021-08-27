import useMethods from '../useMethods';
export const arrayMethods = {
    set: (state, value) => typeof value === 'function' ? value(state) : value,
    push: (state = [], value) => [...state, value],
    pop: (state) => state.slice(0, -1),
    slice: (state, start, end) => state.slice(start, end),
    clear: () => [],
    reverse: (state) => [...state].reverse(),
    concat: (state, ...args) => [...state].concat(...args),
    sort: (state, callback) => [...state].sort(callback),
    sortBy: (data = [], { field, order = 'ASC' }) => {
        if (!order || !['ASC', 'DESC'].includes(order))
            throw new Error('order error');
        return [...data].sort((a, b) => (order === 'ASC' ? a[field] - b[field] : b[field] - a[field]));
    },
    remove: (state, value) => state.filter((...args) => typeof value === 'function' ? !value(...args) : args[0] !== value),
    // 根据id移除数据，数据格式必需为[{ [idkey], ... }]
    removeById: (state, id, idKey = 'id') => state.filter((v) => v && v[idKey] !== id),
    removeIndex: (state, value) => state.filter((v, i) => i !== value),
};
/**
 * 当state为数组时，数据需要是immutable的，不方便使用push等方法直接操纵数据，此hook提供几个常用方法，修改可以自动触发渲染
 * @param initial
 */
export default function useArray(initial) {
    const [listData, actions] = useMethods(arrayMethods, initial || []);
    return [listData, actions];
}
