## useUnmountedRef

获取组件卸载状态

### 用法

```javascript
function MyComponent(props) {
  const unmountedRef = useUnmountedRef(props.text)

  // unmountedRef.current ...
}
```
