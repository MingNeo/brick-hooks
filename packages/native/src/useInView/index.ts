import { useCallback, useEffect, useRef, useState } from 'react'
import { useDebounceFn } from 'brick-hooks'

interface Options {
  target?: any
  root?: any
  onScroll?: any
  debounceWait?: number
  onInView?: (...args: any[]) => void
  onOutView?: (...args: any[]) => void
  rootMargin?: number
}

export default function useInView(
  {
    target,
    root,
    onInView, // 提供一个接收解除监听的回调函数
    onOutView, //
    rootMargin = 0,
    debounceWait = 300,
  }: Options = {} as Options
) {
  const containerRef = useRef<any>(root?.current ? root.current : root)
  const targetRef = useRef<any>(target?.current ? target.current : target)

  const getIsView = useCallback((scrollTop = 0) => {
    if (targetRef?.current?.getBoundingClientRect) {
      const containerTop = containerRef.current?.getBoundingClientRect?.().top
      const { top: targetTop, height } = targetRef?.current?.getBoundingClientRect() || {}
      const top = targetTop - containerTop
      return top < containerRef.current?.clientHeight + rootMargin && top > -height
    }
    const containerH = containerRef.current?.layout?.height ?? 0
    const top = targetRef.current?.layout?.y ?? 0
    return top < containerH + scrollTop + rootMargin && top > scrollTop - rootMargin
  }, [])

  const [{ isInView }, setStatus] = useState({ isInView: getIsView(containerRef.current?.scrollTop || 0) })

  const handleScroll = useCallback(
    (e) => {
      const isInView = getIsView(e.nativeEvent.contentOffset.y)
      setStatus({ isInView })
    },
    [getIsView]
  )

  useEffect(() => {
    isInView ? onInView?.() : onOutView?.()
  }, [isInView])

  const [onScrollDebounce] = useDebounceFn(handleScroll, debounceWait)

  return {
    isInView,
    rootProps: {
      ref: (ref) => (containerRef.current = ref),
      onScroll: onScrollDebounce,
    },
    targetProps: {
      ref: (ref) => (targetRef.current = ref),
    },
  }
}
