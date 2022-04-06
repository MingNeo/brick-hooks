import { useCallback } from 'react'
import { useRefCallback } from 'brick-hooks'
import useEventListener from '../useEventListener'

export type KeyPredicate = (event: KeyboardEvent) => boolean
export type Handler = (event: KeyboardEvent) => void

export interface Options<T> {
  event?: 'keydown' | 'keypress' | 'keyup'
  target?: T | null
  capture?: any
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
}

export default function useKey<T extends Element>(key: string, fn: Handler = () => {}, options: Options<T> = {}) {
  const { event = 'keydown', target } = options
  const refFn = useRefCallback(fn)
  useEventListener(
    event,
    useCallback(
      (e) => {
        if (e.key === key) {
          return refFn(e)
        }
      },
      [key, refFn]
    ),
    { dom: target }
  )
}
