declare type Reducer<S> = (state: S, ...payload: any[]) => void;
declare type Methods<S> = (state: S) => Record<string, Reducer<S>>;
export default function useMethodsImmer<S>(methods: Methods<S>, initialState: any, initializer?: any, Options?: any): [S, Record<string, any>];
export {};
