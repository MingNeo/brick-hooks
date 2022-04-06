## useAsync

对异步函数做简单处理的 hook。
一般来说项目里对 fetch 都会做了一定程度的封装。这个简单的 hook 仅做自动 loading、自动 debounce、mutate 的处理。
返回处理过后的函数和 loading、error 等状态。

复杂异步请求管理可以使用 SWR 等开源请求库。

```ts
function useAsync<A extends AsyncFunction>(
  asyncFunction: A,
  {
    immediate,
    onResult,
    debounceTime,
  }?: {
    immediate?: boolean
    onResult?: (res: any) => void
    debounceTime?: number
    manual?: boolean
  }
): [
  (...args: any[]) => Promise<any>,
  {
    result: any
    error: any
    loading: boolean
    status: 'success' | 'loading' | 'idle' | 'fail' | 'mutate success'
    mutate: (...args: any[]) => any
  }
]
```

#### 自动触发请求

```javascript
const fetchData = (params) => {
  return request('/api/xxx')
}

function MyComponent() {
  const [loadData, { loading, result }] = useAsync(fetchData, { immediate: true })

  if (result) return <>...</>
  if (loading) return <>...</>
  return null
}
```

#### 手工触发请求

```javascript
// 手工处理请求返回值
function MyComponent() {
  const [loadData, { loading, result }] = useAsync(fetchData, { immediate: false })

  useEffect(() => {
    loadData()
  }, [])

  // 或
  useEffect(() => {
    loadData().then((result) => {})
  }, [])
}
```

#### debounce

使用 debounceTime 时，将自动进行 debounce 处理
注意，使用 debounceTime 后, 请求函数 不会再有返回值

```javascript
// 使用debounce
const [loadData, { loading, result }] = useAsync(fetchData, { debounceTime: 500 })
```

```javascript
// 使用debounceTime后, loadData不会再有返回值。可以通过result获取结果。或如下对retchData进行包装
const [loadData, { loading, result }] = useAsync(
  (...args) => {
    fetchData(...args).then((res) => {})
  },
  { debounceTime: 500 }
)
```

#### onResult

请求成功返回数据会触发 onResult 回调，一般情况下直接.then 后处理或使用 result 即可，但有时候希望自动同步状态，则可以配置 onResult 方法

```javascript
// 自动更新数据
const [address, setAddress] = useStore('address')
const [loadData, { loading, result }] = useAsync(fetchData, {
  onResult: (data) => setAddress({ addressList: data }),
})
```

#### mutate

很多时候我们会加载数据，更新数据，重新加载数据。
如，购物车页面，加载列表 -> 勾选某个商品 -> 请求数据 -> 刷新列表。
如果等待请求成功后再设置选中体验会很不好，因此我们可以在请求回来之前先设置选中的效果

```javascript
// 自动更新数据
const [loadData, { loading, result, mutate }] = useAsync(fetchData)

const handleClick = (key) => {
  mutate({ ...result, [key]: 'selected' })
  loadData()
}
```
