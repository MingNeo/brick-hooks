## useDeepCompare
 * 在每次更新时进行深比较，并返回新的值
 * 深比较比较耗性能，慎用

 一般清空下数据是immutable的，并不需要使用这个hook进行深比较。
 且这个hook不会监听数据，仅仅是在组件/hook render的时候进行比较并返回新值

```javascript
function MyComponent(props) {
  const treeData = useDeepCompare(props.data);
}
```

