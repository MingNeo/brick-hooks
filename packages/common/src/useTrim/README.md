## useTrim
对字符串数据进行自动去掉空格的处理

```javascript
function MyComponent(props) {
  // 默认仅移除首尾空格
  const trimedText = useTrim(props.text); // ' ss ss ' => 'ss sss'
  const trimedText = useTrim(props.text, true); // ' ss ss ' => 'sssss'
}
```
