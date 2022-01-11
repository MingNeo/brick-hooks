import { useState, useMemo } from 'react'
import { getCookie, setCookie, deleteCookie } from './cookie'

type SetItem = (value: string | number | boolean, options?: { days: number; path: string }) => void

export default function useCookie(key: string): [string, SetItem, { get: () => Promise<string>; refresh: () => void }] {
  const [item, setItem] = useState(() => getCookie(key))

  return useMemo(() => {
    const get = async () => getCookie(key)
    const updateItem: SetItem = (value: string, options = { days: 7, path: '/' }) => {
      setItem(value)
      setCookie(key, value, options)
    }

    const refresh = async () => {
      setItem(await get())
    }

    const deleteItem = async () => {
      setItem('')
      await deleteCookie(key)
    }

    return [item, updateItem, { get, refresh, delete: deleteItem }]
  }, [key])
}
