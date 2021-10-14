export type Subscription<T> = (val: T, ...args: any[]) => void
export type EventType = string | symbol

// 调用订阅的方法
function applySubscription<T>(subscription: Subscription<T>, payload: any) {
  try {
    subscription(payload)
  } catch (e) {
    // 延迟抛出错误，防止阻塞了其他任务的执行
    setTimeout(() => {
      throw e
    }, 0)
  }
}

export class EventBus<T = any> {
  private eventContainer = new Map<EventType, Set<Subscription<T>>>()

  publish = (type: EventType, payload?: any) => {
    const subscriptions = this.eventContainer.get(type)
    if (subscriptions) {
      for (const subscription of subscriptions) {
        applySubscription(subscription, payload)
      }
    }
  }

  subscribe = (type: EventType, handler: Subscription<T>) => {
    const subscriptions = this.eventContainer.get(type) || new Set<Subscription<T>>()
    subscriptions.add(handler)
    this.eventContainer.set(type, subscriptions)
    return this.unSubscribe.bind(this, type, handler)
  }

  // 只订阅一次，自动销毁
  subscribeOnce(type: EventType, handler: Subscription<T>) {
    this.subscribe(type, (...args: any[]) => {
      this.unSubscribe(type, handler)
      handler.apply(this, args)
    })
  }

  unSubscribe = (type: EventType, subscription: Subscription<T>) => {
    const subscriptions = this.eventContainer.get(type)
    subscriptions && subscriptions.delete(subscription)
    return this
  }

  clearSubscriptions(type: EventType) {
    for (const [eventType, subscriptions] of this.eventContainer) {
      if (eventType === type && subscriptions.size) {
        this.eventContainer.delete(eventType)
      }
    }
  }
}
