"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var useStore_1 = __importDefault(require("./useStore"));
var utils_1 = require("./utils");
var eventBus_1 = require("./eventBus");
var reducer_1 = require("./reducer");
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._modules = new Set();
        _this.init(options);
        return _this;
    }
    Store.prototype.initialBase = function (options) {
        this._options = this._options || options;
        var _a = (this._options || {}).modules, modules = _a === void 0 ? {} : _a;
        this._modules = new Set(Object.keys(modules));
        var initialState = utils_1.combState(modules);
        this._state = this._state || initialState || {};
        this._reducers = this._reducers || reducer_1.getReducer(modules);
        this.useStore = useStore_1.default.bind(this, this);
    };
    /**
     * use plugin
     */
    Store.usePlugin = function (plugin) {
        // 此处的this是class,返回用于实例的插件初始化函数
        var initialFn = plugin(this);
        initialFn && this.pluginsInitial.add(initialFn);
    };
    /**
     * 初始化, 使用插件后，如果不是创建新的实例，则必须调用实例的这个方法后才可以正常使用
     */
    Store.prototype.init = function (options) {
        var e_1, _a;
        this.initialBase(options);
        try {
            for (var _b = __values(Store.pluginsInitial), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pluginInitial = _c.value;
                if (!pluginInitial.$i) {
                    pluginInitial(this);
                    pluginInitial.$i = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * 除了createStore时初始化，也可以通过这个方法来注册每个模块
     * @param moduleName
     * @param initialModule
     */
    Store.prototype.registerModule = function (moduleName, initialModule) {
        var _a = initialModule || {}, state = _a.state, reducers = _a.reducers;
        state && (this._state[moduleName] = state);
        reducers && (this._reducers[moduleName] = reducers);
        this._modules.add(moduleName);
    };
    /**
     * 修改配置
     * @param options
     */
    Store.prototype.config = function (options) {
        if (options === void 0) { options = {}; }
        this._options = typeof options === 'function' ? options(this._options) : options;
        this.init();
    };
    Store.prototype.getState = function (moduleName) {
        return moduleName ? this._state[moduleName] : this._state;
    };
    Store.prototype.setState = function (nextState) {
        var state = reducer_1.defaultReducers.$setValue(this._state, nextState);
        this._setState(state);
    };
    Store.prototype._setState = function (nextState) {
        this._state = nextState;
        this.publish('storeChange', this._state);
    };
    Store.prototype.setModuleState = function (moduleName, nextState, merge) {
        if (!moduleName)
            return;
        var prevState = this._state[moduleName];
        var state = merge
            ? reducer_1.defaultReducers.$setValueMerge(prevState, nextState)
            : reducer_1.defaultReducers.$setValue(prevState, nextState);
        this._setModuleState(moduleName, state);
    };
    Store.prototype._setModuleState = function (moduleName, nextState) {
        this._state[moduleName] = nextState;
        this.publish("storeChange." + moduleName, this._state[moduleName]);
    };
    /**
     * 触发一个action并调用reducer修改state
     * @param moduleName
     * @param actionName
     * @param payload
     */
    Store.prototype.dispatchModuleAction = function (moduleName, actionName, payload) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var reducer, prevState, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!moduleName)
                            return [2 /*return*/];
                        reducer = (_b = (_a = this._reducers) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[actionName];
                        if (!reducer)
                            throw new Error("not found reducer " + actionName);
                        prevState = this._state[moduleName];
                        _c = this._state;
                        _d = moduleName;
                        return [4 /*yield*/, reducer(prevState, payload)
                            // 触发react组件更新
                        ];
                    case 1:
                        _c[_d] = _e.sent();
                        // 触发react组件更新
                        this.publish("storeChange." + moduleName, this._state[moduleName]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Store.pluginsInitial = new Set();
    return Store;
}(eventBus_1.EventBus));
exports.Store = Store;
function createStore(options) {
    if (options === void 0) { options = {}; }
    return new Store(options);
}
exports.default = createStore;
