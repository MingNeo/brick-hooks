export class EventBus {
    constructor() {
        this.eventContainer = new Map();
        this.publish = (type, payload) => {
            const subscriptions = this.eventContainer.get(type);
            if (subscriptions) {
                for (const subscription of subscriptions) {
                    subscription(payload);
                }
            }
        };
        this.subscribe = (type, handler) => {
            const subscriptions = this.eventContainer.get(type) || new Set();
            subscriptions.add(handler);
            this.eventContainer.set(type, subscriptions);
            return this.unSubscribe.bind(this, type, handler);
        };
        this.unSubscribe = (type, subscription) => {
            const subscriptions = this.eventContainer.get(type);
            subscriptions && subscriptions.delete(subscription);
            return this;
        };
    }
}
