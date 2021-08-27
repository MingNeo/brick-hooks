declare type SetValue = (value?: string | number | Record<string, any> | any[]) => void;
declare type Clear = () => void;
/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
export default function useStorage(itemName: string, initialValue?: any, { watchStorageChange, storageType }?: {
    watchStorageChange?: boolean;
    storageType?: string;
}): [any, SetValue, {
    clear: Clear;
}];
export declare const useLocalStorage: (itemName: string, initialValue?: any, { watchStorageChange }?: {
    watchStorageChange?: boolean;
}) => [any, SetValue, {
    clear: Clear;
}];
export declare const useSessionStorage: (itemName: string, initialValue?: any, { watchStorageChange }?: {
    watchStorageChange?: boolean;
}) => [any, SetValue, {
    clear: Clear;
}];
export {};
