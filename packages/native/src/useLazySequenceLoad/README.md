## useLazySequenceLoad

列表页以分组模式按需加载下一组，适用每个 item 各不相同情况。如首页装修/信息流
基于 useListSequenceLoad 及 useInView 自动进行懒加载。
列表底部必须有一个Loading，用于判断是否需要加载下一组。(可以设置不可见)

但是对于首页动态装修的楼层、信息流列表等每个 item 高度都不相同，无法预先占位，且数据通常由 item 组件自身发送请求获取。则可以使用这个 hooks 进行按顺序分组懒加载。
每次都加载指定数量的组件。

一般的列表懒加载不一定适用 useLazySequenceLoad，可以在每个 item 中单独使用 brickHooksWeb.useInView。

### 用法

```typescript
function useLazySequenceLoad(
  listData: any,
  { target, root, groupSize, onLoadingInView }: Options
): {
  showfooterLoading: boolean
  showList: any[]
  rootProps: {
    ref: (ref: any) => any
    onScroll: DebunceFn
  }
  loadingProps: {
    ref: (ref: any) => any
  }
}
```

```javascript
function Container() {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, { groupSize: 3 })

  return (
    <View>
      <View {...rootProps} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? (
          <View {...loadingProps}>
            <Text>Loading</Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}
```

如需提前触发inView，可以使用[rootMargin](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

```javascript
// 距离可视区域100像素时提前加载
useLazySequenceLoad(list, { groupSize: 3, rootMargin: 100 })
```
