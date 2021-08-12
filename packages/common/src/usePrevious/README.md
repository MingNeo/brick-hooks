## usePrevious
获取上一次的值，默认为最近一次变化前的值。也可以配置为每次rerender时触发

```javascript
function MyComponent(props) {
  const prevData = usePrevious(props.data)
  // 每次render都返回上次的render时的props.data值
  const prevRenderData = usePrevious(props.data, false)

  return <div>/* ... */</div>
}
```
