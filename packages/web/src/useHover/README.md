---
nav:
  path: /web
---

## useHover

方便添加鼠标悬浮处理

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
interface Options {
  onOver?: () => void
  onOut?: () => void
  updateOnStatusChange?: boolean // 是否在悬浮状态改变时触发组件刷新，为否时不会刷新(返回值不会变)
}
function useHover(ref: any, { onOver, onOut, updateOnStatusChange }?: Options): boolean
```

### 用法

```javascript
function MyComponent() {
  const ref = useRef()
  const isHover = useHover(ref)

  return <div ref={(node) => (ref.current = node)}></div>
}

function MyComponent() {
  const ref = useRef()
  const onOver = () => {
    /* ... */
  }
  const onOut = () => {
    /* ... */
  }
  useHover(ref, { onOver, onOut })

  return <div ref={(node) => (ref.current = node)}></div>
}
```
