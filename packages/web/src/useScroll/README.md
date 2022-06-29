## useScroll

用于获取一个 scroll 的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换 tab 时重置列表位置等

```typescript
function useScroll({
  root,
  onScroll: onScrollChange,
}?: {
  root?: Element | Ref<Element> | (Window & typeof globalThis)
  onScroll?: any
}): {
  rootRef: React.MutableRefObject<any>
  scrollToTop: (y?: any) => void
  scrollToLeft: (x?: any) => void
  x: number
  y: number
}
```

#### 页面滚动

```javascript
// 相对window
function Comp() {
  // 页面的滚动
  const { y, scrollToTop } = useScroll()
}
```

#### 指定 root

```javascript
function Comp() {
  const { y, rootRef, scrollToTop } = useScroll()

  return <div className="container" ref={rootRef}></div>
}
// or
function Comp() {
  const rootRef = useRef()
  const { y, scrollToTop } = useScroll({ root: rootRef })

  return <div className="container" ref={rootRef}></div>
}
```
