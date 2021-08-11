## useDebounceEffect
提供一个防抖的effect，当dep变化时进行防抖处理

```javascript
useDebounceEffect(() => {
  setResultData(state)
}, 200, [state])
```