## useTrimState

创建一个字符串 state，并对字符串数据进行自动去掉空格的处理

### 类型声明

```typescript
function useTrimState(initialValue: string | undefined, fullTrim?: boolean): [string, setTrimState]
```

### 用法

```javascript
function MyComponent(props) {
  // 默认仅移除首尾空格
  const [trimvalue, setTrimValue] = useTrimState(props.text) // ' ss ss ' => 'ss sss'
  // 第二个参数控制是否去除字符串中所有的空格
  const [trimvalue, setTrimValue] = useTrimState(props.text, true) // ' ss ss ' => 'sssss'
}
```
