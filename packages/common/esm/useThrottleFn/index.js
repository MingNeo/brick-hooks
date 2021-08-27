import { useEffect, useRef } from 'react';
/**
 * 对一个函数进行节流处理，返回处理过的函数
 * @param handler 需要进行节流处理的函数
 * @param wait 等待时间
 * @param isImmediate 是否立即执行，默认为false
 * @returns [throttleFn, cancel]
 */
function useThrottleFn(handler, wait = 200, isImmediate = false) {
    const timeoutRef = useRef();
    const nextArgsRef = useRef(null);
    const throttleFn = (...args) => {
        if (!timeoutRef.current) {
            const timeoutCallback = () => {
                if (!isImmediate && nextArgsRef.current) {
                    const currentArgs = [...nextArgsRef.current];
                    nextArgsRef.current = null;
                    timeoutRef.current = setTimeout(timeoutCallback, wait);
                    return handler(...currentArgs);
                }
                timeoutRef.current = null;
            };
            timeoutRef.current = setTimeout(timeoutCallback, wait);
            isImmediate && handler(...args);
        }
        // 当前已经有等待执行的函数，忽略本次触发，仅更新一下参数
        nextArgsRef.current = args;
    };
    const cancel = () => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        nextArgsRef.current = null;
    };
    useEffect(() => {
        return () => {
            cancel();
        };
    }, []);
    return [throttleFn, cancel];
}
export default useThrottleFn;