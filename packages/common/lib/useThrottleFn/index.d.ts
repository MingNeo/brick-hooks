/**
 * 对一个函数进行节流处理，返回处理过的函数
 * @param handler
 * @param ms
 * @returns [throttleFn, cancel]
 */
declare function useThrottleFn(handler: (...args: any[]) => any, ms?: number): [(...args: any[]) => any, () => void];
export default useThrottleFn;
