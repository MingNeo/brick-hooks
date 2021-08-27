import { useRef, useMemo } from 'react';
// interface DebounceFnOptions {
//   deps?: any[]
//   leading?: boolean // 指定在延迟开始前调用
//   maxWait?: number // 设置 func 允许被延迟的最大值
//   trailing?: boolean
// }
/**
 * 处理一个函数返回防抖的函数
 * @param handler
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(handler, wait = 100
// options: DebounceFnOptions = {},
) {
    // const { deps } = options
    const timer = useRef();
    const waitRef = useRef(wait);
    const fnRef = useRef(handler);
    fnRef.current = handler;
    return useMemo(() => {
        const cancel = () => {
            clearTimeout(timer.current);
        };
        const debounceFn = (...args) => {
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                cancel();
                fnRef.current && fnRef.current.apply(null, args);
                timer.current = null;
            }, waitRef.current);
        };
        return [debounceFn, cancel];
    }, []);
}
