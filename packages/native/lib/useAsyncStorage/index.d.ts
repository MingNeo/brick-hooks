declare type GetValue = (itemName: string) => Promise<any>;
declare type SetValue = (value: string | number | Record<string, any> | any[]) => void;
declare type Clear = () => void;
declare type Callback = (nextValue: any) => void;
/**
 * 方便使用react-native的AsyncStorage
 * @param itemName
 * @param onStorageValueChange 当storage数据变化时触发回调函数，仅对使用useStorage的setValue/clear方法更新数据有效。
 */
export default function useAsyncStorage(itemName: string, onStorageValueChange: Callback): {
    getValue: GetValue;
    setValue: SetValue;
    clear: Clear;
};
export {};
