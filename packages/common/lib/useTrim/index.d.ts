/**
 * 对字符串数据进行自动去掉空格的处理, 基于useMemo封装
 * @param value
 * @param fullTrim 默认为false，即仅去除首尾空格，为true时将去掉字符串中所有空格
 * @returns
 */
export default function useTrim(value: string | undefined, fullTrim?: boolean): string;
