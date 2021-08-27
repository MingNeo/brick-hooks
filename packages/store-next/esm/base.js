var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import useStore from './useStore';
import { combState } from './utils';
import { EventBus } from './eventBus';
import { defaultReducers, getReducer } from './reducer';
export class Store extends EventBus {
    constructor(options = {}) {
        super();
        this._modules = new Set();
        this.init(options);
    }
    initialBase(options) {
        this._options = this._options || options;
        const { modules = {} } = this._options || {};
        this._modules = new Set(Object.keys(modules));
        const initialState = combState(modules);
        this._state = this._state || initialState || {};
        this._reducers = this._reducers || getReducer(modules);
    }
    getUseStore() {
        return useStore.bind(this, this);
    }
    /**
     * use plugin
     */
    static usePlugin(plugin) {
        // 此处的this是class,返回用于实例的插件初始化函数
        const initialFn = plugin(this);
        initialFn && this.pluginsInitial.add(initialFn);
    }
    /**
     * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
     */
    init(options) {
        this.initialBase(options);
        for (const pluginInitial of Store.pluginsInitial) {
            if (!pluginInitial.$i) {
                pluginInitial(this);
                pluginInitial.$i = true;
            }
        }
        this.useStore = this.getUseStore();
    }
    /**
     * 除了createStore时初始化，也可以通过这个方法来注册每个模块
     * @param moduleName
     * @param initialModule
     */
    registerModule(moduleName, initialModule) {
        const { state, reducers } = initialModule || {};
        state && (this._state[moduleName] = state);
        reducers && (this._reducers[moduleName] = reducers);
        this._modules.add(moduleName);
    }
    /**
     * 修改配置
     * @param options
     */
    config(options = {}) {
        this._options = typeof options === 'function' ? options(this._options) : options;
        this.init();
    }
    getState(moduleName) {
        return moduleName ? this._state[moduleName] : this._state;
    }
    setState(nextState) {
        const state = defaultReducers.$setValue(this._state, nextState);
        this._setState(state);
    }
    _setState(nextState) {
        this._state = nextState;
        this.publish('storeChange', this._state);
    }
    setModuleState(moduleName, nextState, merge) {
        if (!moduleName)
            return;
        const prevState = this._state[moduleName];
        const state = merge
            ? defaultReducers.$setValueMerge(prevState, nextState)
            : defaultReducers.$setValue(prevState, nextState);
        this._setModuleState(moduleName, state);
    }
    _setModuleState(moduleName, nextState) {
        this._state[moduleName] = nextState;
        this.publish(`storeChange.${moduleName}`, this._state[moduleName]);
    }
    /**
     * 触发一个action并调用reducer修改state
     * @param moduleName
     * @param actionName
     * @param payload
     */
    dispatchModuleAction(moduleName, actionName, payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!moduleName)
                return;
            const reducer = (_b = (_a = this._reducers) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[actionName];
            if (!reducer)
                throw new Error(`not found reducer ${actionName}`);
            const prevState = this._state[moduleName];
            this._state[moduleName] = reducer(prevState, payload);
            // 触发react组件更新
            this.publish(`storeChange.${moduleName}`, this._state[moduleName]);
        });
    }
}
Store.pluginsInitial = new Set();
function classFactory() {
    return class extends Store {
    };
}
/**
 * 创建独立store实例
 */
export default function createStore(options = {}) {
    const { plugins = [] } = options, restOptions = __rest(options, ["plugins"]);
    const SingleClass = classFactory();
    plugins.forEach((plugin) => SingleClass.usePlugin(plugin));
    return new SingleClass(restOptions);
}
export function createStoreAndClass(options = {}) {
    const { plugins = [] } = options, restOptions = __rest(options, ["plugins"]);
    const SingleClass = classFactory();
    plugins.forEach((plugin) => SingleClass.usePlugin(plugin));
    return { store: new SingleClass(restOptions), StoreClass: SingleClass };
}
