## useRenderCount

渲染次数

### 用法

```javascript
function MyComponent() {
  const renderCount = useRenderCount()

  useEffect(() => {
    console.log('renderCount', renderCount)
  })
}
```
