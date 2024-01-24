---
nav:
  path: /web
---

## useFreeDrag

可以快速给一个绝对定位的节点提供自由拖拽能力

### 演示

<code src="./demo.tsx" ></code>

### 类型声明

```typescript
interface Rect {
  top: number
  left: number
}

type OnDragMoving = (rect: Rect, event: MouseEvent) => void

interface DragStyle {
  top: number
  left: number
  position?: 'absolute'
}

function useFreeDrag(
  onDragMoving?: OnDragMoving,
  options?: {
    initialRect?: Rect
  },
): {
  onMousedown: (e: MouseEvent) => void
  style: DragStyle
  props: {
    onMousedown: (e: MouseEvent) => void
    style: DragStyle
  }
  parentStyle: {
    position: 'relative'
  }
}
```

### 用法

```javascript
function Comp() {
  const { onMousedown, style: dragStyle } = useFreeDrag((rect) => {
    console.log(rect)
  })

  return (
    <div style={{ position: 'relative', height: 200, width: '100%' }}>
      <div onMousedown={onMousedown} style={{ height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }} />
    </div>
  )
}
```

如果初始状态不是 left:0,top:0，则需要设置 initialRect

```javascript
  const { onMousedown, style: dragStyle } = useFreeDrag(() => {}, { initialRect: { left: 10, top: 10 })
```
