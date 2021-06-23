"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReduxStore = void 0;
var redux_1 = require("redux");
var omit = function (obj, keyToRemove) {
    return Object.keys(obj)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (acc, key) {
        acc[key] = obj[key];
        return acc;
    }, {});
};
function getModuleReducers(reducers, moduleName) {
    var baseReducers = Object.entries(__assign(__assign({}, ((reducers === null || reducers === void 0 ? void 0 : reducers._base) || {})), ((reducers === null || reducers === void 0 ? void 0 : reducers[moduleName]) || {}))).reduce(function (_baseReducers, _a) {
        var _b;
        var _c = __read(_a, 2), reducerName = _c[0], reducer = _c[1];
        return (__assign(__assign({}, _baseReducers), (_b = {}, _b[moduleName ? moduleName + "/" + reducerName : reducerName] = reducer, _b)));
    }, {});
    return baseReducers;
}
exports.createReduxStore = function (_a) {
    var name = _a.name, _b = _a.initialState, initialState = _b === void 0 ? {} : _b, _c = _a.reducers, reducers = _c === void 0 ? {} : _c;
    if (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION__) {
        return undefined;
    }
    var registeredReducers = reducers;
    var storeReducer = function (state, action) {
        var actionSplitResult = action.type.split('/');
        // 当前不支持‘a/b/c'格式action type
        var moduleName = actionSplitResult.length > 1 ? actionSplitResult[0] : undefined;
        var isInitModule = /\/_initModule$/.test(action.type);
        var isDeleteAction = /\/_deleteModule$/.test(action.type);
        var currentState = isDeleteAction && moduleName ? omit(state, moduleName) : __assign({}, state);
        var moduleReducers = getModuleReducers(registeredReducers, moduleName);
        var nextState = moduleName ? Object.entries(moduleReducers).reduce(function (state, _a) {
            var _b = __read(_a, 2), reducerName = _b[0], reducer = _b[1];
            var moduleState = state[moduleName];
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
    var store = redux_1.createStore(storeReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__({
        name: name || 'React state',
        actionsBlacklist: ['/_deleteModule'],
    }));
    store.clearModule = function (moduleName) {
        delete registeredReducers[moduleName];
        store.dispatch({
            type: moduleName + "/_deleteModule",
        });
    };
    store.registerModule = function (moduleName, reducers, initialState) {
        registeredReducers[moduleName] = reducers;
        store.dispatch({
            type: moduleName + "/_initModule",
            payload: initialState,
        });
        return function () {
            store.clearModule(moduleName);
        };
    };
    return store;
};
