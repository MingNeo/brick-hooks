import { useListSequenceLoad, useTimeoutFn } from 'brick-hooks'
import { useRef } from 'react'
import useInView from '../useInView'

interface Options {
  target?: Element // 指定一个dom 节点，即底部的loading节点，可以不传直接使用loadingProps
  root?: Element // 滚动的容器
  groupSize?: number // 组大小，每几个元素为一组，默认为3
  onLoadingInView?: (loadNextGroupCallback: () => void) => void // 如不自动加载下一组，则可以手工处理inView事件
  rootMargin?: number // 参见https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  threshold?: number | number[] // 参见https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  wait?: number // loading 进入可视区域后等待多久加载下一组，默认为0
}

export default function useLazySequenceLoad(
  listData: any[],
  { target, root, groupSize = 3, onLoadingInView, rootMargin, threshold, wait = 0 }: Options,
) {
  const targetRef = useRef<any>(target)
  const rootRef = useRef<any>(root)

  const { showfooterLoading, showList, loadNextGroup } = useListSequenceLoad(listData, { groupSize })
  const [loadNextGroupAsync] = useTimeoutFn(loadNextGroup, wait)

  const { targetProps: loadingProps, rootProps } = useInView({
    target: targetRef,
    root: rootRef,
    onInView: () => {
      onLoadingInView ? onLoadingInView(loadNextGroupAsync) : loadNextGroupAsync()
    },
    rootMargin,
    threshold,
  })

  return {
    showfooterLoading,
    showList,
    rootProps,
    loadingProps,
  }
}
