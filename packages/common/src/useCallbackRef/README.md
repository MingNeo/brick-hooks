## useCallbackRef

返回一个始终保持最新依赖的函数，且函数自身引用始终不变。
如函数无需作为依赖触发effect等更新的时候，可用于替代useCallback

```javascript
function MyComponent() {
  const fetchDataRef = useCallbackRef(fetchData)
}
```