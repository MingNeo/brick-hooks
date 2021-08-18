export type Subscription<T> = (val: T, ...args: any[]) => void
export type EventType = string | symbol

export class EventBus<T> {
  eventContainer = new Map<EventType, Set<Subscription<T>>>()

  publish = (type: EventType, payload: any) => {
    const subscriptions = this.eventContainer.get(type)
    if (subscriptions) {
      for (const subscription of subscriptions) {
        subscription(payload)
      }
    }
  }

  subscribe = (type: EventType, handler: Subscription<T>) => {
    const subscriptions = this.eventContainer.get(type) || new Set<Subscription<T>>()
    subscriptions.add(handler)
    this.eventContainer.set(type, subscriptions)
    return this
  }

  unSubscribe = (type: EventType, subscription: Subscription<T>) => {
    const subscriptions = this.eventContainer.get(type)
    subscriptions && subscriptions.delete(subscription)
    return this
  }
}
