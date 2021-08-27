import produce from 'immer';
import { useMemo, useReducer } from 'react';
/**
 * 使用immer的reducer
 * @param reducer immer形式组织的reducer
 * @param initialState 同React.Reducer的initialState
 * @param initializer 同React.Reducer的initializer
 */
export default function useImmerReducer(reducer, initialState, initializer) {
    const immerReducer = useMemo(() => produce(reducer), [reducer]);
    // @ts-ignore
    return useReducer(immerReducer, initialState, initializer);
}
