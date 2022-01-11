## useListSequenceLoad

列表页以分组模式按需加载下一组，适用每个item各不相同情况。如首页装修/信息流
多数情况下可以直接使用brick-hooks-native/brick-hooks-web的useLazySequenceLoad
useLazySequenceLoad 基于此hook及useInView自动进行懒加载。

但是对于首页动态装修的楼层、信息流列表等每个item高度都不相同，无法预先占位，且数据通常由item组件自身发送请求获取。则可以使用这个hooks进行按顺序分组懒加载。
每次都加载指定数量的组件。

一般的列表懒加载不一定适用useListSequenceLoad，可以在每个item中单独使用brickHooksWeb.useInView。

### 用法

```typescript
function useListSequenceLoad(listData?: any[], { groupSize }?: Options): {
  showList: any[];
  isAllLoaded: boolean;
  showfooterLoading: boolean;
  nextRenderIndex: number;
  loadNextGroup: () => void;
  reset: () => void;
}
```

```javascript
function Container() {
  const rootRef = useRef<any>()
  const { showfooterLoading, showList, loadNextGroup } = useListSequenceLoad(list, { groupSize: 3 })

  return (
    <div ref={(ref) => (rootRef.current = ref)} className="container">
      {showList.map((item) => <Item key={item.id}>{item.value}</Item>)}
      {!!showfooterLoading && <Loading onInView={loadNextGroup} rootRef={rootRef} />}
    </div>
  )
}

function Loading({ onInView, rootRef, ...restProps }) {
  const { targetProps } = useInView({ root: rootRef, onInView })
  return (
    <div {...targetProps} {...restProps}> Loading </div>
  )
}
```
