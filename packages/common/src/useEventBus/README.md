## useEventBus

提供一个Pub/Sub的hook，可用作跨组件通信。

```javascript
function MyComponent() {
  const { publish, useSubscribe, subscribe } = useEventBus('loginEventBus');

  const onSubscribe = (value) => {
    // ...
  }
  useSubscribe(onSubscribe)

  return <Child publish={publish} />;
}
```
