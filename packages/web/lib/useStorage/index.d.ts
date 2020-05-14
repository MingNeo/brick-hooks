export declare function setStorage(key: string, value: any): void;
export declare function getStorage(key: string, initialValue?: any): any;
/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
export default function useLocalStorage<T>(itemName: string, initialValue?: any, watchStorageChange?: boolean): [T, (value: any) => void];
