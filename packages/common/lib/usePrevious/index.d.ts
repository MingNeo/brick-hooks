export declare function usePreviousRenderValue<S>(value: S): S;
/**
 * 获取上一次的值
 * @param value
 * @param equalsMode 是否仅变更时更新值，默认为true，即只有每次值变化时更新上一次的值。equalsMode = false 则每次函数组件render都返回上次render时的值
 */
export default function usePrevious<S>(value: S, equalsMode?: boolean): S;
