export function combineReducers(reducers = {}, defaultReducers = {}) {
    return Object.entries(reducers).reduce((prev, [moduleName, value]) => {
        if (value)
            prev[moduleName] = value;
        return prev;
    }, { _base: defaultReducers });
}
export function combState(modules = {}) {
    return Object.entries(modules).reduce((prev, [moduleName, value]) => {
        if (value)
            prev[moduleName] = value.state;
        return prev;
    }, {});
}
export function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
