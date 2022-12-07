## useInput

用于普通 input。有些 input 你没有放在表单中，可以使用这个 hook 进行方便处理

### 用法

```javascript
import { useInput } from 'brick-hooks'

function MyComponent() {
  let { value, onChange } = useInput('xxx')
  return <input value={value} onChange={onChange} />
}
// 等同于
function MyComponent() {
  const [value, setValue] = useState('xxx')
  const onChange = useCallback((e) => {
    setValue(event.currentTarget.value)
  }, [])
  return <input value={value} onChange={onChange} />
}
```

自定义 valueKey,如 checkbox 取值为 event.currentTarget.checked 而非 event.currentTarget.value

```javascript
function MyComponent() {
  const { value, onChange } = useInput(false, 'checked')
  return <input type="checkbox" checked={value} onChange={onChange} />
}
```

自定义 onChange

```javascript
// 自定义onChange
function MyComponent() {
  const {value, onChange} = useInput(false, (val, event) => { ... });
  return <input value={value} onChange={onChange} />;
}
function MyComponent() {
  const {value, onChange} = useInput(false, 'checked',  (val, event) => { ... });
  return <input type="checkbox" checked={value} onChange={onChange} />;
}
```
