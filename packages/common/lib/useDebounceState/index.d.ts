/**
 * 与React.useState用法一致，对数据进行自动防抖处理
 * @param initialState
 * @param wait
 */
export default function useDebounceState<S>(initialState: S | (() => S), wait?: number): [S, import("react").Dispatch<import("react").SetStateAction<S>>];
