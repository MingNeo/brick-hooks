import { useMemo } from 'react'
import { createEventBus } from 'brick-hooks'
import { getStorage, setStorage, parseValue, removeStorage } from './helper.native'

type GetValue = (itemName: string) => Promise<any>
type SetValue = (value: string | number | Record<string, any> | any[]) => void
type Clear = () => void
type Callback = (nextValue: any) => void

const { publish, useSubscribe } = createEventBus()

const EVENT_TYPE = '__USE_STORAGE_CHANGE'

/**
 * 方便使用react-native的AsyncStorage
 * @param itemName
 * @param onStorageValueChange 当storage数据变化时触发回调函数，仅对使用useStorage的setValue/clear方法更新数据有效。
 */
export default function useAsyncStorage(itemName: string, onStorageValueChange: Callback) {
  // 当storage数据变化时触发回调函数
  useSubscribe(EVENT_TYPE, (nextValue?: string) => {
    const value = nextValue === undefined ? nextValue : parseValue(nextValue)
    onStorageValueChange && onStorageValueChange(value)
  })

  return useMemo(() => {
    const getValue: GetValue = async (itemName) => getStorage(itemName)
    const setValue: SetValue = async (value) => {
      publish(EVENT_TYPE, value)
      await setStorage(itemName, value)
    }
    const clear: Clear = () => {
      removeStorage(itemName)
      publish(EVENT_TYPE, undefined)
    }
    return { getValue, setValue, clear }
  }, [itemName])
}
