import { combineReducers, isObject } from './utils';
function getNextState(prevState, nextState) {
    return typeof nextState === 'function' ? nextState(prevState) : nextState;
}
/**
 * 默认的reducer, 提供两种模式，直接覆盖, 和自动合并(需数据格式是object，否则自动使用setValue)
 * @param prevState
 * @param action
 */
export const defaultReducers = {
    $setValueMerge: (prevState, value) => isObject(value)
        ? Object.assign(Object.assign({}, (prevState || {})), (getNextState(prevState, value) || {})) : defaultReducers.$setValue(prevState, value),
    $setValue: (prevState, value) => getNextState(prevState, value),
};
export function getReducer(modules = {}) {
    const reducers = Object.entries(modules).reduce((prev, [moduleName, value]) => {
        if (value)
            prev[moduleName] = value.reducers;
        return prev;
    }, {});
    return combineReducers(reducers, defaultReducers);
}
