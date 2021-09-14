## useAsync

对异步函数做简单处理的 hook。
一般来说项目里对 fetch 都会做了一定程度的封装。这个简单的 hook 仅做自动 loading、自动debounce 的处理。
返回处理过后的函数和 loading、error 等状态。

复杂异步请求管理可以使用SWR等开源请求库。

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

  useEffect(() => {
    loadData()
  })

  // 直接使用result
  return result ? <>...</> : null
}
// 使用请求返回值
function MyComponent() {
  const [loadData, { loading }] = useAsync(fetchData);

  useEffect(() => {
    loadData().then(result => {})
  })
}
```
```javascript
// 使用debounce
const [loadData, { loading, result }] = useAsync(fetchData, { debounceTime: 500 });

// 自动更新数据
const [data, setData] = useState({})
const [loadData, { loading, result }] = useAsync(fetchData, { setState: setData });
```
