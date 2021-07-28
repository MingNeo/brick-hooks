import { Draft } from 'immer';
import { Dispatch } from 'react';
declare type Reducer<S, A> = (state: Draft<S>, action: A) => void;
/**
 * 使用immer的reducer
 * @param reducer immer形式组织的reducer
 * @param initialState 同React.Reducer的initialState
 * @param initializer 同React.Reducer的initializer
 */
export default function useImmerReducer<S = any, A = any>(reducer: Reducer<S, A>, initialState: S, initializer?: (initial: any) => S): [S, Dispatch<A>];
export {};
