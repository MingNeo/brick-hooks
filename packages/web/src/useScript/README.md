---
nav:
  path: /web
---

## useScript

向页面中插入一个 script 文件

### 类型声明

```typescript
function useScript(
  src: string,
  onLoaded: (status: string) => void,
  options?: {
    async?: boolean // default: true script标签使用异步模式
    manual?: boolean // default: false 手动模式
    removeOnDestroy?: boolean // default: false 卸载组件时删除script标签
  },
): {
  status: 'idle' | 'loading' | 'success' | 'error'
  load: () => Promise<Element>
  ref: any
}
```

### 用法

```javascript
function MyComponent() {
  const { status } = useScript('http://xxx.cdn.com/moment.js')

  useEffect(() => {
    if (status === 'success') {
      // ...
    }
  }, [status])

  return <Child>...</Child>
}
```

也可以使用 onLoaded

```javascript
function MyComponent() {
  useScript('http://xxx.cdn.com/moment.js', (e) => {
    // ...
  })
}
```

设置 manual，通过 load 手动加载或安全执行加载后的逻辑

```javascript
function MyComponent() {
  const { status, load } = useScript('http://xxx.cdn.com/moment.js', () => {}, { manual: true })

  const handleClick = async () => {
    await load()
    // ...
  }
}
```

不同组件同样 script 不会重复插入

```javascript
// http://xxx.cdn.com/moment.js 只会插入一次
function MyComponent1() {
  const { status } = useScript('http://xxx.cdn.com/moment.js')
}
function MyComponent2() {
  const { status } = useScript('http://xxx.cdn.com/moment.js')
}
```
