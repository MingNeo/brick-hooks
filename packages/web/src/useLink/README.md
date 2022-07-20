## useLink

向页面中插入一段Link
为防止重复插入, id 是必填的, 会在link标签上添加id属性

```typescript
function useLink(href: string, id?: string, { removeOnDestroy }?: {
    removeOnDestroy?: boolean;
}): () => void
```

```javascript
const style = `
.title {
  width: 200px;
  height: 20px;
}
`

function MyComponent() {
  useLink(style, 'styleUserTitle'); 
}
```

组件卸载时候自动移除style

```javascript
useLink(style, 'styleUserTitle', { removeOnDestroy: true });
```

组件卸载时候自动移除style

```javascript
const removeStyle = useLink(style, 'styleUserTitle');

const handleRemoveStyle = () => removeStyle()
```
