## useMethodsImmer
useMethods 的immer 版本

一个非常有用的 hooks！
绝大部分的业务的开发，都是状态加一系列强关联的行为，这样的模式。
通常我们直接在业务里写代码，会有如下问题
1、太多 useState、useCallback，各种重复编码。
2、修改的时候很难找到状态与行为的对应关系。
3、使用useReducer的时候，reducer又臭又长

这个 hooks 就是为此而生的，只做了一件事，将一个初始值和一些操作值的方法变成 hooks。也可以说是更加简单清晰的 useReducer。

目前实现了两个版本(immer 版本和普通版本)。
当你需要使用 useReducer 的时候，可以直接使用这个 hooks 来替代。当数据是obj格式的时候，也可以使用useObjectState

### 普通版本
```javascript
const counterReducers = {
  inc: (value) => value + 1,
  dec: (value) => value - 1,
}

function MyComponent({ obj }) {
  const [state, { inc, dec, dispatch }] = useMethods(counterReducers, 0)

  return (
    <div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dispatch('inc')}>dispatchInc</button>
      <button onClick={() => dec()}>dec</button>
    </div>
  )
}
```

### immer版本
immer版本的特点就是使用immer，因此数据的操作可以无需一层层创建新的对象，对数据进行直接修改
```javascript
const counterReducers = state => ({
  inc: (value) => (value += 1),
  dec: (value) => (value -= 1)
})

function MyComponent({ obj }) {
  const [state, { inc, dec, dispatch }] = useMethodsImmer(counterReducers, 0);

  return <div>
    <button onClick={() => inc()}>inc</button>
    <button onClick={() => dec()}>dec</button>
  </div>;
}

...

// 数据很简单的情况下可能差不多，但是在数据结构比较复杂的时候，使用immer会直观简单的多
// 使用useMethods
const methods = {
  updateObjB: (prevState,value) => ({
    ...prevState,
    objA: {
        ...prevState?.objA,
        objB: {
            ...prevState?.objA?.objB,
            value: newValue
        },
    },
}),
}
// 使用useMethodsImmer
const methods = {
  updateObjB: (draftState, newValue) => (draftState.objA.objB.value = newValue),
}

```
