import { useRef, useMemo, useEffect } from 'react';
/**
 * 一个防抖触发的useEffect
 * @param callback
 * @param wait
 */
export default function useDebounceEffect(callback, wait = 100, deps = []) {
    const timerRef = useRef();
    const waitRef = useRef(wait);
    const callbackRef = useRef(callback);
    callbackRef.current = callback;
    const destructorSetRef = useRef(new Set());
    const { debounceCallback, cancel } = useMemo(() => {
        const cancel = () => {
            clearTimeout(timerRef.current);
            for (const destructor of destructorSetRef.current) {
                destructor && destructor();
                destructorSetRef.current.delete(destructor);
            }
        };
        const debounceCallback = () => {
            timerRef.current && clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                if (callbackRef.current) {
                    const destructor = callbackRef.current.apply(null);
                    destructor && destructorSetRef.current.add(destructor);
                }
                timerRef.current = null;
            }, waitRef.current);
        };
        return {
            debounceCallback,
            cancel,
        };
    }, []);
    useEffect(() => {
        if (deps === null || deps === void 0 ? void 0 : deps.length) {
            debounceCallback();
        }
        return () => {
            cancel();
        };
    }, deps);
}
