import { useCallback, useMemo } from 'react'
import useCascader from '../useCascader'

const setChildrenActive = ({ id, nodeMap, maxLevel, flatNodes, setActive }) => {
  const { level = 0 } = nodeMap[id] || {}
  if (level < maxLevel) {
    const nextLevelActiveId = flatNodes?.find(({ pid }) => id && id === pid)?.id
    nextLevelActiveId && setActive(nextLevelActiveId)
    if (maxLevel - level > 1) {
      setChildrenActive({ id: nextLevelActiveId, nodeMap, maxLevel, flatNodes, setActive })
    }
  }
}
export function useCategory({ data: initialData, autoActiveFirstChildrenCatLevel = 2 }) {
  const { data, flatNodes, activeIds, setActive, nodeMap, maxLevel } = useCascader({
    data: initialData,
  })

  const handleActive = useCallback(
    (id) => {
      setActive(id)
      autoActiveFirstChildrenCatLevel > 1 &&
        setChildrenActive({
          id,
          nodeMap,
          maxLevel: maxLevel > autoActiveFirstChildrenCatLevel ? autoActiveFirstChildrenCatLevel : maxLevel,
          flatNodes,
          setActive,
        })
    },
    [setActive, autoActiveFirstChildrenCatLevel, nodeMap, maxLevel, flatNodes],
  )

  const categorys: Record<string, typeof flatNodes> = useMemo(() => {
    const result = {}
    for (let level = 1; level - 1 < maxLevel; level++) {
      const currentActivedId = activeIds[level - 1]
      const parentActivedId = activeIds[level - 2]
      result[`level${level}`] =
        level === 1
          ? data?.map((v) => ({ ...v, isActive: currentActivedId === v.id }))
          : flatNodes
              ?.filter((v) => level - 2 >= 0 && parentActivedId && parentActivedId === v.pid)
              ?.map((v) => ({ ...v, isActive: currentActivedId === v.id }))
    }

    return result
  }, [activeIds, data, flatNodes, maxLevel])

  return {
    data,
    flatNodes,
    activeIds,
    setActive,
    handleActive,
    categorys,
  }
}
