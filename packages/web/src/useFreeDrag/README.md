## useDrag

可以快速给一个绝对定位的节点提供自由拖拽能力

```javascript
function Comp() {
  const [dragStyle, setDragStyle] = useState({})
  const { onMousedown } = useFreeDrag((rect) => setDragStyle(rect))
  const ref = useEventListener('mousedown', onMousedown)

  return (
    <div style={{ position: 'relative', height: 450, width: '100%' }}>
      <div
        ref={(r) => (ref.current = r)}
        style={{ position: 'absolute', height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }}
      />
    </div>
  )
}
```
