import { useEffect, useCallback } from 'react'
import { useDebounceFn } from 'brick-hooks'

function useScrollInView(config, dep) {
  const {
    containerRef,
    targetRef,
    onScroll, // 提供一个接收解除监听的回调函数
  } = config

  const handleScroll = useCallback(
    (event) => {
      const containerH = containerRef?.current?.clientHeight
      // 获取滚动距离
      const rect = targetRef?.current?.getBoundingClientRect()
      // top 是loading组件的位置
      const top = rect ? rect.top : 0
      onScroll({ isInView: top < containerH, targetTop: top, containerH })
    },
    [onScroll]
  )

  const handleScrollDebounce = useDebounceFn(handleScroll)

  useEffect(() => {
    if (!containerRef || !targetRef) return

    const containerDom = containerRef.current
    containerDom.addEventListener('scroll', handleScrollDebounce)

    return () => {
      containerDom.removeEventListener('scroll', handleScrollDebounce)
    }
  }, [handleScrollDebounce, ...dep])
}

export default useScrollInView
