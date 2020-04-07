import { useState } from 'react'
import { getCookie, setCookie } from './cookie'

export default function useCookie(key: any, initialValue: string | number | boolean) {
  const [item, setItem] = useState(() => {
    return getCookie(key) || initialValue
  })

  const updateItem = (value: string | number | boolean, options = { days: 7, path: '/' }) => {
    setItem(value)
    setCookie(key, value, options)
  }

  return [item, updateItem] as [any, typeof updateItem]
}
