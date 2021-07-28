export declare const arrayMethods: {
    set: (state: any, value: any) => any;
    push: (state: any[], value: any) => any[];
    pop: (state: string | any[]) => string | any[];
    slice: (state: string | any[], start?: number, end?: number) => string | any[];
    clear: () => any[];
    reverse: (state: any[]) => any[];
    sort: (state: any[], callback?: (a: any, b: any) => number) => any[];
    sortBy: (data: any[], { field, order }: {
        field: any;
        order?: string;
    }) => any[];
    remove: (state: any[], value: any) => any[];
    removeById: (state: Record<string, any>[], id: string, idKey?: string) => Record<string, any>[];
    removeIndex: (state: any[], value: number) => any[];
};
/**
 * 当state为数组时，数据需要是immutable的，不方便使用push等方法直接操纵数据，此hook提供几个常用方法，修改可以自动触发渲染
 * @param initial
 */
export default function useArray<T>(initial?: T[] | (() => T[])): [T[] | (() => T[]), Record<string, (...args: any[]) => void>];
