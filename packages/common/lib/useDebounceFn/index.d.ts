declare type DebunceFn = (...args: any[]) => any;
/**
 * 处理一个函数返回防抖的函数
 * @param handler
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(handler: DebunceFn, wait?: number): [(...args: any) => void, () => void];
export {};
