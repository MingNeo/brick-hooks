declare type idata = Record<string, any>;
/**
 * 当state为数组时，不方便使用push等方法直接操纵数据，此hooks提供几个常用方法
 * @param initial
 * @param idKey
 */
export default function useArray<T extends idata>(initial?: T[] | (() => T[])): [T[] | (() => T[]), Record<string, (...args: any[]) => void>];
export {};
