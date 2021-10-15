import AsyncStorage from '@react-native-community/async-storage';

export async function setStorage(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.info(error)
    if(typeof value === 'string') {
      await AsyncStorage.setItem(key, value)
    } else if(typeof value === 'number') {
      await AsyncStorage.setItem(key, `${value}`)
    }
  }
  return true
}

export async function getStorage(key: string): Promise<any> {
  const value = await AsyncStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    // if error, return value
    console.info(error)
    return value
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
      break;
    default:
      result = value
  }

  return result
}

export const removeStorage = (key: string) => {
  return AsyncStorage.removeItem(key)
}