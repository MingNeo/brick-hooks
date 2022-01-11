import { useTimeoutFn } from 'brick-hooks'

/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScrollToTop(ref: any, { animated = true }: { animated?: boolean } = {}) {
  const [asyncScrollTopTop] = useTimeoutFn(() => {
    const scrollTo = ref?.current?.scrollToTop || ref?.current?.scrollTo
    scrollTo && scrollTo({ y: top, animated })
  }, 0)

  return asyncScrollTopTop
}
