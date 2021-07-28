## useObjectStateImmer
useObjectStateImmer的Immer版本，可以更简单的修改状态

目前实现了两个版本(immer 版本和普通版本)。
建议业务组件中的状态集合，都使用useObjectState/useObjectStateImmer来替代useState/useReducer。

```javascript
// 使用setState 直接更新值的时候，与useObjectState一致，都是自动进行合并数据。
// 使用setState并使用更新函数来更新数据的时候，则可以直接操作state
function MyComponent() {
  const [homeData, setHomeData] = useObjectStateImmer({ test: 1 })

  // setState 默认自动merge
  const handleUpdateTest = () => setHomeData({ text: 1 })
  // homeData: { test: 1, text: 1 }

  // setState 不自动合并
  const handleUpdateTestNoMerge = () => setHomeData({ text: 1 }, false)
  // homeData: { text: 1 }

  // setState 使用更新函数
  const handleUpdateTestNoMerge = () => setHomeData(draftState => {
    draftState.text = 2
  })
  // homeData: { text: 2 }

  return <div>/* ... */</div>
}
```

使用methods/reducers
```javascript
const homeMethods = {
  updateTitle: (state, title) => {
    state.title = title
  }
}

function MyComponent() {
  const [homeData, setHomeData, { updateTitle, updatePageData }] = useObjectState({ test: 1 }, homeMethods)

  // 触发自定义reducer
  const handleUpdateTitle = () => updateTitle('test title')
  // homeData: { test: 1, title: 'test title' }

  return <div>/* ... */</div>
}
```

