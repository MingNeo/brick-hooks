## usePolling

轮询

### 演示

<code src="./demo.tsx"></code>

### 用法

```javascript
function MyComponent() {
  const { result, isPolling, error, startPolling, stopPolling } = usePolling(fetchData, {
    interval: 500,
    retryCount: 2,
    onSuccess: (data: any) => {
      // ...
    },
    onFail: (error) => {
      // ...
    },
  })

  const handleClick = () => {
    isPolling ? stopPolling() : startPolling()
  }

  return (
    <div>
      <button onClick={handleClick}>{isPolling ? '停止轮询' : '点击开始轮询'}</button>
      <p>{isPolling ? 'polling...' : ''}</p>
      <p>{error ? error.message : result}</p>
    </div>
  )
}
```

### 类型声明

```typescript
type Callback = (...args: any[]) => Promise<any>

interface Options {
  interval?: number // 轮询间隔时间
  retryCount?: number // 轮询失败后重试次数
  onSuccess?: (data: any) => boolean | void // 成功后的回调函数, 返回true时会继续轮询
  onFail?: (data: any) => void // 失败后的回调函数
}

const usePolling: (
  callback: Callback,
  options: Options,
) => {
  isPolling: boolean
  startPolling: () => void
  stopPolling: () => void
  result: any
  error: any
}
```
