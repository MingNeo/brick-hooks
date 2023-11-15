## useObjectState

面向对象的 useState，自动进行合并，基本可以认为等同于 class 组件的 this.setState，并扩充了 reducer 的使用。是 useMethods 的更进一步封装。

目前实现了两个版本(immer 版本和普通版本)。建议业务组件中的相关联的一组状态，都使用 useObjectState/useObjectStateImmer 来替代 useState/useReducer 进行集合管理。

### 类型声明

```typescript
function useObjectState<S extends State>(initialState?: S, methods?: Methods<S>): [S, SetState, BoundActionMethods]
```

### 用法

```javascript
function MyComponent() {
  const [homeData, setHomeData] = useObjectState({ test: 1 })

  // setState 默认自动merge
  const handleUpdateTest = () => setHomeData({ text: 1 })
  const handleUpdateTestFn = () => setHomeData((prevState) => ({ text: 1 }))
  // homeData: { test: 1, text: 1 }

  // setState 不自动合并
  const handleUpdateTestNoMerge = () => setHomeData({ text: 1 }, false)
  const handleUpdateTestNoMergeFn = () => setHomeData((prevState) => ({ text: 1 }), false)
  // homeData: { text: 1 }

  return <div>/* ... */</div>
}
```

使用 methods

```javascript
const homeReducers = {
  updateTitle: (prevState = {}, title) => ({ ...prevState, title }),
  updatePageData: (prevState = {}, payload) => ({ ...prevState, ...payload }),
}

function MyComponent() {
  const [homeData, setHomeData, methods] = useObjectState({ test: 1 }, homeReducers)

  // 触发自定义reducer
  const handleUpdateTitle = () => methods.updateTitle('test title')
  // 亦可使用dispatch
  const handleUpdateTitle = () => methods.dispatch('updateTitle', 'test title')
  // next homeData: { test: 1, title: 'test title' }

  return <div>/* ... */</div>
}
```
