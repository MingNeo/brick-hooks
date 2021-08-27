var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useMemo } from 'react';
function registerModule(moduleName, initialModule) {
    if (this._effectPluginOpened)
        return;
    this._effects = this._effects || {};
    (initialModule === null || initialModule === void 0 ? void 0 : initialModule.effects) && (this._effects[moduleName] = initialModule === null || initialModule === void 0 ? void 0 : initialModule.effects);
    this._effectPluginOpened = true;
}
function getUseStore(store, originGetUseStore, dispatchModuleEffectAction) {
    const useStoreStore = originGetUseStore.call(store);
    return function useStore(moduleName = '', autoMerge = false, willUpdate = true) {
        const [moduleState, setStore, boundMethods] = useStoreStore(moduleName, autoMerge, willUpdate);
        return useMemo(() => ([
            moduleState,
            setStore,
            Object.assign(Object.assign({}, boundMethods), { dispatchEffect: dispatchModuleEffectAction.bind(store, moduleName) }),
        ]), [boundMethods, moduleState, setStore, moduleName]);
    };
}
export function getEffects(modules = {}) {
    return Object.entries(modules).reduce((prev, [moduleName, value]) => {
        if (value)
            prev[moduleName] = value.effects;
        return prev;
    }, {});
}
/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @param Store
 * @returns
 */
export default function effectPlugin(Store) {
    const StoreOriginRegisterModule = Store.prototype.registerModule;
    Store.prototype.registerModule = function afterRegisterModule(moduleName, initialModule) {
        StoreOriginRegisterModule.call(this, moduleName, initialModule);
        registerModule.call(this, moduleName, initialModule);
    };
    function dispatchModuleEffectAction(moduleName, actionName, payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!moduleName)
                return;
            const handler = (_b = (_a = this._effects) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[actionName];
            if (!handler)
                throw new Error(`not found effect ${actionName}`);
            const rootState = this._state;
            const prevState = this._state[moduleName];
            const dispatch = (commitActionName, commitPayload) => {
                Store.prototype.dispatchModuleAction.bind(this, moduleName)(commitActionName, commitPayload);
            };
            const dispatchEffect = (effectActionName, effectPayload, module = moduleName) => {
                Store.prototype.dispatchModuleEffectAction.bind(this, module)(effectActionName, effectPayload);
            };
            return handler({ state: prevState, dispatch, dispatchEffect, rootState }, payload);
        });
    }
    const StoreOriginInitialBase = Store.prototype.initialBase;
    Store.prototype.initialBase = function (options) {
        this._options = this._options || options;
        const { modules = {} } = this._options || {};
        StoreOriginInitialBase.call(this, options);
        this._effects = getEffects(modules);
        // this.useStore = this.getUseStore()
    };
    Store.prototype.dispatchModuleEffectAction = dispatchModuleEffectAction;
    const StoreOriginGetUseStore = Store.prototype.getUseStore;
    Store.prototype.initEffects = function () {
        this._effects = this._effects || {};
        this.getUseStore = getUseStore.bind(this, this, StoreOriginGetUseStore.bind(this), dispatchModuleEffectAction);
        // this.useStore = this.getUseStore()
    };
    return function initial(store) {
        store.initEffects();
    };
}
