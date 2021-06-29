import { useState, useMemo } from 'react'
import { getStorage, setStorage, parseValue, removeStorage } from './helper'

/**
 *
 * @param itemName
 * @param initialValue
 */
export default function useStorage(itemName: string, initialValue: any = undefined) {
  const [value, setStateValue] = useState(() => getStorage(itemName) || initialValue)

  const methods = useMemo(() => {
    const setValue = (value: string | number | Record<string, any> | any[]) => {
      setStorage(itemName, value)
      setStateValue(parseValue(value))
    }
    const clear = () => {
      removeStorage(itemName)
      setValue(undefined)
    }
    return { setValue, clear }
  }, [itemName])

  return [value, methods.setValue, methods.clear] as [
    typeof value,
    typeof methods.setValue,
    typeof methods.clear
  ]
}
