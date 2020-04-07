declare type DebunceCallback = (...args: any[]) => any;
/**
 * 处理一个函数返回防抖的函数
 * @param callback
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(callback: DebunceCallback, wait?: number): [(...args: any) => void, () => void];
export {};
