---
nav:
  path: /web
---

## useWindowResize

获取窗口尺寸，并且在窗口尺寸变化时自动更新

### 类型声明

```typescript
const useWindowResize: (callback?: (windowSize: { width: number; height: number }) => void) => {
  width?: number
  height?: number
}
```

### 用法

```javascript
function MyComp() {
  const { width, height } = useWindowResize()

  // or
  useWindowResize((windowSize) => {
    // ...
  })
}
```
