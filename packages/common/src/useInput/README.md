## useInput

用于普通 input。有些 input 你没有放在表单中，可以使用这个 hook 进行方便处理

```javascript
function MyComponent() {
  let { bindEvent } = useInput('xxx'); // bindEvent = { value: 'xxx', onChange: [Function] }
  return <input {...bindEvent }/>;
}

function MyComponent() {
  const {value, onChange} = useInput(false, 'checked');
  return <input type="checkbox" checked={value} onChange={onChange} />;
}

// 自定义onChange
function MyComponent() {
  const {value, onChange} = useInput(false, (e) => { ... });
  return <input value={value} onChange={onChange} />;
}
```
