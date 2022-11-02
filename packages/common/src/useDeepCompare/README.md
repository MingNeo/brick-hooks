## useDeepCompare

- 在每次更新时进行深比较，并返回新的值
- 深比较比较耗性能，慎用

一般情况下数据是 immutable 的，并不需要使用这个 hook 进行深比较。且这个 hook 不会监听数据，仅仅是在组件/hook render 的时候进行比较并返回新值

### 用法

```javascript
function MyComponent(props) {
  const treeData = useDeepCompare(props.data)
}
```
