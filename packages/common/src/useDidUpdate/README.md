## useDidUpdate

提供一个类似于 componentDidUpdate 生命周期的 hooks，首次不执行，仅更新时执行方法

```javascript
function MyComponent() {
  useDidUpdate(() => {
    // ...
  }, [...deps])
}
```
