## useFixed

判断某个元素是否需要固定位置悬浮，多用于滚动到一定位置后，悬浮header等

```typescript
function useScrollFixed(options?: {
    target?: MutableRefObject<any> | any;
    root?: MutableRefObject<any> | any;
    limit?: (() => number) | number;
    fixedStyle?: Record<string, any>;
    horizontal?: boolean;
}): {
    isFixed: boolean;
    fixedStyle: {};
    targetRef: MutableRefObject<any>;
    rootRef: MutableRefObject<any>;
}
```
#### 相对window
```javascript
// 相对window
function Comp() {
  const { targetRef, isFixed, fixedStyle } = useScrollFixed()

  return (
    <div ref={targetRef} style={fixedStyle}>
    </div>
  )
}
```

#### 指定root并补充fixed时样式
```javascript
function Comp() {
  const { targetRef, rootRef, isFixed, fixedStyle } = useScrollFixed({ limit: 90, fixedStyle: { top: 16 }})

  return (
    <div className="container" ref={rootRef}>
      <div ref={targetRef} style={fixedStyle}> ... </div>
    </div>
  )
}
```