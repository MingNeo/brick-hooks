## useHistoryRef

创建、存储、管理历史。并可进行undo、redo等操作。返回一个ref对象

```typescript
function useHistoryRef<Raw, Serialized = Raw>(options?: {
  max?: number // 最多保存多少条数据，默认不限制
  dump?: (source: Raw) => Serialized // 序列化数据的函数
  parse?: <Raw>(value: Serialized) => Raw // 反序列化数据的函数
  onUpdate?: (value: Raw, dump: HistoryStock<Serialized>) => void // 更新数据的回调
}): {
  source: Raw // 原始数据
  history: HistoryStock<Serialized>[] // 历史记录列表
  last: HistoryStock<Serialized> // 最后一条历史记录
  undoList: HistoryStock<Serialized>[] // 历史记录列表，同history
  redoList: HistoryStock<Serialized>[] // 重做的历史记录列表
  canUndo: boolean // 是否可以撤销
  canRedo: boolean // 是否可以重做
  undo(): void // 撤销
  redo(): void // 重做
  clear(): void // 清空历史记录
  push(newSource: Raw): void // 创建一条新历史
  reset(): void // 重置到最近的记录
  getHistory: HistoryStock<Serialized>[]
  getUndoList: HistoryStock<Serialized>[]
  getRedoList: HistoryStock<Serialized>[]
}
```

### 使用
```javascript
function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef()
  return <div>...</div>
}
```

默认使用JSON.stringify、JSON.parse来进行数据的序列化和反序列化，也可以通过dump、parse参数手工处理
```javascript
function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef({
    dump: (source) => source,
    parse: (value) => value
  })
  return <div>...</div>
}
```

#### 变化时触发渲染
本hook返回值并不是react的state，因此不会触发组件更新。
可使用onUpdate参数进行自定义处理或使用useHistoryState
```javascript
function MyComponent() {
  const [count, { inc }] = useCounter(0)
  const forceUpdate = useForceRender()
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef({
    onUpdate: (nextState) => {
      // 历史发生变化或触发undo等操作时，强制组件更新
      forceUpdate()
    },
  })

  useEffect(() => {
    // count变化时存储历史
    push(count)
  }, [count])

  return (
    <div>
      <p>inputValue: {count}</p>
      <button onClick={(e) => inc()}>inc</button>
      <button disabled={undoList.length < 1} onClick={undo}>
        undo {undoList.length}
      </button>
      <button disabled={redoList.length < 1} onClick={redo}>
        redo
      </button>
      <p>last: {JSON.stringify(last)}</p>
      <p>undoList: {JSON.stringify(undoList)}</p>
      <p>history: {JSON.stringify(history)}</p>
      <p>redoList: {JSON.stringify(redoList)}</p>
    </div>
  )
}
```
