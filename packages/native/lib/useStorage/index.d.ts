/**
 *
 * @param itemName
 * @param initialValue
 */
export default function useStorage(itemName: string, initialValue?: any): [any, (value: string | number | Record<string, any> | any[]) => void, () => void];
