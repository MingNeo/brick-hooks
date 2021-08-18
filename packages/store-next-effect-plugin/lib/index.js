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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.getEffects = void 0;
var react_1 = require("react");
function registerModule(moduleName, initialModule) {
    if (this._effectPluginOpened)
        return;
    this._effects = this._effects || {};
    (initialModule === null || initialModule === void 0 ? void 0 : initialModule.effects) && (this._effects[moduleName] = initialModule === null || initialModule === void 0 ? void 0 : initialModule.effects);
    this._effectPluginOpened = true;
}
function getUseStore(store, originGetUseStore, dispatchModuleEffectAction) {
    var useStoreStore = originGetUseStore.call(store);
    return function useStore(moduleName, autoMerge, willUpdate) {
        if (moduleName === void 0) { moduleName = ''; }
        if (autoMerge === void 0) { autoMerge = false; }
        if (willUpdate === void 0) { willUpdate = true; }
        var _a = __read(useStoreStore(moduleName, autoMerge, willUpdate), 3), moduleState = _a[0], setStore = _a[1], boundMethods = _a[2];
        return react_1.useMemo(function () { return ([
            moduleState,
            setStore,
            __assign(__assign({}, boundMethods), { dispatchEffect: dispatchModuleEffectAction.bind(store, moduleName) }),
        ]); }, [boundMethods, moduleState, setStore, moduleName]);
    };
}
function getEffects(modules) {
    if (modules === void 0) { modules = {}; }
    return Object.entries(modules).reduce(function (prev, _a) {
        var _b = __read(_a, 2), moduleName = _b[0], value = _b[1];
        if (value)
            prev[moduleName] = value.effects;
        return prev;
    }, {});
}
exports.getEffects = getEffects;
/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @param Store
 * @returns
 */
function effectPlugin(Store) {
    var StoreOriginRegisterModule = Store.prototype.registerModule;
    Store.prototype.registerModule = function afterRegisterModule(moduleName, initialModule) {
        StoreOriginRegisterModule.call(this, moduleName, initialModule);
        registerModule.call(this, moduleName, initialModule);
    };
    function dispatchModuleEffectAction(moduleName, actionName, payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var handler, rootState, prevState, dispatch, dispatchEffect;
            var _this = this;
            return __generator(this, function (_c) {
                if (!moduleName)
                    return [2 /*return*/];
                handler = (_b = (_a = this._effects) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[actionName];
                if (!handler)
                    throw new Error("not found effect " + actionName);
                rootState = this._state;
                prevState = this._state[moduleName];
                dispatch = function (commitActionName, commitPayload) {
                    Store.prototype.dispatchModuleAction.bind(_this, moduleName)(commitActionName, commitPayload);
                };
                dispatchEffect = function (effectActionName, effectPayload, module) {
                    if (module === void 0) { module = moduleName; }
                    Store.prototype.dispatchModuleEffectAction.bind(_this, module)(effectActionName, effectPayload);
                };
                return [2 /*return*/, handler({ state: prevState, dispatch: dispatch, dispatchEffect: dispatchEffect, rootState: rootState }, payload)];
            });
        });
    }
    var StoreOriginInitialBase = Store.prototype.initialBase;
    Store.prototype.initialBase = function (options) {
        this._options = this._options || options;
        var _a = (this._options || {}).modules, modules = _a === void 0 ? {} : _a;
        StoreOriginInitialBase.call(this, options);
        this._effects = getEffects(modules);
        // this.useStore = this.getUseStore()
    };
    Store.prototype.dispatchModuleEffectAction = dispatchModuleEffectAction;
    var StoreOriginGetUseStore = Store.prototype.getUseStore;
    Store.prototype.initEffects = function () {
        this._effects = this._effects || {};
        this.getUseStore = getUseStore.bind(this, this, StoreOriginGetUseStore.bind(this), dispatchModuleEffectAction);
        // this.useStore = this.getUseStore()
    };
    return function initial(store) {
        store.initEffects();
    };
}
exports.default = effectPlugin;
