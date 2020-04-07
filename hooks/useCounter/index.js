import { useState, useCallback } from 'react';

/**
 * 数字步进
 * @param {number} initialValue 默认值
 * @param {object} options 配置
 */
export default function useCounter(initialValue = 0, options = {}) {
  const [counter, setCounter] = useState(initialValue);
  const { min, max } = options;
  const setValue = useCallback(
    (value) => {
      const disposeValue = (v) => {
        if (typeof min === 'number' && v < min) {
          return min;
        }
        if (typeof max === 'number' && v > max) {
          return max;
        }
        return v;
      };
      setCounter(typeof value === 'function' ? (v) => disposeValue(value(v)) : disposeValue(value));
    },
    [min, max],
  );
  const inc = (step = 1) => setValue((v) => v + step);
  const dec = (step = 1) => setValue((v) => v - step);
  const reset = useCallback(() => setCounter(initialValue), [initialValue]);

  return [counter, { set: setValue, inc, dec, reset }];
}
