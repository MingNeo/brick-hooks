## useDebounceFn

对函数进行防抖处理

### 用法

```javascript
const getData = async () => {}
const [debounceCb, cancel] = useDebounceFn(getData, 200)

// leading参数控制触发debounce时立即触发函数然后再等待，默认为false
// trailing参数控制debounce结束时触发函数，默认为true
// 如用于页面点击跳转防止多次点击，应该配置leading为true、trailing为false，意为立即触发跳转同时指定时间内不再响应
const [debounceCb, cancel] = useDebounceFn(getData, 200, { leading: true, trailing: false })
```
