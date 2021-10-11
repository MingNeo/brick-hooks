## useEventListener

方便绑定event
```javascript
// 对指定dom节点绑定事件
useEventListener('resize', (e) => {
  // ...
}, { dom: window })

useEventListener('click', (e) => {
  // ...
}, { dom: document.querySelector('#xxx'), capture: true })

// 使用ref
const ref = useEventListener('click', (e) => {
  // ...
})

return <div ref={node => ref.current = node}></div>
```

