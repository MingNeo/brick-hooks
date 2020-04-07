import { useState, useCallback } from 'react';

/**
 *
 * @param {*} initialValue 默认值
 * @param {} [valueKey] 可选，取值的key，默认为value
 * @param {*} [onChange]  可选，onChange事件
 */
export default function useInput(initialValue, valueKey = 'value', onChange) {
  if (typeof valueKey === 'function') {
    onChange = valueKey;
    valueKey = 'value';
  }
  const [value, setValue] = useState(initialValue);
  const setValueFromEvent = useCallback((event) => {
    setValue(event.currentTarget[valueKey]);
    if (typeof onChange === 'function') onChange(event);
  }, [onChange, valueKey]);

  return {
    value,
    onChange: setValueFromEvent,
    setValue,
    bindEvent: {
      value,
      onChange: setValueFromEvent,
    },
  };
}
