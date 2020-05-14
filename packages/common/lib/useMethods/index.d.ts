declare type Reducer = (...args: any[]) => any;
declare type Methods = Record<string, Reducer>;
export declare type BoundMethods = Record<string, (...args: any[]) => void>;
declare function useMethods<S>(methods: Methods, initialState: S): [S, Record<string, (...args: any[]) => void>, (actionName: string, ...args: any[]) => void];
export default useMethods;
