## useLogRender

调试用，打印触发渲染的state。
生产环境应该禁用

```javascript
function MyComponent(props) {
  useLogRender(props);
  // console: [why-update]: { a }
}
```