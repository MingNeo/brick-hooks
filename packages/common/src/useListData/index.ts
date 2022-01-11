import { useMemo, useRef } from 'react'
import { arrayMethods } from '../useArray'
import { transformListToTree, transformListToMap, transformListToGroup, transformListToPartition } from './helper'

export type FilterCallback<T = any> = (value: T, index: number, array: readonly T[]) => boolean
export type MapCallback<T = any> = (value: T, index: number, array: readonly T[]) => any[]
export type ReduceCallback<T = any> = (previousValue: T, currentValue: T, currentIndex: T, array: T[]) => T

export interface ChainIns {
  _value: any
  next: (fn: any) => this
  value: () => any
  add: (value: any) => this
  pop: () => this
  slice: (start?: number, end?: number) => this
  reverse: () => this
  sort: (callback?: (a: any, b: any) => number) => this
  sortBy: ({ field, order }: { field: string; order?: string }) => this
  remove: (value: any) => this
  filter: (callback: (v: any) => boolean) => this
  map: (callback: MapCallback) => this
  reduce: (callback: ReduceCallback, initialValue?: any) => this
  transTree: (options?: { parentId?: string; id?: string; children?: string; }) => this
  // 将数组转化为Object
  transObj: (options?: { key?: string }) => this
  group: (options?: { groupKey?: string }) => this
  partition: (options?: { groupKey?: string }) => this
  removeById: (id: string, idKey?: string) => this
  removeIndex: (value: number) => this
}

export const baseMethods = {
  transTree: transformListToTree,
  transObj: transformListToMap,
  group: transformListToGroup,
  partition: transformListToPartition,
  removeById: arrayMethods.removeById,
  removeIndex: arrayMethods.removeIndex,
  sortBy: arrayMethods.sortBy,
}

// 一些仅提供chain使用的基础方法
export const chainOriginMethods = {
  ...baseMethods,
  add: arrayMethods.push,
  pop: arrayMethods.pop,
  slice: arrayMethods.slice,
  remove: arrayMethods.remove,
  reverse: arrayMethods.reverse,
  sort: arrayMethods.sort,
  filter: (value: Record<string, any>[], callback: FilterCallback) => value.filter(callback),
  map: (value: Record<string, any>[], callback: MapCallback) => value.map(callback),
  reduce: (value: Record<string, any>[], callback: ReduceCallback, initialValue?: any) =>
    value.reduce(callback, initialValue),
}

export const transformsMap = {
  // 链式操作数据
  chain: (origin: any) => {
    const chainIns = {
      _value: origin,
      next(fn) {
        this._value = fn(this._value, baseMethods)
        return this
      },
      value() {
        return this._value
      },
      ...Object.entries(chainOriginMethods).reduce((prev, [key, method]) => {
        return {
          ...prev,
          [key]: function (...args: any[]) {
            // @ts-ignore
            this._value = method(this._value, ...args)
            return this
          },
        }
      }, {}),
    }

    return chainIns as ChainIns
  },
  ...baseMethods,
}

/**
 * 对Record<string, any>[]格式的数据进行memo处理, 自动监听变化并更新，
 * 可以使用自定义处理函数对数据进行各种基础处理及转化为tree、obj、group等高级处理
 */
export default function useListData<T extends Record<string, any>>(
  value: T[] = [],
  factory?: (originData: T[], transformMethods: typeof transformsMap) => any,
  deps: any[] = [],
) {
  const factoryRef = useRef(factory)
  factoryRef.current = factory

  return useMemo(() => {
    return factoryRef.current ? factoryRef.current(value, transformsMap) : value
  }, [value, ...deps])
}
