---
nav:
  path: /native
---

## useScrollToTop

方便滚动 ScrollView 到顶部

### 类型声明

```typescript
function useScrollToTop(
  ref: any,
  options?: {
    animated?: boolean
  },
): Callback
```

### 用法

```javascript
function Comp() {
  const ref = React.useRef(null)
  const scrollToTop = useScrollToTop(ref)

  return (
    <ScrollView ref={ref}>
      {/* content */}
      <Touchable onPress={() => scrollToTop()}></Touchable>
    </ScrollView>
  )
}
```

自定义 scrollToTop 方法

```javascript
function Comp() {
  const ref = React.useRef(null)

  useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    }),
  )

  return <ScrollView ref={ref}>{/* content */}</ScrollView>
}
```
