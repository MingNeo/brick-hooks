## useLink

向页面中插入一段 Link 为防止重复插入, id 是必填的, 会在 link 标签上添加 id 属性

### 类型声明

```typescript
function useLink(
  href: string,
  id?: string,
  {
    removeOnDestroy,
  }?: {
    removeOnDestroy?: boolean
  },
): () => void
```

### 用法

```javascript
const style = `
.title {
  width: 200px;
  height: 20px;
}
`

function MyComponent() {
  useLink(style, 'styleUserTitle')
}
```

组件卸载时候自动移除 style

```javascript
useLink(style, 'styleUserTitle', { removeOnDestroy: true })
```

组件卸载时候自动移除 style

```javascript
const removeStyle = useLink(style, 'styleUserTitle')

const handleRemoveStyle = () => removeStyle()
```
