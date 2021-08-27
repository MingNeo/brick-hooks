import { useCallback } from 'react';
import useMethods from '../useMethods';
const defaultMethods = {
    _set: (prevState, payload) => typeof payload === 'function' ? payload(prevState) : payload,
    _setMerge: (prevState = {}, payload) => (Object.assign(Object.assign({}, (prevState || {})), (typeof payload === 'function' ? payload(prevState) : payload))),
};
/**
 * 面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState
 * @param initialState 约定必须是一个object
 * @param methods 自定义reducers方法
 * @returns [state, setState, stateMethods]
 */
export default function useObjectState(initialState = {}, methods = {}) {
    const [state, stateMethods] = useMethods(Object.assign(Object.assign({}, methods), defaultMethods), initialState);
    const setState = useCallback((nextState, merge = true) => merge ? stateMethods._setMerge(nextState) : stateMethods._set(nextState), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return [state, setState, stateMethods];
}
