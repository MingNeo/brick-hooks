"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/rules-of-hooks */
var create_redux_store_1 = require("./create-redux-store");
/**
 * 当这个插件开启时，store-next的state会同步到redux-dev-tool
 * 具体来说，开启这个插件的时候，所有的store操作被redux接管，并在redux数据变化后通知到store-next更新数据
 * @param store store-next的store实例
 * @param reduxStoreName
 * @param initialState
 * @param reducers
 * @returns
 */
function openRedux(store, reduxStoreName, initialState, reducers) {
    // TODO 热更新的情况下需要特殊处理
    var reduxStore = create_redux_store_1.createReduxStore({ name: reduxStoreName, initialState: initialState, reducers: reducers });
    var dispatch = function (action) {
        if (action && typeof action === 'object' && typeof action.type === 'string') {
            reduxStore === null || reduxStore === void 0 ? void 0 : reduxStore.dispatch(action);
        }
    };
    // 订阅redux store的state并返回解除订阅的函数
    // 当redux store的state变化时，触发store-next的数据变更
    var unsubscribe = reduxStore === null || reduxStore === void 0 ? void 0 : reduxStore.subscribe(function () {
        var storeState = reduxStore === null || reduxStore === void 0 ? void 0 : reduxStore.getState();
        var prevState = store.getState();
        Array.from(store._modules).forEach(function (modeuleName) {
            var moduleState = storeState[modeuleName];
            if (prevState[modeuleName] !== moduleState) {
                store._setModuleState(modeuleName, moduleState, false);
            }
            prevState[modeuleName] = moduleState;
        });
    });
    return {
        registerModule: reduxStore.registerModule,
        dispatch: dispatch,
        unsubscribe: unsubscribe,
        replaceReducer: reduxStore.replaceReducer,
        reduxStore: reduxStore,
    };
}
exports.default = openRedux;
