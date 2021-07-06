import { useCallback, useMemo, useEffect } from 'react'
import useMethods from '../useMethods'

const checkedMapReducers = {
  setChecked: (checkedMap = {}, payload: { key: string | number; checked: boolean }) => ({
    ...(checkedMap || {}),
    [payload.key]: payload.checked,
  }),
  setAllChecked: (checkedMap = {}, checked: boolean) =>
    Object.keys(checkedMap).reduce((prev, curr) => ({ ...prev, [curr]: checked }), {}),
  clearChecked: () => ({}),
  expandCheckedMap: (checkedMap = {}, payload = []) => ({
    ...payload.reduce((prev, curr) => ({ ...prev, [curr]: false }), {}),
    ...checkedMap,
  }),
}

/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中的map
 */
export default function useListChecked(items: string[] = [], defaultSelecteds: string[] = []) {
  // 当前已选中
  const currCheckedMap = useMemo(
    () => items.reduce((prev, curr) => ({ ...prev, [curr]: defaultSelecteds.includes(curr) }), {}),
    [items, defaultSelecteds]
  )

  const [checkedMap, checkedMapMethods] = useMethods(checkedMapReducers, currCheckedMap)
  const { isAllChecked, checkedIds } = useMemo(
    () => ({
      isAllChecked:
        !!Object.values(checkedMap).length && !Object.values(checkedMap).some((v) => !v),
      // 当前选中的key列表
      checkedIds: Object.keys(checkedMap).filter((key) => !!checkedMap[key]),
    }),
    [checkedMap]
  )

  const setChecked = useCallback(
    (key: string, checked: boolean) => checkedMapMethods.setChecked({ key, checked }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // 切换全选状态或设置为指定的全选状态
  const toggleAllChecked = useCallback(
    (checked) => checkedMapMethods.setAllChecked(checked !== undefined ? checked : !isAllChecked),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAllChecked]
  )

  // 清空选中
  const clearChecked = () => checkedMapMethods.clearChecked()

  // ids列表变化时, 更新map数据, 动态载入下一页数据等时更新checkMap
  useEffect(() => {
    checkedMapMethods.expandCheckedMap(items)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return {
    isAllChecked,
    checkedIds,
    checkedMap,
    setChecked,
    toggleAllChecked,
    clearChecked,
  }
}
