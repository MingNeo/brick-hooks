import { useState } from 'react'
import { getCookie, setCookie } from './cookie'

type SetItem = (value: string | number | boolean, options?: { days: number; path: string }) => void

export default function useCookie(
  key: string
): [string, SetItem, { getItem: () => string; refreshItem: () => void }] {
  const getItem = () => getCookie(key)
  const [item, setItem] = useState(getItem)

  const updateItem: SetItem = (value: string, options = { days: 7, path: '/' }) => {
    setItem(value)
    setCookie(key, value, options)
  }

  const refreshItem = () => {
    const newItem = getItem()
    setItem(newItem)
  }

  return [item, updateItem, { getItem, refreshItem }]
}
