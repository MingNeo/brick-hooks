---
nav:
  path: /web
---

## useScroll

用于获取一个 scroll 的滚动值,且提供一个方法滚动到当前容器的顶部，可用于如切换 tab 时重置列表位置、返回顶部按钮等

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
function useScroll({
  root,
  onScroll: onScrollChange,
}?: {
  root?: Element | (Window & typeof globalThis)
  rootRef?: React.MutableRefObject<Element>
  onScroll?: (scrollInfo: { left: number; top: number; x: number; y: number }) => void
}): {
  left: number
  top: number
  rootRef: React.MutableRefObject<any>
  scrollToTop: (y?: number) => void
  scrollToLeft: (x?: number) => void
  x: number
  y: number
}
```

### 用法

#### 页面滚动

```javascript
// 相对window
function Comp() {
  // 页面的滚动
  const { y, scrollToTop } = useScroll()

  return (
    <div>
      ...
      <div onClick={() => scrollToTop()}>Return Top</div>
    </div>
  )
}
```

#### 指定 root

```javascript
function Comp() {
  const { y, rootRef, scrollToTop } = useScroll()

  return <div className="container" ref={rootRef}></div>
}
// or 使用ref
function Comp() {
  const rootRef = useRef()
  const { y, scrollToTop } = useScroll({ rootRef })

  return <div className="container" ref={rootRef}></div>
}
// or 指定节点
function Comp() {
  const { y, scrollToTop } = useScroll({ root: document.querySelector('.container') })

  return <div className="container"></div>
}
```
