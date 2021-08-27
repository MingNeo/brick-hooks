import useArray from '../useArray';
import useListData from '../useListData';
/**
 * 基于useArray及useListData，对Record<string, any>[]格式的数据更新时进行自动处理，可以使用自定义处理函数对数据进行处理
 */
export default function useListState(initialValue, transform) {
    const [state, arrayMethods] = useArray(initialValue);
    const listState = useListData(state, transform);
    return [listState, arrayMethods];
}
