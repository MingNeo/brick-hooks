## useRefValue

返回一个 ref，ref 的值为 value 的最新值，用于使用最新值而无需作为 dep 引入等

### 用法

```javascript
function MyComponent() {
  const valueRef = useRefValue(value)
  console.log(valueRef.current)
}
```
