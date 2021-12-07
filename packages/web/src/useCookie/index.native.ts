import { useState } from 'react'
type SetItem = (value: string | number | boolean, options?: { days: number; path: string }) => void

/**
 * react-native 版本不做具体实现，但保持兼容，返回内容皆为空
 * @param key
 * @returns
 */
export default function useCookie(key: string): [string, SetItem, { getItem: () => string; refreshItem: () => void }] {
  const getItem = () => ''
  const [item, setItem] = useState()

  const updateItem: SetItem = (value: string, options = { days: 7, path: '/' }) => {}

  const refreshItem = () => {}

  return [item, updateItem, { getItem, refreshItem }]
}
