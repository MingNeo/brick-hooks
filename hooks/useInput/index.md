```javascript
function MyComponent() {
  let { bindEvent } = useInputValue('xxx'); // name = { value: 'xxx', onChange: [Function] }
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