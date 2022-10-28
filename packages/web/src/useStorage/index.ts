import { useState, useEffect, useMemo, useRef } from 'react'
import { isBrowser } from '../utils'
import { getStorage, setStorage, parseValue, removeStorage } from './helper'

function isNil(value) {
  return value === undefined || value === null
}

type SetValue = (value?: string | number | Record<string, any> | any[]) => void

type Clear = () => void
/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是当前组件/hooks修改storage，也会更新value
 */
export default function useStorage(
  itemName: string,
  initialValue: any = undefined,
  { watchStorageChange = false, storageType = 'localStorage' } = {},
): [any, SetValue, { clear: Clear }] {
  const initialValueRef = useRef(initialValue)
  const [value, setStateValue] = useState(() => getStorage(storageType, itemName) || initialValue)

  const methods = useMemo(() => {
    const setValue = (value?: string | number | Record<string, any> | any[]) => {
      setStorage(storageType, itemName, !isNil(value) ? value : initialValueRef.current)
      watchStorageChange ||
        (!isNil(value) ? setStateValue(parseValue(value as any)) : setStateValue(initialValueRef.current))
    }
    const clear = () => {
      removeStorage(storageType, itemName)
      setValue(undefined)
    }
    return { setValue, clear }
  }, [itemName, storageType, watchStorageChange])

  useEffect(() => {
    if (!isBrowser || !window?.localStorage || !watchStorageChange) {
      return
    }

    // 当storage变化的时候更新state以触发组件render
    const onStorage = (e: StorageEvent) => {
      if (e.key === itemName) {
        setStateValue(isNil(e.newValue) ? parseValue(e.newValue as any) : initialValueRef.current)
      }
    }
    // watchStorageChange 为 true时， 监听storage事件，即使直接修改也触发更新当前value
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
    }
  }, [itemName, watchStorageChange])

  return [value, methods.setValue, { clear: methods.clear }]
}

export const useLocalStorage = useStorage

export const useSessionStorage = (
  itemName: string,
  initialValue: any = undefined,
  { watchStorageChange = false } = {},
) => {
  return useStorage(itemName, initialValue, {
    watchStorageChange,
    storageType: 'sessionStorage',
  })
}
