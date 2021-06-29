/**
 * 在每次更新时进行深比较，并返回新的值
 * 深比较比较耗性能，慎用
 */
export default function useDeepCompare(value: Record<string, any> | any[]): {
    value: any[] | Record<string, any>;
    isEqual: boolean;
};
