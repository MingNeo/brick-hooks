---
nav:
  path: /web
---

## useStyle

向页面中插入一段 Style 为防止重复插入, id 是必填的, 会在 style 标签上添加 id 属性

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
function useStyle(
  styleContent: string,
  id: string,
  options?: {
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
  useStyle(style, 'styleUserTitle')
}
```

组件卸载时候自动移除 style

```javascript
useStyle(style, 'styleUserTitle', { removeOnDestroy: true })
```

组件卸载时候手动移除 style

```javascript
const removeStyle = useStyle(style, 'styleUserTitle')

const handleRemoveStyle = () => removeStyle()
```
