import { useEffect, useRef } from 'react';
/**
 * 方便使用setTimeout的hook
 */
export default function useTimeout(callback, time = 300) {
    const callbackFn = useRef();
    useEffect(() => {
        callbackFn.current = callback;
    }, [callback]);
    useEffect(() => {
        const timer = setTimeout(() => {
            callbackFn.current();
        }, time);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);
}
