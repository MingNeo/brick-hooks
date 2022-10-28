---
nav:
  path: /web
---

## useLink

向页面中插入一段 style Link。为防止重复插入, id 是必填的, 会在 link 标签上添加 id 属性。

### 类型声明

```typescript
function useLink(
  href: string,
  id: string,
  options?: {
    removeOnDestroy?: boolean
  },
): () => void
```

### 用法

```javascript
function MyComponent() {
  useLink('http://xxx.css', 'test-link')
}
```

组件卸载时候自动移除 style

```javascript
useLink(cssLink, 'test-link', { removeOnDestroy: true })
```

手动移除 style

```javascript
const removeStyleLink = useLink(style, 'styleUserTitle')

const handleRemoveStyle = () => removeStyleLink()
```
