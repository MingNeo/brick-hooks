---
nav:
  path: /web
---

## useInView

判断某个元素是否进入可视区域

如需提前触发 inView，可以使用[rootMargin](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
function useInView(options?: {
  target?: any
  root?: any
  onInView?: (status: Status) => any
  onOutView?: (status: Status) => any
  rootMargin?: number
  threshold?: number | number[]
}): {
  rootProps: {
    ref: (ref: any) => any
  }
  targetProps: {
    ref: (ref: any) => any
  }
  isInView: boolean
  ratio: number
}
```

### 用法

```javascript
function Comp({ onInView, rootRef, ...restProps }) {
  const { isInView, targetProps, rootProps } = useInView()

  useEffect(() => {
    if (isInView) {
      // ...
    }
  }, [isInView])

  return (
    <div {...rootProps} className="container">
      <div {...targetProps} {...restProps}>
        {' '}
        ...{' '}
      </div>
    </div>
  )
}
```

```javascript
// 使用onInView,onOutView 回调
const { isInView, targetProps, rootProps } = useInView({ onInView, onOutView })
```
