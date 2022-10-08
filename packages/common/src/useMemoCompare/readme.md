## useMemoCompare

用于简化某些特殊情况下 useMemo 的判断

```javascript
function MyComponent({ obj }) {
  const [state, setState] = useState()

  const objMemo = useMemoCompare(obj, (prev, next) => {
    return prev && prev.id === next.id
  })

  // 仅当obj中的id变化时触发
  useEffect(() => {
    return setState(objMemo.id)
  }, [objMemo])

  return <div> ... </div>
}
```

```javascript
// 我们需要在obj.id变更的时候触发动作，但是如果deps直接依赖obj，那么obj里的任何属性变化都会触发渲染。
useEffect(() => {
  return setState(obj.id)
}, [obj])

// deps里面使用obj.id 也不行，因为我们useEffect里面并没有用到obj.id，所以eslint-plugin-hooks会提示错误，
// 我们还需要eslint-disable-next-line才能消除错误。
// 使用此hooks即可避免这种情况
useEffect(() => {
  return obj.someMethod().then((value) => setState(value))
}, [obj.id])
```
