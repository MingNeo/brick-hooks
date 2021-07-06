import { EventBus, Subscription } from './eventBus';
export default function useEventBus<T = void>(type?: string): {
    publish: (payload?: T) => void;
    useSubscribe: (callback: Subscription<T>) => void;
    subscribe: (callback: Subscription<T>) => () => void;
};
export { EventBus };
