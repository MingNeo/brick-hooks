import { useCallback, useMemo, useEffect, useReducer } from 'react';

const checkedMapReducer = (checkedMap, action) => {
  switch (action.type) {
    case 'SET_CHECKED': {
      const { key, checked } = action;
      return { ...checkedMap, [key]: checked };
    }
    case 'SET_ALL_CHECKED': {
      const { checked } = action;
      return Object.keys(checkedMap).reduce((prev, curr) => ({ ...prev, [curr]: checked }), {});
    }
    case 'SET_CHECKED_MAP': {
      return action.payload;
    }
    case 'EXPAND_CHECKED_MAP': {
      const { payload = [] } = action;
      return payload.reduce((prev, curr) => (prev[curr] !== undefined ? prev : { ...prev, [curr]: false }), checkedMap);
    }
    default:
      return checkedMap;
  }
};

/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中的map
 */
export default function useListChecked(items = [], defaultSelecteds = []) {
  // 当前已选中
  const currCheckedMap = useMemo(() => items.reduce((prev, curr) => ({ ...prev, [curr]: defaultSelecteds.includes(curr) }), {}), [
    items,
    defaultSelecteds,
  ]);
  const [checkedMap, dispatch] = useReducer(checkedMapReducer, currCheckedMap);

  const setChecked = (key, checked) => dispatch({ type: 'SET_CHECKED', key, checked }); // 切换全选

  const isAllChecked = useMemo(() => !!Object.values(checkedMap).length && !Object.values(checkedMap).some((v) => !v), [checkedMap]);

  const setAllChecked = (checked) => dispatch({ type: 'SET_ALL_CHECKED', checked });

  // 扩展checkMap，用于动态载入下一页数据等时更新checkMap
  const updateCheckMap = (newItems) => dispatch({ type: 'EXPAND_CHECKED_MAP', payload: newItems });

  // ids列表变化时, 更新map数据
  useEffect(() => {
    updateCheckMap(items);
  }, [items]);

  // 切换全选状态或设置为指定的全选状态
  const toggleAllChecked = useCallback((checked) => setAllChecked(checked !== undefined ? checked : !isAllChecked), [isAllChecked]);

  // 清空选中
  const clearChecked = () => dispatch({ type: 'SET_CHECKED_MAP', payload: {} });

  // 当前选中的key列表
  const checkedList = useMemo(() => Object.keys(checkedMap).filter((key) => !!checkedMap[key]), [checkedMap]);

  return {
    isAllChecked, // 是否全选
    checkedList, // 选中的ID列表
    checkedMap, // checked map
    setChecked, // 按id设置选中状态
    toggleAllChecked, // 切换全选状态
    clearChecked, // 清空选中列表
  };
}
