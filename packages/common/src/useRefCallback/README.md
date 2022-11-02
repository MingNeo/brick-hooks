## useRefCallback

可用于替换部分情况下的 React.useCallback。返回一个 function，可以保证函数地址在组件中不会变化。解决 useCallback 依赖值变化而重新生成新函数的问题。

### 用法

```javascript
function MyComponent() {
  // 使用useRefCallback，不论useEffect中deps添不添加testRefFn，对结果都无影响。stateA变化不会更新testRefFn引用因此也不会触发useEffect渲染，且testRefFn所有依赖的参数始终保持最新
  const testRefFn = useRefCallback(() => {
    // ...
  })

  useEffect(() => {
    // 只会执行一次，因为testRefFn引用地址永远不会变
    testRefFn()
  }, [testRefFn])

  // testRefFn中使用的所有state始终为最新
  const handleClick = () => testRefFn()

  return <Child>...</Child>
}

// 对照： useCallback
// 使用useCallback时， stateB变化将触发testFn，testFn中使用的stateA有可能不是最新，如果useEffect的dep中添加testFn，则stateA变化就会触发testFn执行，显然也不对。
function MyComponent() {
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)

  const testFn = useCallback(() => {
    // ...
  }, [stateA])

  useEffect(() => {
    testFn()
  }, [stateB])

  return <Child>...</Child>
}
```
