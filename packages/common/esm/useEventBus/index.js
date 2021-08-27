import { useRef, useEffect, createContext, useContext } from 'react';
import { EventBus } from './eventBus';
function subscribe(bus, type, callback) {
    return bus === null || bus === void 0 ? void 0 : bus.subscribe(type, callback);
}
function useSubscribe(bus, type, ...args) {
    const [eventName, callback] = type
        ? [type, ...args]
        : args;
    const subscriptionRef = useRef(callback);
    subscriptionRef.current = callback;
    function subscription(val) {
        subscriptionRef.current && subscriptionRef.current(val);
    }
    useEffect(() => {
        const unSubscribe = subscribe(bus, eventName, subscription);
        return () => {
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
const createEventBus = () => {
    const bus = new EventBus();
    return {
        publish: bus === null || bus === void 0 ? void 0 : bus.publish.bind(null),
        useSubscribe: useSubscribe.bind(null, bus),
        useEventBus: useEventBus.bind(null, bus),
    };
};
/**
 * 可以生成一个用于上下文的EventBus及相关hooks
 */
function createContextEventBus() {
    const contextState = createEventBus();
    const eventBusContext = createContext(contextState);
    const useContextEventBus = () => {
        return useContext(eventBusContext);
    };
    eventBusContext.useEventBus = useContextEventBus;
    return eventBusContext;
}
const { publish, useEventBus: useEventBusWithoutContext, useSubscribe: useSubscribeWithoutContext, } = createEventBus();
export { useEventBusWithoutContext as default, createContextEventBus, EventBus, publish, createEventBus, useSubscribeWithoutContext as useSubscribe, };
