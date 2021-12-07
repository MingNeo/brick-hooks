## useEventListener

方便为dom节点绑定event，组件卸载时自动进行解绑
```javascript
// 通过dom指定需要绑定事件的节点，如果不指定且未使用ref则会默认使用window
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

