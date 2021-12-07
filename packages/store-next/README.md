# `hydrogen-store`

一个简单的全局状态管理，只用来维护数据本身和修改数据的 reducers

- 简单使用与 useState 用法基本一样，近乎无学习成本
- 无需添加 Provider，不使用 useContext，不会触发其他模块的重新渲染
- 可以更方便的使用 reducer，类 redux 的方式管理数据
- 配合 hydrogen-store-redux-plugin 可以使用 redux-devtools 进行调试
- 配合 hydrogen-store-effect-plugin 可以使用 effect 进行异步管理
- 配合 hydrogen-store-immer-plugin 可以使用 immer 语法简化编写 reducer

## Usage

仅需要把 useState 换成 useStore，即可跨模块共享全局数据，无需添加 Provider 等处理。
同时做了性能优化，仅订阅使用的模块会触发更新，不会有使用 useContext 的性能问题

```javascript
import { useStore } from 'hydrogen-store'

// 使用useStore，并指定模块名称
function useHome() {
  const [state = {}, setState] = useStore('home')
  // ...
}

function useAddress() {
  const [addressState = {}, setAddressState] = useStore('address')

  // 直接setState一个值
  const handleChangeState = () => {
    setAddressState({ a: 100 })
  }

  // 使用更新函数
  const handleChangeStateByFn = () => {
    setAddressState((prevState) => ({ a: prevState?.a ? 1 : 2 }))
  }

  // ...
}
```

因为 useStore 用来处理的是全局数据，有时会需要初始化默认 state, 可以在 app 入口处或模块入口处注册初始数据

```javascript
import { registerModule, useStore } from 'hydrogen-store'

registerModule('home', {
  state: { a: 1 },
})

function TestStore() {
  const [state, setState] = useStore('home')

  console.log(state) // {a: 1}
  // ...
}
```

useStore 的第二个参数，为是否进行自动合并。默认开启，会对 object 格式的数据进行默认自动合并处理。
同时，在 setState 的时候，仍可以通过第二个参数控制当前是否进行合并

```javascript
import { registerModule, useStore } from 'hydrogen-store'

registerModule('home', {
  state: { a: 1 },
})

function TestStore() {
  const [state, setState] = useStore('home', true)

  const handleChangeState = () => {
    setState({ b: 100 })
    // 更新前：{a: 1}，更新后： { a: 1, b: 100 }
  }

  // 不论useStore是否配置第二个参数，在setState的时候，仍可以通过第二个参数控制当前是否进行合并
  const handleChangeStateMerge = () => {
    setState({ b: 100 }, true)
    // 更新前：{a: 1}，更新后： { a: 1, b: 100 }
    setState({ b: 100 }, false)
    // 更新前：{a: 1}，更新后的值为： { b: 100 }
  }
}
```

#### 方便的使用 reducer

支持添加自定义 reducer 函数，对 state 进行更统一的管理。

使用 switch case 的 reducer 是看起来很让人头疼的，直接使用 reducers 则清爽了很多

reducer 格式为 (state: S, payload: any) => S

触发 reducer 则可以从第三个参数调用对应方法，或者使用 dispatch 进行触发

```javascript
registerModule('home', {
  state: { a: 1 },
  reducers: {
    updateTitle: (state, payload) => ({ ...state, title: payload }),
    updatePageBg: (state, payload) => ({ ...state, pageBg: payload }),
  },
})

function TestStore() {
  const [state = {}, setState, { updateTitle, dispatch }] = useStore('home')

  const handleUpdateTitle = () => {
    updateTitle('title')
  }

  const handleUpdatePageBg = () => {
    dispatch('updatePageBg', '#fff')
  }
}
```

#### 使用 redux devtool

即使因为种种原因你不想使用 redux 了，但是否时常会怀念 redux-devtool 的方便？hydrogen-store 可以方便开启 redux-devtool。仅需引入一个插件

```javascript
import { usePlugins } from 'hydrogen-store'
import reduxPlugin from 'hydrogen-store-redux-plugin'

usePlugins([reduxPlugin])
```

好了，现在可以愉快的使用 redux devtool 进行调试了。hydrogen-store 本身不依赖 redux，使用 redux 和不使用 redux 对于业务代码完全没有影响，你可以通过环境变量/打包配置等开启或禁用它。

使用独立实例时需配置 devtoolId，用来在 devtool 中加以区分

#### 创建 Store 实例

如你所见，以上示例代码都是全局使用默认导出的 Store 实例，我们可以创建一个独立的 Store 实例吗？当然可以！

