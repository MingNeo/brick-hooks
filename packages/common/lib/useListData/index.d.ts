import { transformListToTree, transformListToMap, transformListToGroup, transformListToPartition } from './helper';
export declare type FilterCallback<T = any> = (value: T, index: number, array: readonly T[]) => boolean;
export declare type MapCallback<T = any> = (value: T, index: number, array: readonly T[]) => any[];
export declare type ReduceCallback<T = any> = (previousValue: T, currentValue: T, currentIndex: T, array: T[]) => T;
export interface ChainIns {
    _value: any;
    next: (fn: any) => this;
    value: () => any;
    add: (value: any) => this;
    pop: () => this;
    slice: (start?: number, end?: number) => this;
    reverse: () => this;
    sort: (callback?: (a: any, b: any) => number) => this;
    sortBy: ({ field, order }: {
        field: string;
        order?: string;
    }) => this;
    remove: (value: any) => this;
    filter: (callback: (v: any) => boolean) => this;
    map: (callback: MapCallback) => this;
    reduce: (callback: ReduceCallback, initialValue?: any) => this;
    transTree: (options?: {
        parentId?: string;
        id?: string;
        children?: string;
        topParentId?: number;
    }) => this;
    transObj: (options?: {
        key?: string;
    }) => this;
    group: (options?: {
        groupKey?: string;
    }) => this;
    partition: (options?: {
        groupKey?: string;
    }) => this;
    removeById: (id: string, idKey?: string) => this;
    removeIndex: (value: number) => this;
}
export declare const baseMethods: {
    transTree: typeof transformListToTree;
    transObj: typeof transformListToMap;
    group: typeof transformListToGroup;
    partition: typeof transformListToPartition;
    removeById: (state: Record<string, any>[], id: string, idKey?: string) => Record<string, any>[];
    removeIndex: (state: any[], value: number) => any[];
    sortBy: (data: any[], { field, order }: {
        field: any;
        order?: string;
    }) => any[];
};
export declare const chainOriginMethods: {
    add: (state: any[], value: any) => any[];
    pop: (state: string | any[]) => string | any[];
    slice: (state: string | any[], start?: number, end?: number) => string | any[];
    remove: (state: any[], value: any) => any[];
    reverse: (state: any[]) => any[];
    sort: (state: any[], callback?: (a: any, b: any) => number) => any[];
    filter: (value: Record<string, any>[], callback: FilterCallback) => Record<string, any>[];
    map: (value: Record<string, any>[], callback: MapCallback) => any[][];
    reduce: (value: Record<string, any>[], callback: ReduceCallback, initialValue?: any) => any;
    transTree: typeof transformListToTree;
    transObj: typeof transformListToMap;
    group: typeof transformListToGroup;
    partition: typeof transformListToPartition;
    removeById: (state: Record<string, any>[], id: string, idKey?: string) => Record<string, any>[];
    removeIndex: (state: any[], value: number) => any[];
    sortBy: (data: any[], { field, order }: {
        field: any;
        order?: string;
    }) => any[];
};
export declare const transformsMap: {
    transTree: typeof transformListToTree;
    transObj: typeof transformListToMap;
    group: typeof transformListToGroup;
    partition: typeof transformListToPartition;
    removeById: (state: Record<string, any>[], id: string, idKey?: string) => Record<string, any>[];
    removeIndex: (state: any[], value: number) => any[];
    sortBy: (data: any[], { field, order }: {
        field: any;
        order?: string;
    }) => any[];
    chain: (origin: any) => ChainIns;
};
/**
 * 对Record<string, any>[]格式的数据进行memo处理, 自动监听变化并更新，
 * 可以使用自定义处理函数对数据进行各种基础处理及转化为tree、obj、group等高级处理
 */
export default function useListData<T extends Record<string, any>>(value: T[], transform?: (originData: T[], transformMethods: typeof transformsMap) => any): any;
