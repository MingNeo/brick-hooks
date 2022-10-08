## useLazySequenceLoad

列表页以分组模式按需加载下一组，适用每个 item 各不相同情况。如首页装修/信息流。基于 useListSequenceLoad 及 useInView 自动进行懒加载。

但是对于首页动态装修的楼层、信息流列表等每个 item 高度都不相同，无法预先占位，且数据通常由 item 组件自身发送请求获取。则可以使用这个 hooks 进行按顺序分组懒加载。每次都加载指定数量的组件。需要在列表底部设置一个 loading 组件，当 loading 进入可视区域时，则触发加载

一般的列表懒加载不一定适用 useLazySequenceLoad，可以在每个 item 中单独使用 brickHooksWeb.useInView。

### 类型声明

```typescript
function useLazySequenceLoad(
  listData: Record<string, any>[],
  { target, root, groupSize, onLoadingInView }: Options,
): {
  showfooterLoading: boolean
  showList: any[]
  rootProps: {
    ref: (ref: any) => any
  }
  loadingProps: {
    ref: (ref: any) => any
  }
}
```

### 用法

```javascript
function Container() {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, { groupSize: 3 })

  return (
    <div>
      <div>已加载列: {showList.map((v, i: number) => i + 1).join(',')}</div>
      <div {...rootProps} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? <div {...loadingProps}>Loading</div> : null}
      </div>
    </div>
  )
}
```
