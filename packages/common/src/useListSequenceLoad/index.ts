import { useMemo, useState, useCallback } from 'react'

interface Options {
  list?: any[]
  groupSize?: number
}

// 列表页以分组模式按需加载下一组，适用每个item各不相同情况。如首页装修/信息流
export default function useListSequenceLoad(listData = [],{ groupSize = 3 }: Options = {}) {
  const [showGroupIdx, setShowGroupIdx] = useState(1) // 当前动态加载的组

  const reset = useCallback(() => {
    setShowGroupIdx(1)
  }, [])

  // 可以渲染的组件列表
  return useMemo(() => {
    const nextRenderIndex = Math.max(showGroupIdx * groupSize, 0)
    const showList = listData.slice(0, Math.min(listData.length, nextRenderIndex))

    // 修改待渲染index到下一个
    const loadNextGroup = () => {
      setShowGroupIdx((prevIdx) => (prevIdx * groupSize - 1 < listData.length ? prevIdx + 1 : prevIdx))
    }

    return {
      showList,
      isAllLoaded: nextRenderIndex >= listData.length,
      showfooterLoading: nextRenderIndex < listData.length,
      nextRenderIndex,
      loadNextGroup,
      reset,
    }
  }, [listData, showGroupIdx, reset])
}
