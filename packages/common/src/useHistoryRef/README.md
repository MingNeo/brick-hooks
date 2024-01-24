## useHistoryRef

创建、存储、管理历史。并可进行 undo、redo 等操作。

### 演示

<code src="./demo.tsx"></code>

### 类型声明

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

### 用法

```javascript
import { useHistoryRef } from 'brick-hooks'

function MyComponent() {
  const [value, setValue] = useState()
  const forceUpdate = useForceRender()
  const { undo, redo, push: pushHistoryRecord, last, undoList, redoList, history } = useHistoryRef()

  return (
    <div>
      <p>inputValue: {count}</p>
      <input onChange={(e) => {
        setValue(e.target.value)
        pushHistoryRecord(count)
      }}>inc</input>
      <button disabled={undoList.length < 1} onClick={undo}>
        undo {undoList.length}
      </button>
      <button disabled={redoList.length < 1} onClick={redo}>
        redo
      </button>
    </div>
  )
}
```
历史变动时，默认不会触发组件更新。这是因为通常只有撤回、重做时才需要手工更新组件。
如需强制触发组件刷新，可设置renderOnChange为true 或使用 onUpdate 参数进行自定义处理

默认使用 JSON.stringify、JSON.parse 来进行数据的序列化和反序列化，也可以通过 dump、parse 参数手工处理

```javascript
function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef({
    dump: (source) => source,
    parse: (value) => value,
  })
  return <div>...</div>
}
```
