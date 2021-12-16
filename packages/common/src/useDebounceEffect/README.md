## useDebounceEffect

提供一个防抖的 effect，当 dep 变化时进行防抖处理，而非每次都触发

```javascript
useDebounceEffect(
  () => {
    setResultData(state)
  },
  200,
  [state]
)
```
