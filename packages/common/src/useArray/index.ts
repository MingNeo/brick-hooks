import useMethods from '../useMethods'

type idata = Record<string, any>

const methods = {
  set: (state: any, value: any) => value,
  push: (state = [], value: any) => [...state, value],
  pop: (state: string | any[]) => state.slice(0, -1),
  slice: (state: string | any[], start?: number, end?: number) => state.slice(start, end),
  clear: () => [],
  remove: (state: any[], value: any) =>
    state.filter((...args: any) =>
      typeof value === 'function' ? !value(...args) : args[0] !== value
    ),
  // 根据id移除数据，数据格式必需为[{ [idkey], ... }]
  removeById: (state: Record<string, any>[], { idKey, id }: any) =>
    state.filter((v) => v && v[idKey] !== id),
  removeIndex: (state: any[], value: number) => state.filter((v: any, i: number) => i !== value),
}

/**
 * 当state为数组时，不方便使用push等方法直接操纵数据，此hooks提供几个常用方法
 * @param initial
 * @param idKey
 */
export default function useArray<T extends idata>(initial?: T[] | (() => T[])) {
  const [listData, actions] = useMethods(methods, initial || [])
  return [listData, actions] as [typeof listData, typeof actions]
}
