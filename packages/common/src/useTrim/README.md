## useTrim
提供布尔值的切换

```javascript
function MyComponent(props) {
  const [value, toggleValue] = useTrim(props.text); 

  const handleButtonAClick = () => toggleValue()
  return <Child>...</Child>;
}
```
