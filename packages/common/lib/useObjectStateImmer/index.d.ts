declare type State = Record<string, any>;
declare type SetState = (nextState: any, merge?: boolean) => any;
declare type BoundMethod = (nextState: any, payload?: any) => any;
/**
 * 面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState
 * @param initialState 约定必须是一个object
 * @param methods 自定义reducers方法
 * @returns [state, setState, stateMethods]
 */
export default function useObjectStateImmer<S extends State>(initialState: S, methods: Record<string, (...args: any[]) => S>): [S, SetState, Record<string, BoundMethod>];
export {};
