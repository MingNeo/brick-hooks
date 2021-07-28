## useObjectState

面向对象的useState，自动进行合并，基本可以认为等同于class组件的this.setState，并扩充了reducer的使用。
是useMethods的更进一步封装。

目前实现了两个版本(immer 版本和普通版本)。
建议业务组件中的相关联的一组状态，都使用useObjectState/useObjectStateImmer来替代useState/useReducer进行集合管理。

```javascript
function MyComponent() {
  const [homeData, setHomeData] = useObjectState({ test: 1 })

  // setState 默认自动merge
  const handleUpdateTest = () => setHomeData({ text: 1 })
  // homeData: { test: 1, text: 1 }

  // setState 不自动合并
  const handleUpdateTestNoMerge = () => setHomeData({ text: 1 }, false)
  // homeData: { text: 1 }

  return <div>/* ... */</div>
}
```

使用methods/reducers
```javascript
const homeMethods = {
  updateTitle: (prevState = {}, title) => ({ ...prevState, title }),
  updatePageData: (prevState = {}, payload) => ({ ...prevState, ...payload })
}

function MyComponent() {
  const [homeData, setHomeData, { updateTitle, updatePageData }] = useObjectState({ test: 1 }, homeMethods)

  // 触发自定义reducer
  const handleUpdateTitle = () => updateTitle('test title')
  // homeData: { test: 1, title: 'test title' }

  return <div>/* ... */</div>
}
```

