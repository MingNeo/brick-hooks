/**
 * 这个hooks 返回一个memo的值，可以使用compare函数与自身的上一次值做比较
 * @param nextValue
 * @param compare
 */
export default function useMemoCompare(nextValue: any, compare: (prev: any, curr: any) => any): any;
