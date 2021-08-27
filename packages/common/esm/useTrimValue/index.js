import { useState } from 'react';
/**
 * 对字符串数据进行去掉空格的处理, 用法同useState
 * @param initialValue
 * @param fullTrim 默认为false，即仅去除首尾空格，为true时将去掉字符串中所有空格
 * @returns
 */
export default function useTrimValue(initialValue, fullTrim = false) {
    const [trimState, setState] = useState(trim(initialValue || '', fullTrim));
    const setTrimState = (state) => {
        setState(typeof state === 'function'
            ? (oldState) => trim(state(oldState), fullTrim)
            : trim(state, fullTrim));
    };
    return [trimState, setTrimState];
}
function trim(target, fullTrim = false) {
    if (!fullTrim) {
        return target.trim();
    }
    return target.replace(/\s/gm, '');
}
