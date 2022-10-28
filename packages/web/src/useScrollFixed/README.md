---
nav:
  path: /web
---

## useFixed

判断某个元素是否需要固定位置悬浮，多用于滚动到一定位置后，悬浮 header 等

### 演示

<code src="./demo.tsx" iframe="true"></code>

### 类型声明

```typescript
function useScrollFixed(options?: {
  target?: MutableRefObject<any> | any
  root?: MutableRefObject<any> | any
  limit?: (() => number) | number
  fixedStyle?: Record<string, any>
  horizontal?: boolean
}): {
  isFixed: boolean
  fixedStyle: {}
  targetRef: MutableRefObject<any>
  rootRef: MutableRefObject<any>
}
```

### 用法

#### 相对 window

```javascript
// 相对window
function Comp() {
  const { targetRef, isFixed } = useScrollFixed()

  return <div ref={targetRef} className={isFixed ? 'fixed' : ''}></div>
}
```

#### 指定 root 并补充 fixed 时样式

```javascript
function Comp() {
  const { targetRef, rootRef, isFixed, fixedStyle } = useScrollFixed({ limit: 90, fixedStyle: { top: 16 } })

  // fixedStyle: { position: 'fixed', zIndex: 100, top: 16 }

  return (
    <div className="container" ref={rootRef}>
      <div ref={targetRef} style={fixedStyle}>
        {' '}
        ...{' '}
      </div>
    </div>
  )
}
```
