import { EventBus, EventType, Subscription } from './eventBus';
declare type CreateEventBusUseSubscribe = <T>(type: EventType, ...args: [string, Subscription<T>] | [Subscription<T>]) => void;
/**
 * 创建一个独立的eventBus实例
 * @returns
 */
declare const createEventBus: () => {
    publish: any;
    useSubscribe: CreateEventBusUseSubscribe;
    useEventBus: any;
};
/**
 * 可以生成一个用于上下文的EventBus及相关hooks
 */
declare function createContextEventBus(): import("react").Context<{
    publish: any;
    useSubscribe: CreateEventBusUseSubscribe;
    useEventBus: any;
}>;
declare const publish: any, useEventBusWithoutContext: any, useSubscribeWithoutContext: CreateEventBusUseSubscribe;
export { useEventBusWithoutContext as default, createContextEventBus, EventBus, publish, createEventBus, useSubscribeWithoutContext as useSubscribe, };
