## useAsync

对异步函数做简单处理的 hook。
一般来说项目里对 fetch 都会做了一定程度的封装。这个简单的 hook 仅做自动 loading、自动 debounce 的处理。
返回处理过后的函数和 loading、error 等状态。

复杂异步请求管理可以使用 SWR 等开源请求库。

```javascript
const fetchData = (params) => {
  return request('/api/xxx')
}

function MyComponent() {
  const [loadData, { loading, result }] = useAsync(fetchData)

  useEffect(() => {
    loadData()
  })

  // 直接使用result
  return result ? <>...</> : null
}

// 手工处理请求返回值
function MyComponent() {
  const [loadData, { loading }] = useAsync(fetchData)

  useEffect(() => {
    loadData().then((result) => {})
  }, [])
}
```

使用 debounceTime 时，将自动进行 debounce 处理
注意，使用 debounceTime 后, deounceFn 不会再有返回值

```javascript
// 使用debounce
const [loadData, { loading, result }] = useAsync(fetchData, { debounceTime: 500 })

// 使用debounceTime后, deounceFn不会再有返回值，如需手工处理返回值需要
const [loadData, { loading, result }] = useAsync(
  (...args) => {
    fetchData(...args).then((res) => {})
  },
  { debounceTime: 500 }
)
```

请求成功返回数据会触发 onResult 回调，一般情况下直接.then 后处理或使用 result 即可，但有时候希望自动同步状态，则可以配置 onResult 方法

```javascript
// 自动更新数据
const [data, setData] = useState([])
const [loadData, { loading, result }] = useAsync(fetchData, { onResult: setData })

// or
const [data, setData] = useObjectState({ listData: [] })
const [loadData, { loading, result }] = useAsync(fetchData, {
  onResult: (res) => setData({ listData }),
})
```
