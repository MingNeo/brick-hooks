import { useCallback, useMemo, useEffect } from 'react';
import useMethods from '../useMethods';
const checkedMapReducers = {
    setChecked: (checkedMap = {}, payload) => (Object.assign(Object.assign({}, checkedMap), { [payload.key]: payload.checked })),
    setAllChecked: (checkedMap = {}, checked) => Object.keys(checkedMap).reduce((prev, curr) => (Object.assign(Object.assign({}, prev), { [curr]: checked })), {}),
    clearChecked: () => ({}),
    expandCheckedMap: (checkedMap = {}, payload = []) => (Object.assign(Object.assign({}, payload.reduce((prev, curr) => (Object.assign(Object.assign({}, prev), { [curr]: false })), {})), checkedMap)),
};
/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中ids
 */
export default function useListChecked(items = [], defaultSelecteds = []) {
    // 当前已选中
    const currCheckedMap = useMemo(() => items.reduce((prev, curr) => (Object.assign(Object.assign({}, prev), { [curr]: defaultSelecteds.includes(curr) })), {}), [items, defaultSelecteds]);
    const [checkedMap, checkedMapMethods] = useMethods(checkedMapReducers, currCheckedMap);
    const { isAllChecked, checkedIds } = useMemo(() => ({
        isAllChecked: !!Object.values(checkedMap).length && !Object.values(checkedMap).some((v) => !v),
        // 当前选中的key列表
        checkedIds: Object.keys(checkedMap).filter((key) => !!checkedMap[key]),
    }), [checkedMap]);
    const { setChecked, clearChecked } = useMemo(() => {
        return {
            setChecked: (key, checked) => checkedMapMethods.setChecked({ key, checked }),
            // 清空选中
            clearChecked: checkedMapMethods.clearChecked,
        };
    }, []);
    // 切换全选状态或设置为指定的全选状态
    const toggleAllChecked = useCallback((checked) => checkedMapMethods.setAllChecked(checked !== undefined ? checked : !isAllChecked), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAllChecked]);
    // ids列表变化时, 更新map数据, 动态载入下一页数据等时更新checkMap
    useEffect(() => {
        checkedMapMethods.expandCheckedMap(items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);
    return {
        isAllChecked,
        checkedIds,
        checkedMap,
        setChecked,
        toggleAllChecked,
        clearChecked,
    };
}
