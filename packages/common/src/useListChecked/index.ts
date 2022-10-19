import { useMemo } from 'react'
import { isNil } from '../utils'
import useMethods from '../useMethods'

type Id = string
interface Item extends Record<string, any> {
  id: Id
}

const checkedMapReducers = (state = {}) => {
  return {
    setChecked: (payload: { key: Id; checked: boolean }) => ({
      ...state,
      [payload.key]: payload.checked,
    }),

    toggleChecked: (payload: { key: Id; checked?: boolean }) => ({
      ...state,
      [payload.key]: payload.checked ?? !state[payload.key],
    }),

    setAllChecked: (checked: boolean) => Object.keys(state).reduce((prev, curr) => ({ ...prev, [curr]: checked }), {}),

    clearChecked: (state = {}) => Object.keys(state).reduce((prev, curr) => ({ ...prev, [curr]: false }), {}),

    expandCheckedMap: (payload: Item[] = []) =>
      payload.reduce((prev, curr) => ({ ...prev, [curr.id]: isNil(prev[curr.id]) ? false : prev[curr.id] }), state),
  }
}

/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中ids
 */
export default function useListChecked(items: Item[] = [], defaultSelecteds: Id[] = []) {
  const [checkedMap, methods] = useMethods(
    checkedMapReducers,
    items.reduce((prev, curr) => ({ ...prev, [curr.id]: defaultSelecteds.includes(curr.id) }), {}),
  )

  const { isAllChecked, checkedIds, toggleAllChecked } = useMemo(
    () => ({
      isAllChecked: !!Object.values(checkedMap).length && !Object.values(checkedMap).some((v) => !v),
      // 当前选中的key列表
      checkedIds: Object.keys(checkedMap).filter((key) => !!checkedMap[key]) as Id[],
      // 切换全选状态或设置为指定的全选状态
      toggleAllChecked: (checked?: boolean) => methods.setAllChecked(checked !== undefined ? checked : !isAllChecked),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkedMap],
  )

  const { setChecked, clearChecked, toggleChecked } = useMemo(() => {
    return {
      setChecked: (key: Id, checked: boolean) => methods.setChecked({ key, checked }),
      toggleChecked: (key: Id, checked?: boolean) => methods.toggleChecked({ key, checked }),
      // 清空选中
      clearChecked: () => methods.clearChecked(),
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ids列表变化时, 更新map数据, 动态载入下一页数据等时更新checkMap
  // useEffect(() => {
  // methods.expandCheckedMap(items)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [items])

  return {
    isAllChecked,
    checkedIds,
    setChecked,
    toggleChecked,
    toggleAllChecked,
    clearChecked,
    updateItems: methods.expandCheckedMap,
  }
}
