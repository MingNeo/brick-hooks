# useTimeoutFn

优雅使用 setTimeout 函数的hook

- 组件卸载的时候自动 clearTimeout
- 返回一个 promise，setTimeout 执行完毕可以继续处理
- 返回是否正在等待执行 isPending
- 允许手工调用 stop 结束等待

## Usage <a name = "usage"></a>

```javascript
const [value, { inc }] = useCounter(0)
const [startTimeout, { isPending, stop }] = useTimeoutFn(inc, 100)

startTimeout()

// 返回一个promise，setTimeout执行完毕可以继续处理
startTimeout().then(() => {
  /* ... */
})
// or
await startTimeout()
```
