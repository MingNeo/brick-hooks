import { useDebounceFn } from 'brick-hooks'
import { useCallback, useRef } from 'react'

interface Options {
  onScroll?: any
  debounceWait?: number
}

function useScrollInView(options: Options) {
  const {
    onScroll, // 提供一个接收监听的回调函数
    debounceWait = 500,
  } = options

  const containerRef = useRef<any>()
  const targetRef = useRef<any>()
  const handleScroll = useCallback(
    (event) => {
      const { clientHeight, scrollTop } = event.target
      // 获取滚动距离
      const rect = targetRef.current?.getBoundingClientRect?.()
      // top 是loading组件的位置
      const top = rect ? rect.top : 0
      onScroll({ isInView: top < clientHeight && top > scrollTop, targetTop: top, containerH: clientHeight })
    },
    [containerRef, onScroll, targetRef]
  )

  const handleScrollDebounce = useDebounceFn(handleScroll, debounceWait)

  return {
    containerProps: {
      ref: (ref) => (containerRef.current = ref),
      onScroll: handleScrollDebounce,
    },
    targetProps: {
      ref: (ref) => (targetRef.current = ref),
    },
  }
}

export default useScrollInView
