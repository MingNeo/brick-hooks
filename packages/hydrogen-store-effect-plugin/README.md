# `hydrogen-store-effect-plugin`

> hydrogen-store effect 插件，使用后可以方便使用 effect

如果你非常喜欢将异步等等操作统一使用 store 进行管理，可以使用 effectPlugin，就可以像使用 dva/vuex 一样管理异步的操作 effect 类似于 reducer，不同在于：

- effect 提交的是 reducer action，而不是直接变更状态。
- effect 可以包含任意异步操作。

effects 概念基本类似 dva 的 effects、vuex 的 actions

## 用法

使用 dispatch 触发 reducer action，使用 dispatchEffect 触发 effect action

### 类型声明

```typescript
type dispatchEffect = (effectName: string, payload: any, moduleName?: string) => any
```

```javascript
import { createStore } from 'hydrogen-store'
import effectPlugin from 'hydrogen-store-effect-plugin'

const testModel = {
  state: { dataList: [] },
  reducers: {
    testAction: (state, payload) => ({ ...state, ...payload }),
  },
  effects: {
    async loadData({ state, dispatch }, payload) {
      const dataList = await fetchData()
      dispatch('testAction', { dataList })
      return dataList
    },
    // effect中可以触发其他effect
    async testEffect({ state, dispatchEffect }, payload) {
      const dataList = await dispatchEffect('loadData', payload)
      // dispatchEffect的第三个参数可以触发其他模块effect
      dispatchEffect('loadData', dataList, 'address')
      // ...
    },
  },
}

export const singleStore = createStore({
  modules: {
    test: testModel,
    address: {
      state: { data: [] },
      effects: {
        async loadData({ state, dispatch }, payload) {
          // ...
        },
      },
    },
  },
  plugins: [effectPlugin],
})

function Home() {
  const [state = {}, setState, { dispatch, dispatchEffect }] = singleStore.useStore('home', true)
  useEffect(() => {
    dispatchEffect('loadData')
  }, [])
}
```
