"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStoreState = exports.getStoreState = exports.usePlugins = exports.registerModule = exports.createStore = exports.useStore = exports.store = exports.Store = void 0;
var base_1 = __importStar(require("./base"));
exports.createStore = base_1.default;
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return base_1.Store; } });
var store = base_1.default();
exports.store = store;
var useStore = function (moduleName, assign, willUpdate) {
    if (willUpdate === void 0) { willUpdate = true; }
    var useStoreStore = store.getUseStore();
    return useStoreStore(moduleName, assign, willUpdate);
};
exports.useStore = useStore;
var registerModule = (useStore.registerModule = function (moduleName, initialModule) {
    store.registerModule(moduleName, initialModule);
});
exports.registerModule = registerModule;
/**
 * 对全局store 开启插件，这不是一个React hooks
 */
var usePlugins = (useStore.usePlugins = function (plugins) {
    if (plugins && plugins.length) {
        plugins.forEach(function (plugin) { return base_1.Store.usePlugin(plugin); });
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // 因为在createStore之后调用，所以需要重新初始化一下
        store.init();
    }
});
exports.usePlugins = usePlugins;
/**
 * 对获取全局单一实例的globalState
 * @returns
 */
var getStoreState = function () {
    return store.getState();
};
exports.getStoreState = getStoreState;
/**
 * 设置全局单一实例的globalState
 * @param nextState
 * @returns
 */
var setStoreState = function (nextState) {
    return store.setState(nextState);
};
exports.setStoreState = setStoreState;
