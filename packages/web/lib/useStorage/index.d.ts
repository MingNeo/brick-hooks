/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
export default function useStorage(itemName: string, initialValue?: any, { watchStorageChange, storageType }?: {
    watchStorageChange?: boolean;
    storageType?: string;
}): [any, (value: string | number | Record<string, any> | any[]) => void, () => void];
export declare const useLocalStorage: (itemName: string, initialValue?: any, { watchStorageChange }?: {
    watchStorageChange?: boolean;
}) => [any, (value: string | number | Record<string, any> | any[]) => void, () => void];
export declare const useSessionStorage: (itemName: string, initialValue?: any, { watchStorageChange }?: {
    watchStorageChange?: boolean;
}) => [any, (value: string | number | Record<string, any> | any[]) => void, () => void];
