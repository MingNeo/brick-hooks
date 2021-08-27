declare type setTrimState = (state: string | ((oldState: string | undefined) => string | undefined)) => void;
/**
 * 对字符串数据进行去掉空格的处理, 用法同useState
 * @param initialValue
 * @param fullTrim 默认为false，即仅去除首尾空格，为true时将去掉字符串中所有空格
 * @returns
 */
export default function useTrimValue(initialValue: string | undefined, fullTrim?: boolean): [string, setTrimState];
export {};