```javascript
import { createStore } from 'hydrogen-store'
import reduxPlugin from 'hydrogen-store-redux-plugin'

export const singleStore = createStore({
  // 创建时定义模块
  modules: {
    test: {
      state: { a: 1 },
      reducers: {
        testAction: (state, payload) => ({ ...state, ...payload }),
      },
    },
    address: {
      state: { addressList: [] },
    },
  },
  plugins: [reduxPlugin],
  // 每个store会连接不同的 redux devtool instance, 我们可以定义不同的id加以区分
  devtoolId: 'Test Next Store',
})

// 同样可以单独注册模块
singleStore.registerModule('home', {
  state: { a: 1 },
  reducers: {
    updateTitle: (state, payload) => ({ ...state, title: payload }),
    updatePageBg: (state, payload) => ({ ...state, pageBg: payload }),
  },
})

function Home() {
  const [state = {}, setState, boundMethods] = singleStore.useStore('home', true)
  // ...
}
```

如果你喜欢，使用 createStore 创建的实例页可以直接使用 react context 包裹下，这样就可以像普通的 context、unstated-next 一样基于模块管理数据。
与直接使用 react context 存储数据的区别是，store 创建之后引用就不会变化，因此数据的变更不会触发无关组件更新，并且仍然可以使用 redux devtool 等等进行调试

```javascript
import { createContext } from 'react'
import { createStore } from 'hydrogen-store'

const addressStore = createStore({
  modules: {
    Address: {
      state: { addressList: [] },
      reducers: {
        testAction: (state, payload) => ({ ...state, ...payload }),
      },
    },
  },
  plugins: [reduxPlugin],
  // 每个store会连接不同的 redux devtool instance, 我们可以定义不同的id加以区分
  devtoolId: 'Address Store',
})

const AddressStoreContext = createContext({ store: addressStore })

function Parent() {
  return <AddressStoreContext.Provider>// children</AddressStoreContext.Provider>
}

function useAddressStore() {
  const { store } = useContext(AddressStoreContext)
  return store.useStore('Address')
}

function Child() {
  const [{ addressList }, setAddressState] = useAddressStore()
}
```

#### module

刚才我们已经注册了几个 module，可以看到，module 的具体结构如下

```javascript
{
  state: {}, // 初始化的state
  reducers: {} // 除了setState之外的自定义reducer
}
```

hydrogen-store 定义为基于 module 进行全局状态管理。所以应当避免在全局 store 根节点直接存储基本类型的值，而应该使用 object 格式，将一系列相关状态进行合并管理。以下写法不会报错，但应避免。

```javascript
// bad
const [cartCount, setCartCount] = useStore('cartCount')
const handleChange = () => setCartCount(1)

// good
const [{ cartCount } = {}, setCart] = useStore('cart')
const handleChange = () => setCart({ cartCount: 1 }, true)
```

仅在 createStore 或者 registerModule 中进行初始化。初始化并非必须的。

使用 useStore('moduleName')进行使用。

##### reducers

使用 reducer 可以极大方便对数据对更加集中的管理。同样推荐将状态的系列变更处理放在自定义 reducer 中。
但是应该注意，虽然全局 state+reducer 有点 redux 的感觉，而且还能使用 redux-devtool。
但是 hydrogen-store 的设计思路是一个不侵入 hooks 写法的状态库，更多类似的是 React.useState/React.useReducer 的全局化。
reducer 应当只是纯函数，只做状态的处理/格式化。getter、异步 action 这些事情，都推荐放到组件中使用 useMemo、useEffect 等去处理。
虽然使用 hydrogen-store 可以很方便的存储全局状态，但是并不必要把所有数据都放在 store 中！

如果你真的喜欢/需要进行统一的状态管理，见下面的 effects 模块

#### effects

如果你非常喜欢将异步等等操作统一使用 store 进行管理，可以使用 effectPlugin，就可以像使用 dva/vuex 一样管理异步的操作

effect 类似于 reducer，不同在于：

- effect 提交的是 reducer action，而不是直接变更状态。
- effect 可以包含任意异步操作。

effects 概念基本等同于 dva 的 effects、vuex 的 actions

使用 dispatch 触发 reducer action，使用 dispatchEffect 触发 effect action

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

#### immer

使用 immerPlugin，可以使用 immer 的语法简化编写 reducer

使用 immer 插件之后，你拥有了一个 react 版的 vuex

```javascript
// 使用前
const reducers = {
  testAction: (state, payload) => ({
    ...state,
    data: { 
      ...state.data,
      a: { 
        ...state.data.a, 
        b: 2 
      } 
    },
  }),
}

// 使用后
const reducers = {
  testAction: (state, payload) => { state.data.a.b = 2 },
}
```

```javascript
import { createStore } from 'hydrogen-store'
import immerPlugin from 'hydrogen-store-immer-plugin'

const testModel = {
  state: { data: { a: { b: 1 } } },
  reducers: {
    testAction: (state, payload) => { state.data.a.b = 2 },
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
