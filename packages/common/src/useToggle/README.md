## useToggle

提供布尔值的切换

### 用法

```javascript
function MyComponent() {
  const [value, toggleValue] = useToggle(false)

  const handleButtonAClick = () => toggleValue()
  return <Child>...</Child>
}
```
