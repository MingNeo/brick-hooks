import { useEffect, useMemo } from 'react'
import { isBrowser } from '../utils'
import useMediaQuery from '../useMediaQuery'
import { useLocalStorage } from '../useStorage'

export default function useDarkMode({ className = 'dark' } = {}) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [savedEnabled, setSavedEnabled] = useLocalStorage('dark-mode', isDarkMode)

  useEffect(() => {
    if (isBrowser) {
      if (savedEnabled) {
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
    }
  }, [savedEnabled])

  return useMemo(() => {
    const toggle = (value: boolean) => {
      setSavedEnabled(`${value ?? !savedEnabled}`)
    }
    return [savedEnabled, toggle] as [boolean, (value: boolean) => void]
  }, [savedEnabled])
}
