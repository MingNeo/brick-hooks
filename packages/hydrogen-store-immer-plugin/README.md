# `hydrogen-store-immer-plugin`

> 使用 immerPlugin，可以使用 immer 的语法简化编写 reducer // TODO 暂时不能与 hydrogen-store-redux-plugin 同时使用，将在下个版本支持

## 用法

```javascript
// 使用前
const reducers = {
  testAction: (state, payload) => ({
    ...state,
    data: {
      ...state.data,
      a: {
        ...state.data.a,
        b: 2,
      },
    },
  }),
}

// 使用后
const reducers = {
  testAction: (state, payload) => {
    state.data.a.b = 2
  },
}
```

```javascript
import { createStore } from 'hydrogen-store'
import immerPlugin from 'hydrogen-store-immer-plugin'

const testModel = {
  state: { data: { a: { b: 1 } } },
  reducers: {
    testAction: (state, payload) => {
      state.data.a.b = 2
    },
  },
  effects: {},
}

export const singleStore = createStore({
  modules: {
    test: testModel,
  },
  plugins: [effectPlugin, immerPlugin],
})
```
