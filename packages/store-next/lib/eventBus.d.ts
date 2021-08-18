export declare type Subscription<T> = (val: T, ...args: any[]) => void;
export declare type EventType = string | symbol;
export declare class EventBus<T> {
    eventContainer: Map<EventType, Set<Subscription<T>>>;
    publish: (type: EventType, payload: any) => void;
    subscribe: (type: EventType, handler: Subscription<T>) => this;
    unSubscribe: (type: EventType, subscription: Subscription<T>) => this;
}
