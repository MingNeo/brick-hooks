"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSub = void 0;
var react_1 = require("react");
var eventBus_1 = require("./eventBus");
Object.defineProperty(exports, "EventSub", { enumerable: true, get: function () { return eventBus_1.EventSub; } });
var DEFAULT_ROOT_TYPE = 'DEFAULT_ROOT_TYPE';
function useEventSub(type) {
    if (type === void 0) { type = DEFAULT_ROOT_TYPE; }
    var busRef = react_1.useRef();
    if (!busRef.current) {
        busRef.current = new eventBus_1.EventSub();
    }
    var subscriptionRef = react_1.useRef();
    function publish(payload) {
        busRef.current && busRef.current.publish(type, payload);
    }
    /**
     * 订阅当前事件的函数，回调函数传进来后就不会再改变，会造成参数不是最新，多数情况下可直接使用useSubscribe
     * @param callback
     */
    function subscribe(callback) {
        busRef.current && busRef.current.subscribe(type, callback);
        return function unSubscribe() {
            busRef.current && busRef.current.unSubscribe(type, callback);
        };
    }
    function useSubscribe(callback) {
        subscriptionRef.current = callback;
        function subscription(val) {
            subscriptionRef.current && subscriptionRef.current(val);
        }
        react_1.useEffect(function () {
            var unSubscribe = subscribe(subscription);
            return function () {
                unSubscribe && unSubscribe();
            };
        }, []);
    }
    return { publish: publish, useSubscribe: useSubscribe, subscribe: subscribe };
}
exports.default = useEventSub;
