import { useMemo } from 'react';
/**
 * 对字符串数据进行自动去掉空格的处理, 基于useMemo封装
 * @param value
 * @param fullTrim 默认为false，即仅去除首尾空格，为true时将去掉字符串中所有空格
 * @returns
 */
export default function useTrim(value, fullTrim = false) {
    return useMemo(() => trim(value || '', fullTrim), [fullTrim, value]);
}
function trim(target, fullTrim = false) {
    if (!fullTrim) {
        return target.trim();
    }
    return target.replace(/\s/gm, '');
}
