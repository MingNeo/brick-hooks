declare type Reducer = (...args: any[]) => any;
declare type Dispatch = (actionName: string, ...args: any[]) => void;
declare type Methods = Record<string, Reducer>;
export interface BoundMethods extends Record<string, (...args: any[]) => void> {
    dispatch: Dispatch;
}
declare function useMethods<S>(methods: Methods, initialState: S | (() => S)): [S, BoundMethods, Dispatch];
export default useMethods;
