import { Draft } from 'immer';
declare type Reducer<S, A> = (state: Draft<S>, action: A) => void;
/**
 * 使用immer的reducer
 * @param reducer immer形式组织的reducer
 * @param initialState 同React.Reducer的initialState
 * @param initializer 同React.Reducer的initializer
 * @returns
 */
export default function useReducerImmer<S, A>(reducer: Reducer<S, A>, initialState: S, initializer?: (initial: any) => S): [S, import("react").Dispatch<A>];
export {};
