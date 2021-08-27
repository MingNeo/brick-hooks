import { BoundMethods } from '../useMethods';
declare type SetState = (nextState: any, merge?: boolean) => void;
/**
 * 面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState
 * @param initialState 约定必须是一个object
 * @param methods 自定义reducers方法
 * @returns [state, setState, stateMethods]
 */
export default function useObjectState<S>(initialState?: S, methods?: Record<string, (...args: any[]) => S>): [S, SetState, BoundMethods];
export {};
