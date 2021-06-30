## useAsync

对异步函数做简单处理的 hook。
一般来说项目里对 fetch 都会做了一定程度的封装。这个简单的 hook 仅自动 loading 的处理。
返回处理过后的函数和 loading、error 等状态。

```javascript
const fetchData = (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [1] })
    }, 100)
  })
}
function MyComponent() {
  const [loadData, { loading, result }] = useAsync(fetchData);

  const handleLoadData = () => loadData()
    .then(data => { /* ... */ })

  return <Child onClick={handleLoadData}>
    <Loading visible={loading}>
  </Child>;
}
```
