import { useState, useCallback } from 'react';
export const arrayMethods = {
    inc: (state, step) => state + step,
    dec: (state, step) => state - step,
    reset: (state, initialValue) => initialValue
};
/**
 * 数字步进
 * @param {number} initialValue 默认值
 * @param {object} options 配置
 */
export default function useCounter(initialValue = 0, options = {}) {
    const [counter, setCounter] = useState(initialValue);
    const { min = -Infinity, max = Infinity, step: defaultStep = 1 } = options;
    const setValue = useCallback((nextValue) => {
        const disposeValue = (value) => (value < min ? min : value > max ? max : value);
        setCounter(typeof nextValue === 'function'
            ? (value) => disposeValue(nextValue(value))
            : disposeValue(nextValue));
    }, [min, max]);
    const inc = (step = defaultStep) => setValue((value) => value + step);
    const dec = (step = defaultStep) => setValue((value) => value - step);
    const reset = useCallback(() => setCounter(initialValue), [initialValue]);
    return [counter, { set: setValue, inc, dec, reset }];
}
