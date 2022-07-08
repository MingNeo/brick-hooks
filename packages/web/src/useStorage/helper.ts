import { isBrowser } from '../utils'

const getStorageInstance = (storageType: string) =>
  storageType === 'sessionStorage' ? window.sessionStorage : window.localStorage

export function setStorage(storageType: string, key: string, value: Record<string, any> | any[] | string | number) {
  const storage = getStorageInstance(storageType)
  try {
    storage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.info(error)
    if (typeof value === 'string') {
      storage.setItem(key, value)
    } else if (typeof value === 'number') {
      storage.setItem(key, `${value}`)
    }
  }
}

export function getStorage(storageType: string, key: string): any {
  if (!isBrowser) return undefined
  const storage = getStorageInstance(storageType)
  if (!storage) return undefined
  const value = storage?.getItem(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    // if error, return value
    console.info(error)
    return value
  }
}

export function removeStorage(storageType: string, key: string) {
  const storage = getStorageInstance(storageType)
  try {
    storage.removeItem(key)
  } catch (error) {
    console.info(error)
  }
}

export function parseValue(value: string | number | Record<string, any> | any[]) {
  let result: string | number | Record<string, any>
  switch (typeof value) {
    case 'string':
      try {
        result = JSON.parse(value)
      } catch (e) {
        console.info(e)
        result = value
      }
      break
    default:
      result = value
  }

  return result
}
