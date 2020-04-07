export declare type Subscription<T> = (val: T, ...args: any[]) => void;
export declare type EventType = string | symbol;
export declare class EventSub<T> {
    private eventContainer;
    publish: (type: EventType, payload: any) => void;
    subscribe: (type: EventType, handler: Subscription<T>) => this;
    unSubscribe: (type: EventType, subscription: Subscription<T>) => this;
}
