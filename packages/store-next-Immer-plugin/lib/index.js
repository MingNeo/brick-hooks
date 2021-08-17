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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @param Store
 * @returns
 */
function ImmerPlugin(Store) {
    Store.prototype.dispatchModuleAction = function (moduleName, actionName, payload) {
        var _a, _b;
        console.log("🚀 ~ file: index.ts ~ line 15 ~ moduleName", moduleName);
        if (!moduleName)
            return;
        var reducer = (_b = (_a = this._reducers) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[actionName];
        if (!reducer)
            throw new Error("not found reducer " + actionName);
        var prevState = this._state[moduleName];
        this._state[moduleName] = immer_1.default(prevState, function (draft) { return reducer(draft, payload); }
        // Options.patchListener as PatchListener | undefined
        );
        // 触发react组件更新
        this.publish("storeChange." + moduleName, this._state[moduleName]);
    };
    // const originInitialBase = Store.prototype.initialBase
    // Store.prototype.initialBase = function (options?: Options<S>) {
    //   originInitialBase.call(this, options)
    //   Object.keys(this._state).forEach((module) => {
    //     this._state[module] = produce(
    //       this._state[module],
    //       (draft: Draft<S>) => draft
    //       // Options.patchListener as PatchListener | undefined
    //     )
    //   })
    //   const { _base, ...moduleReducers } = this._reducers
    //   this._reducers = Object.entries(moduleReducers).reduce(
    //     (prev, [module, moduleReducers]) => ({ ...prev, [module]: getReducersImmer(moduleReducers) }),
    //     { _base }
    //   )
    //   console.log('_reducers', this._reducers, moduleReducers)
    // }
    // const originRegisterModule = Store.prototype.registerModule
    // Store.prototype.registerModule = function (moduleName: string, initialModule: Module) {
    //   originRegisterModule.call(this, moduleName, initialModule)
    //   if (this._reducers[moduleName]) {
    //     this._reducers[moduleName] = getReducersImmer(this._reducers[moduleName])
    //   }
    // }
    // Store.prototype._setState = function(nextState: {} | S) {
    //   this._state = nextState
    //   this.publish('storeChange', this._state)
    // }
    return function initial(store) { };
}
exports.default = ImmerPlugin;
function getReducersImmer(reducers) {
    return Object.entries(reducers).reduce(function (prevReducers, _a) {
        var _b = __read(_a, 2), reducerAction = _b[0], reducer = _b[1];
        return function (prevState, payload) {
            var _a;
            return (__assign(__assign({}, prevReducers), (_a = {}, _a[reducerAction] = immer_1.default(prevState, function (draft) { return reducer(draft, payload); }), _a)));
        };
    }, {});
}
