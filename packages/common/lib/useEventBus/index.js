"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSubscribe = exports.createEventBus = exports.publish = exports.EventBus = exports.createContextEventBus = exports.default = void 0;
var react_1 = require("react");
var eventBus_1 = require("./eventBus");
Object.defineProperty(exports, "EventBus", { enumerable: true, get: function () { return eventBus_1.EventBus; } });
function subscribe(bus, type, callback) {
    return bus === null || bus === void 0 ? void 0 : bus.subscribe(type, callback);
}
function useSubscribe(bus, type) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var _a = __read(type
        ? __spread([type], args) : args, 2), eventName = _a[0], callback = _a[1];
    var subscriptionRef = react_1.useRef(callback);
    subscriptionRef.current = callback;
    function subscription(val) {
        subscriptionRef.current && subscriptionRef.current(val);
    }
    react_1.useEffect(function () {
        var unSubscribe = subscribe(bus, eventName, subscription);
        return function () {
            unSubscribe && unSubscribe();
        };
    }, []);
}
function useEventBus(bus, type) {
    return {
        publish: type ? bus.publish.bind(null, type) : bus.publish.bind(null),
        useSubscribe: type ? useSubscribe.bind(null, bus, type) : useSubscribe.bind(null, bus),
        // 订阅当前事件的函数，回调函数传进来后就不会再改变，会造成参数不是最新，一般情况下直接使用useSubscribe
        subscribe: type ? subscribe.bind(null, bus, type) : subscribe.bind(null, bus),
    };
}
/**
 * 创建一个独立的eventBus实例
 * @returns
 */
var createEventBus = function () {
    var bus = new eventBus_1.EventBus();
    return {
        publish: bus === null || bus === void 0 ? void 0 : bus.publish.bind(null),
        useSubscribe: useSubscribe.bind(null, bus),
        useEventBus: useEventBus.bind(null, bus),
    };
};
exports.createEventBus = createEventBus;
/**
 * 可以生成一个用于上下文的EventBus及相关hooks
 */
function createContextEventBus() {
    var contextState = createEventBus();
    var eventBusContext = react_1.createContext(contextState);
    var useContextEventBus = function () {
        return react_1.useContext(eventBusContext);
    };
    eventBusContext.useEventBus = useContextEventBus;
    return eventBusContext;
}
exports.createContextEventBus = createContextEventBus;
var _a = createEventBus(), publish = _a.publish, useEventBusWithoutContext = _a.useEventBus, useSubscribeWithoutContext = _a.useSubscribe;
exports.publish = publish;
exports.default = useEventBusWithoutContext;
exports.useSubscribe = useSubscribeWithoutContext;
