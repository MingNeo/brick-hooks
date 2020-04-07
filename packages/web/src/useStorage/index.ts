import { useState, useEffect, useCallback } from 'react'

export function setStorage(key: string, value: any) {
  try {
    window.localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

export function getStorage(key: string, initialValue?: any): any {
  if (!window?.localStorage) {
    return initialValue
  }
  const value = window.localStorage.getItem(key)
  try {
    return value !== undefined && value !== null ? JSON.parse(value) : initialValue
  } catch (error) {
    // if error, return value
    console.log(error)
    return value ?? initialValue
  }
}

function parseValue(value: string | null, initialValue: any) {
  try {
    return value ? JSON.parse(value) : initialValue
  } catch {
    return initialValue
  }
}

/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
export default function useLocalStorage<T>(
  itemName: string,
  initialValue: any = undefined,
  watchStorageChange: boolean = false
) {
  const [value, setStateValue] = useState(() => getStorage(itemName, initialValue))
  const setValue = useCallback(
    (value) => {
      setStorage(itemName, value)
      watchStorageChange || setStateValue(parseValue(value, initialValue))
    },
    [initialValue, itemName, watchStorageChange]
  )

  useEffect(() => {
    if (!window?.localStorage || !watchStorageChange) {
      return
    }

    // 当storage变化的时候更新state以触发组件render
    const onStorage = (e: StorageEvent) => {
      if (e.key === itemName) {
        setStateValue(parseValue(e.newValue, initialValue))
      }
    }
    // watchStorageChange 为 true时， 监听storage事件，即使直接调用window.localStorage.setItem也会更新当前value
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
    }
  }, [initialValue, itemName, watchStorageChange])

  return [value, setValue] as [T, typeof setValue]
}
