import useMethods, { BoundActionMethods } from '../useMethods'

export const arrayMethods = {
  set: (state: any, value: any) => (typeof value === 'function' ? value(state) : value),

  push: (state = [], value: any) => [...state, value],

  pop: (state: string | any[]) => state.slice(0, -1),

  slice: (state: string | any[], start?: number, end?: number) => state.slice(start, end),

  clear: () => [],

  reverse: (state: any[]) => [...state].reverse(),

  concat: (state: any[], ...args: any[]) => [...state].concat(...args),

  sort: (state: any[], callback?: (a: any, b: any) => number) => [...state].sort(callback),

  sortBy: (state: any[] = [], { field, order = 'ASC' }) => {
    if (!order || !['ASC', 'DESC'].includes(order)) throw new Error('order error')
    return [...state].sort((a, b) => (order === 'ASC' ? a[field] - b[field] : b[field] - a[field]))
  },

  remove: (state: any[], value: any) =>
    state.filter((...args: any) =>
      typeof value === 'function' ? !value(...args) : args[0] !== value
    ),

  // 根据id移除数据，数据格式必需为[{ [idkey], ... }]
  removeById: (state: Record<string, any>[], id: string, idKey: string = 'id') =>
    state.filter((v) => v && v[idKey] !== id),

  removeIndex: (state: any[], value: number) => state.filter((v: any, i: number) => i !== value),
}

/**
 * 当state为数组时，数据需要是immutable的，不方便使用push等方法直接操纵数据，此hook提供几个常用方法，修改可以自动触发渲染
 */
export default function useArray<T>(initial?: T[] | (() => T[])): [T[], BoundActionMethods] {
  const [listData, actions] = useMethods(arrayMethods, initial || [])
  return [listData, actions]
}
