import { Draft } from 'immer';
export { Draft };
declare type Reducer<S> = (state: Draft<S>, payload: any) => void;
declare type Methods<S> = Record<string, Reducer<S>>;
export default function useMethodsImmer<S>(methods: Methods<S>, initialState: any, initializer?: any, Options?: any): [S, Record<string, any>];
