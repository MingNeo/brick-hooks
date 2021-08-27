import { useEffect, useRef, useState, useMemo } from 'react';
/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 * @returns  stopInterval
 */
export default function useInterval(callback, time = 300) {
    const intervalFn = useRef();
    const intervalId = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        intervalFn.current = callback;
    }, [callback]);
    const { start, stop } = useMemo(() => {
        return {
            start: () => {
                intervalId.current = setInterval(() => {
                    intervalFn.current();
                    setIsRunning(true);
                }, time);
            },
            stop: () => {
                clearInterval(intervalId.current);
                intervalId.current = null;
                setIsRunning(false);
            }
        };
    }, [time]);
    useEffect(() => {
        start();
        return () => {
            stop();
        };
    }, [time]);
    return {
        isRunning,
        start,
        stop
    };
}
