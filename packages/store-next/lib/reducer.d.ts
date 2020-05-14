import { StoreState } from './base';
/**
 * 默认的reducer, 提供两种模式，直接覆盖, 和自动合并(需数据格式是object，否则自动使用setValue)
 * @param prevState
 * @param action
 */
export declare const defaultReducers: {
    $setValueMerge: (prevState: StoreState, value: StoreState | any) => any;
    $setValue: (prevState: StoreState, value: StoreState | any) => any;
};
export declare function getReducer(modules?: {}): {
    _base: {};
};
