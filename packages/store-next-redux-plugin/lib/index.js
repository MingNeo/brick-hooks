"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var open_redux_1 = __importDefault(require("./open-redux"));
/**
 * 使用这个插件后，store-next的将使用redux，同时可使用redux-dev-tool
 * 具体来说，开启这个插件的时候，所有的store操作被redux接管，并在redux数据变化后通知到store-next更新数据
 * 使用这个插件和不使用这个插件对业务端的表现完全一致，因此可以通过配置仅在开发环境使用此插件
 * @param Store
 * @returns
 */
function reduxPlugin(Store) {
    // 如果浏览器/debugger 工具没有安装redux-devtool，直接返回空处理
    if (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION__) {
        return function initial(store) { };
    }
    var StoreOriginRegisterModule = Store.prototype.registerModule;
    Store.prototype.registerModule = function afterRegisterModule(moduleName, initialModule) {
        var _a;
        StoreOriginRegisterModule.call(this, moduleName, initialModule);
        (_a = this._registerReduxModule) === null || _a === void 0 ? void 0 : _a.call(this, moduleName, this._reducers[moduleName], this._state[moduleName]);
    };
    var StoreOriginSetState = Store.prototype.setState;
    Store.prototype.setState = function (nextState) {
        // 如果开启了devtool，使用redux修改值，并同步过来，否则直接修改
        if (this._dispatchRedux) {
            this._dispatchRedux({ type: '$setValue', payload: nextState });
        }
        else {
            StoreOriginSetState.call(this, nextState);
        }
    };
    var StoreOriginSetModuleState = Store.prototype.setModuleState;
    Store.prototype.setModuleState = function (moduleName, nextState, merge) {
        if (!moduleName)
            return;
        if (this._dispatchRedux) {
            this._dispatchRedux({
                type: merge ? moduleName + "/$setValueMerge" : moduleName + "/$setValue",
                payload: nextState,
            });
        }
        else {
            StoreOriginSetModuleState.call(this, moduleName, nextState, merge);
        }
    };
    var StoreOriginDispatchModuleAction = Store.prototype.dispatchModuleAction;
    Store.prototype.dispatchModuleAction = function (moduleName, actionName, payload) {
        console.log("🚀 ~ file: index.ts ~ line 48 ~ dispatchModuleAction", this._dispatchRedux, moduleName, actionName, payload);
        if (!moduleName)
            return;
        if (this._dispatchRedux) {
            this._dispatchRedux({
                type: moduleName + "/" + actionName,
                payload: payload,
            });
        }
        else {
            StoreOriginDispatchModuleAction.call(this, moduleName, actionName, payload);
        }
    };
    Store.prototype.initRedux = function (initialState, options) {
        var _a = open_redux_1.default(this, options.devtoolId, initialState, this._reducers), dispatch = _a.dispatch, unsubscribe = _a.unsubscribe, registerModule = _a.registerModule, reduxStore = _a.reduxStore;
        this._reduxStore = reduxStore;
        this._dispatchRedux = dispatch;
        this._unsubscribeRedux = unsubscribe;
        this._registerReduxModule = registerModule;
    };
    return function initial(store) {
        !store._reduxStore && store.initRedux(store._state, store._options);
    };
}
exports.default = reduxPlugin;
