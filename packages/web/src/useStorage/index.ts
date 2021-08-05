import { useState, useEffect, useMemo } from 'react'
import { getStorage, setStorage, parseValue, removeStorage } from './helper'

function isNil(value) {
  return value === undefined || value === null
}

/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
export default function useStorage(
  itemName: string,
  initialValue: any = undefined,
  { watchStorageChange = false, storageType = 'localStorage' } = {}
) {
  const [value, setStateValue] = useState(() => getStorage(storageType, itemName) || initialValue)

  const methods = useMemo(() => {
    const setValue = (value?: string | number | Record<string, any> | any[]) => {
      setStorage(storageType, itemName, !isNil(value) ? value : initialValue)
      watchStorageChange || (!isNil(value) ? setStateValue(parseValue(value as any)) : setStateValue(initialValue))
    }
    const clear = () => {
      removeStorage(storageType, itemName)
      setValue(undefined)
    }
    return { setValue, clear }
  }, [itemName, storageType, watchStorageChange])

  useEffect(() => {
    if (!window?.localStorage || !watchStorageChange) {
      return
    }

    // 当storage变化的时候更新state以触发组件render
    const onStorage = (e: StorageEvent) => {
      if (e.key === itemName) {
        setStateValue(isNil(e.newValue) ? parseValue(e.newValue as any) : initialValue)
      }
    }
    // watchStorageChange 为 true时， 监听storage事件，即使直接修改也触发更新当前value
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
    }
  }, [itemName, watchStorageChange])

  return [value, methods.setValue, { clear: methods.clear,  }] as [
    typeof value,
    typeof methods.setValue,
    { 
      clear: typeof methods.clear,

    }
  ]
}

export const useLocalStorage = (
  itemName: string,
  initialValue: any = undefined,
  { watchStorageChange = false } = {}
) => {
  return useStorage(itemName, initialValue, { watchStorageChange, storageType: 'localStorage' })
}

export const useSessionStorage = (
  itemName: string,
  initialValue: any = undefined,
  { watchStorageChange = false } = {}
) => {
  return useStorage(itemName, initialValue, {
    watchStorageChange,
    storageType: 'sessionStorage',
  })
}
