import { useCallback } from 'react'
import { useRefCallback } from 'brick-hooks'
import useEventListener from '../useEventListener'

export type KeyPredicate = (event: KeyboardEvent) => boolean
export type Handler = (event: KeyboardEvent) => void

export interface Options<T> {
  key?: string
  event?: 'keydown' | 'keypress' | 'keyup'
  target?: T | null
  ctrlKey?: boolean
  altKey?: boolean
  shiftKey?: boolean
  metaKey?: boolean
  capture?: any
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
}

/**
 * 监听键盘事件
 * @param fn  事件处理函数
 * @param options   事件监听的配置
 * @param options.key  键盘事件的keyCode
 * @param options.event 事件类型, 默认为keydown
 * @param options.target 事件目标
 * @param options.capture 事件捕获
 * @param options.once 事件只监听一次
 * @param options.passive 事件是否可以被延迟响应
 * @param options.signal 事件取消标志
 */
export default function useKey<T extends Element>(fn: Handler = () => {}, options: Options<T> = {}) {
  const { key, event = 'keydown', target, ctrlKey, shiftKey, altKey, metaKey, ...restProps } = options
  const refFn = useRefCallback(fn)
  useEventListener(
    event,
    useCallback(
      (e) => {
        if(ctrlKey && !e.ctrlKey) return
        if(shiftKey && !e.shiftKey) return
        if(altKey && !e.altKey) return
        if(metaKey && !e.metaKey) return
        if(key && e.keyCode !== key) return
        refFn(e)
      },
      [key, refFn]
    ),
    { dom: target, ...restProps }
  )
}
