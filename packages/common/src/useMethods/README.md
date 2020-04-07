#### 
一个非常有用的hooks！
绝大部分的业务的开发，都是状态加一系列强关联的行为，这样的模式。
通常我们直接在业务里写代码，会有如下问题
  1、太多useState、useCallback，各种重复编码。
  2、修改的时候很难找到状态与行为的对应关系。

这个hooks就是为此而生的。简单来说，给我一个初始值和一堆操作值的方法，我帮你变成hooks。也可以说是简化下使用useReducer。
目前实现了两个版本(immer版本和普通版本)。
当一个state比较复杂，你需要使用reducer的时候，也可以直接使用这个hooks来替代。
```javascript
// 普通版本
const methodsCounter = {
  inc: value => value + 1,
  dec: value => value - 1
}

function MyComponent({ obj }) {
  const [state, counterMethods] = useMethods(methodsCounter, 0);
    
  return <div>
    <button onClick={() => counterMethods.inc()}>inc</button>
    <button onClick={() => counterMethods.dec()}>inc</button>
  </div>;
}

```

```javascript
// immer版本
// immer版本的特点就是使用immer，因此数据的操作可以无需一层层创建新的对象，对数据进行直接修改就可以
const methodsCounter = state => ({
  inc: (value) => (value += 1),
  dec: (value) => (value -= 1)
})

function MyComponent({ obj }) {
  const [state, counterMethods] = useMethodsImmer(methodsCounter, 0);
    
  return <div>
    <button onClick={() => counterMethods.inc()}>inc</button>
    <button onClick={() => counterMethods.dec()}>inc</button>
  </div>;
}

...

// 数据很简单的情况下可能差不多，但是在数据结构比较复杂的时候，使用immer会直观简单的多
// 不使用immer如下
const methods = {
  updateValue: value => ({
    ...oldValue,
    objA: {
        ...oldValue?.objA,
        objB: {
            ...oldValue?.objA?.objB,
            value: newValue
        },
    },
}),
}
// 使用useMethodsImmer
const methods = state => ({
  updateValue: (value) => (value.objA.objB.value = newValue),
})

```