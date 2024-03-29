import { useReducer } from 'react'

type ForceUpdate = () => void

/**
 * 返回一个forceUpdate方法，每次调用触发函数组件强制更新
 */
export default function useForceRender(): ForceUpdate {
  return useReducer((n: number) => n + 1, 0)[1]
}
