import { useListSequenceLoad, useTimeoutFn } from 'brick-hooks'
import { useRef } from 'react'
import useInView from '../useInView'

interface Options {
  target?: any[]
  root?: any
  groupSize?: number
  onLoadingInView?: (...args: any[]) => void
}

export default function useLazySequenceLoad(listData, { target, root, groupSize = 3, onLoadingInView }: Options) {
  const targetRef = useRef<any>(target)
  const rootRef = useRef<any>(root)
  const { showfooterLoading, showList, loadNextGroup } = useListSequenceLoad(listData, { groupSize })
  const [loadNextGroupAsync] = useTimeoutFn(loadNextGroup, 0)
  const { targetProps: loadingProps, rootProps } = useInView({
    target: targetRef,
    root: rootRef,
    onInView: () => {
      onLoadingInView ? onLoadingInView(loadNextGroupAsync) : loadNextGroupAsync()
    },
  })

  return {
    showfooterLoading,
    showList,
    rootProps,
    loadingProps,
  }
}
