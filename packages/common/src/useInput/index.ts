import { useState, useCallback } from 'react'

type OnChange = string | ((value: any, event: Event) => void)

/**
 *
 * @param initialValue 默认值
 * @param [valueKey] 可选，取值的key，默认为value
 * @param [onChange]  可选，onChange事件
 */
export default function useInput(initialValue: any, valueKey?: string, onChange?: OnChange) {
  if (typeof valueKey === 'function') {
    onChange = valueKey
  }

  const valueType: string = valueKey || 'value'

  const [value, setValue] = useState(initialValue)
  const setValueFromEvent = useCallback(
    (event) => {
      const current = event.currentTarget[valueType]
      setValue(current)
      if (typeof onChange === 'function') onChange(current, event)
    },
    [onChange, valueType]
  )

  return {
    value,
    onChange: setValueFromEvent,
    setValue,
    bindEvent: {
      value,
      onChange: setValueFromEvent,
    },
  }
}
