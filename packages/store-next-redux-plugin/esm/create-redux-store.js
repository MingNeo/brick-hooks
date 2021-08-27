import { createStore } from 'redux';
const omit = (obj, keyToRemove) => Object.keys(obj)
    .filter((key) => key !== keyToRemove)
    .reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
}, {});
function getModuleReducers(reducers, moduleName) {
    const baseReducers = Object.entries(Object.assign(Object.assign({}, ((reducers === null || reducers === void 0 ? void 0 : reducers._base) || {})), ((reducers === null || reducers === void 0 ? void 0 : reducers[moduleName]) || {}))).reduce((_baseReducers, [reducerName, reducer]) => (Object.assign(Object.assign({}, _baseReducers), { [moduleName ? `${moduleName}/${reducerName}` : reducerName]: reducer })), {});
    return baseReducers;
}
export const createReduxStore = ({ name, initialState = {}, reducers = {} }) => {
    if (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION__) {
        return undefined;
    }
    const registeredReducers = reducers;
    const storeReducer = (state, action) => {
        const actionSplitResult = action.type.split('/');
        // 当前不支持‘a/b/c'格式action type
        const moduleName = actionSplitResult.length > 1 ? actionSplitResult[0] : undefined;
        const isInitModule = /\/_initModule$/.test(action.type);
        const isDeleteAction = /\/_deleteModule$/.test(action.type);
        const currentState = isDeleteAction && moduleName ? omit(state, moduleName) : Object.assign({}, state);
        const moduleReducers = getModuleReducers(registeredReducers, moduleName);
        const nextState = moduleName ? Object.entries(moduleReducers).reduce((state, [reducerName, reducer]) => {
            const moduleState = state[moduleName];
            if (isInitModule) {
                state[moduleName] = action.payload;
            }
            else if (action.type === reducerName) {
                state[moduleName] = reducer(moduleState, action.payload);
            }
            return state;
        }, currentState) : currentState;
        return nextState;
    };
    console.log('name', name);
    const store = createStore(storeReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__({
        name: name || 'React state',
        actionsBlacklist: ['/_deleteModule'],
    }));
    store.clearModule = (moduleName) => {
        delete registeredReducers[moduleName];
        store.dispatch({
            type: `${moduleName}/_deleteModule`,
        });
    };
    store.registerModule = (moduleName, reducers, initialState) => {
        registeredReducers[moduleName] = reducers;
        store.dispatch({
            type: `${moduleName}/_initModule`,
            payload: initialState,
        });
        return () => {
            store.clearModule(moduleName);
        };
    };
    return store;
};
