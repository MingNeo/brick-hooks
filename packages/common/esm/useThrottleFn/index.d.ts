/**
 * 对一个函数进行节流处理，返回处理过的函数
 * @param handler 需要进行节流处理的函数
 * @param wait 等待时间
 * @param isImmediate 是否立即执行，默认为false
 * @returns [throttleFn, cancel]
 */
declare function useThrottleFn(handler: (...args: any[]) => any, wait?: number, isImmediate?: boolean): [(...args: any[]) => void, () => void];
export default useThrottleFn;
