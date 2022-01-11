## useLogRender

调试用，打印触发渲染的 state。
生产环境应该禁用

```javascript
function MyComponent(props) {
  useLogRender(props)
  // console: [render count]: 1 [why-update]: { a }
}
```
