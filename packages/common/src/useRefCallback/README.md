## useRefCallback

可用于替换部分情况下的 React.useCallback。返回一个 function，可以保证函数地址在组件中不会变化。解决 useCallback 依赖值变化而重新生成新函数的问题。

```javascript
function MyComponent() {
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)

  const testFn = useCallback(() => {
    // ...
  }, [stateA])

  // 当依赖其他的值触发testFn的时候，如果deps里不加testFn，则testFn中state有可能不是最新，如果添加testFn，则stateA变化就会触发testFn执行，显然也不对。
  useEffect(() => {
    testFn()
  }, [stateB])

  // 使用useRefCallback则无这个问题，不论useEffect中deps添不添加testRefFn，对结果都无影响。stateA变化不会更新testRefFn引用因此也不会触发useEffect渲染。
  const testRefFn = useRefCallback(() => {
    // ...
  })

  useEffect(() => {
    testRefFn()
  }, [stateB])

  return <Child>...</Child>
}
```
