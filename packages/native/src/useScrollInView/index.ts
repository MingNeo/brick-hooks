import { useCallback, useRef } from 'react'
import { useDebounceFn } from 'brick-hooks'

interface Options {
  onScroll?: any
  debounceWait?: number
}

export default function useScrollInView({
  onScroll, // 提供一个接收解除监听的回调函数
  debounceWait = 500,
}: Options) {
  // const containerInfoRef = useRef<any>()
  const containerRef = useRef<any>()
  const scrollTopRef = useRef<any>()
  const targetRef = useRef<any>()
  // const targetTopRef = useRef<any>()
  // const onContainerLayout = (e) => {
  //   containerInfoRef.current = e?.nativeEvent?.layout || {}
  // }

  // const onTargetLayout = (e) => {
  //   targetTopRef.current = e?.nativeEvent?.layout?.y
  // }

  const handleScroll = useCallback(
    (e) => {
      scrollTopRef.current = e.nativeEvent.contentOffset.y
      // const containerH = containerInfoRef.current?.height ?? 0
      const containerH = containerRef.current?.layout?.height ?? 0
      const scrollTop = scrollTopRef.current ?? 0
      // const top = targetTopRef.current ?? 0
      const top = targetRef.current?.layout?.y ?? 0
      onScroll({ isInView: top < containerH + scrollTop && top > scrollTop, targetTop: top, containerH })
    },
    [onScroll]
  )

  const onScrollDebounce = useDebounceFn(handleScroll, debounceWait)

  return {
    containerProps: {
      ref: (ref) => (containerRef.current = ref),
      // onLayout: onContainerLayout,
      onScroll: onScrollDebounce,
    },
    targetProps: {
      ref: (ref) => (targetRef.current = ref),
      // onLayout: onTargetLayout,
    },
  }
}
