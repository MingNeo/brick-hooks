/**
 * 列表的多选hooks，选择，全选，已选
 * @param {array} items 所有id
 * @param {array} defaultSelecteds 当前已选中ids
 */
export default function useListChecked(items?: (string | number)[], defaultSelecteds?: (string | number)[]): {
    isAllChecked: boolean;
    checkedIds: string[];
    checkedMap: {};
    setChecked: (key: string, checked: boolean) => void;
    toggleAllChecked: (checked: any) => void;
    clearChecked: () => void;
};