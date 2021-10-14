import { useReducer } from 'react'

/**
 * 切换布尔值
 */
export default function useToggle(initialValue = false): [boolean, () => void] {
  return useReducer((state) => !state, initialValue)
}
