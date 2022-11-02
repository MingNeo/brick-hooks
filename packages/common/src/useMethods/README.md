## useMethods

一个非常有用的 hooks！绝大部分的业务的开发，都是状态加一系列强关联的行为，这样的模式。通常我们直接在业务里写代码，会有如下问题 1、太多 useState、useCallback，各种重复编码。 2、修改的时候很难找到状态与行为的对应关系。 3、使用 useReducer 的时候，reducer 又臭又长

这个 hooks 就是为此而生的，只做了一件事，将一个初始值和一些操作值的方法变成 hooks。也可以说是更加简单清晰的 useReducer。

目前实现了两个版本(immer 版本见 useMethodsImmer)。当你需要使用 useReducer 的时候，可以直接使用这个 hooks 来替代。当数据是 obj 格式的时候，也可以使用 useObjectState

### 用法

```javascript
const counterReducers = {
  inc: (value) => value + 1,
  dec: (value) => value - 1,
}

function MyComponent({ obj }) {
  const [state, { inc, dec }] = useMethods(counterReducers, 0)

  return (
    <div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>inc</button>
    </div>
  )
}
```
