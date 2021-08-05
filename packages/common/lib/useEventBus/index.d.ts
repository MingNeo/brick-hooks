import { EventBus } from './eventBus';
/**
 * 创建一个独立的eventBus实例
 * @returns
 */
declare const createEventBus: () => {
    publish: any;
    useSubscribe: any;
    useEventBus: any;
};
/**
 * 可以生成一个用于上下文的EventBus及相关hooks
 */
export declare function createContextEventBus(): import("react").Context<{
    publish: any;
    useSubscribe: any;
    useEventBus: any;
}>;
declare const publish: any, useEventBusWithoutContext: any, useSubscribeWithoutContext: any;
export { useEventBusWithoutContext as default, EventBus, publish, createEventBus, useSubscribeWithoutContext as useSubscribe, };
