/**
 * 在每次更新时进行深比较，并返回新的值
 * 深比较比较耗性能，慎用
 */
export default function useDeepCompare(value: any): {
    value: any;
    isEqual: boolean;
};
