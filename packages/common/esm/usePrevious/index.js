import { useRef, useEffect } from 'react';
export function usePreviousRenderValue(value) {
    const previousRef = useRef();
    // useEffect会在完成这次'渲染'之后执行
    useEffect(() => {
        previousRef.current = value;
    });
    return previousRef.current;
}
/**
 * 获取上一次的值
 * @param value
 * @param equalsMode 是否仅变更时更新值，默认为true，即只有每次值变化时更新上一次的值。equalsMode = false 则每次函数组件render都返回上次render时的值
 */
export default function usePrevious(value, equalsMode = true) {
    const prevListRef = useRef([]);
    // const prevRenderValue = usePreviousRenderValue(value)
    // useEffect会在完成这次'渲染'之后执行
    useEffect(() => {
        if (!equalsMode) {
            prevListRef.current[0] = value;
        }
    });
    const last = prevListRef.current[prevListRef.current.length - 1];
    useEffect(() => {
        if (equalsMode) {
            if (!prevListRef.current.length) {
                prevListRef.current = [value];
            }
            else if (value !== last) {
                prevListRef.current = [last, value];
            }
        }
    }, [value, equalsMode, last]);
    // if (!equalsMode) return prevRenderValue
    if (equalsMode) {
        const lastValue = prevListRef.current[prevListRef.current.length - 1];
        return value === lastValue ? prevListRef.current[prevListRef.current.length - 2] : lastValue;
    }
    return prevListRef.current[0];
}
