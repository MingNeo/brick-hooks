# `hydrogen-store`

一个简单的全局状态管理，只用来维护数据本身和修改数据的reducers，

* 简单使用与 useState用法基本一样，近乎无学习成本
* 无需添加Provider，不使用useContext，不会触发其他模块的重新渲染
* 可以更方便的使用reducer，类redux的方式管理数据
* 配合hydrogen-store-redux-plugin 可以使用redux-devtools 进行调试
* 配合hydrogen-store-effect-plugin 可以使用effect进行异步管理
* 配合hydrogen-store-immer-plugin 可以使用immer语法简化编写reducer

## Usage
仅需要把useState换成useStore，即可跨模块共享全局数据，无需添加Provider等处理。
同时做了性能优化，仅订阅使用的模块会触发更新，不会有使用useContext的性能问题

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
    setAddressState(prevState => ({ a: prevState?.a ? 1 : 2 }))
  }

  // ...
}
```

因为useStore用来处理的是全局数据，有时会需要初始化默认state, 可以在app入口处或模块入口处注册初始数据
```javascript
import { registerModule, useStore } from 'hydrogen-store'

registerModule('home', {
  state: { a: 1 }
})

function TestStore() {
  const [state, setState] = useStore('home')

  console.log(state) // {a: 1}
  // ...
}
```

useStore的第二个参数，为是否进行自动合并。默认开启，会对object格式的数据进行自动合并处理。


```javascript
import { registerModule, useStore } from 'hydrogen-store'

registerModule('home', {
  state: { a: 1 }
})

function TestStore() {
  const [state, setState] = useStore('home', true)

  const handleChangeState = () => {
    setState({ b: 100 })
    // 更新前：{a: 1}，更新后： { a: 1, b: 100 }
  }

  // 不论useStore是否配置第二个参数，在setState的时候，仍可以传递第二个参数，同样会进行合并
  const handleChangeStateMerge = () => {
    setState({ b: 100 }, true)
    // 更新前：{a: 1}，更新后： { a: 1, b: 100 }
    setState({ b: 100 }, false)
    // 更新前：{a: 1}，更新后的值为： { b: 100 }
  }
}
```
#### 方便的使用reducer
支持添加自定义reducer函数，对state进行更统一的管理。

使用switch case 的reducer是看起来很让人头疼的，直接使用reducers则清爽了很多

reducer格式为 (state: S, payload: any) => S

触发reducer则可以从第三个参数调用对应方法，或者使用dispatch进行触发

```javascript
registerModule('home', {
  state: { a: 1 },
  reducers: {
    updateTitle: (state, payload) => ({ ...state, title: payload }),
    updatePageBg: (state, payload) => ({ ...state, pageBg: payload })
  }
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

#### 使用redux devtool
即使因为种种原因你不想使用redux了，但是否时常会怀念redux-devtool的方便？hydrogen-store 可以方便开启redux-devtool。仅需引入一个插件

```javascript
import { usePlugins } from 'hydrogen-store'
import reduxPlugin from 'hydrogen-store-redux-plugin'

usePlugins([reduxPlugin])
```

好了，现在可以愉快的使用redux devtool进行调试了。hydrogen-store 本身不依赖redux，使用redux和不使用redux对于业务代码完全没有影响，你可以通过环境变量/打包配置等开启或禁用它。

使用独立实例时需配置devtoolId，用来在devtool中加以区分

#### 创建Store实例
如你所见，以上示例代码都是全局使用默认导出的Store实例，我们可以创建一个独立的Store实例吗？当然可以！
```javascript
import { createStore } from 'hydrogen-store'
import reduxPlugin from 'hydrogen-store-redux-plugin'

export const singleStore = createStore({
  modules: {
    test: {
      state: { a: 1 },
      reducers: {
        testAction: (state, payload) => ({ ...state, ...payload })
      }
    },
    address: {
      state: { addressList: [] }
    },
  },
  plugins: [reduxPlugin],
  // 每个store会连接不同的 redux devtool instance, 我们可以定义不同的id加以区分
  devtoolId: 'Test Next Store'
})

// 同样可以单独注册模块
singleStore.registerModule('home', {
  state: { a: 1 },
  reducers: {
    updateTitle: (state, payload) => ({ ...state, title: payload }),
    updatePageBg: (state, payload) => ({ ...state, pageBg: payload })
  }
})

function Home() {
  const [state = {}, setState, boundMethods] = singleStore.useStore('home', true)
  // ...
}
```

如果你喜欢，使用createStore创建的实例页可以直接使用react context包裹下，这样就可以像普通的context、unstated-next一样基于模块管理数据。
与直接使用react context 存储数据的区别是，store创建之后引用就不会变化，因此数据的变更不会触发无关组件更新，并且仍然可以使用redux devtool等等进行调试
```javascript
import { createContext } from 'react'
import { createStore } from 'hydrogen-store'

const addressStore = createStore({
  modules: {
    Address: {
      state: { addressList: [] },
      reducers: {
        testAction: (state, payload) => ({ ...state, ...payload })
      }
    }
  },
  plugins: [reduxPlugin],
  // 每个store会连接不同的 redux devtool instance, 我们可以定义不同的id加以区分
  devtoolId: 'Address Store'
})

const AddressStoreContext = createContext({ store: addressStore })

function Parent() {
  return <AddressStoreContext.Provider>
    // children
  </AddressStoreContext.Provider>
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

刚才我们已经注册了几个module，可以看到，module的具体结构如下

```javascript
{
  state: {}, // 初始化的state
  reducers: {} // 除了setState之外的自定义reducer
}
```
hydrogen-store 定义为基于module进行全局状态管理。所以应当避免在全局store根节点直接存储基本类型的值，而应该使用object格式，将一系列相关状态进行合并管理。以下写法不会报错，但应避免。
```javascript
// bad
const [cartCount, setCartCount] = useStore('cartCount')
const handleChange = () => setCartCount(1)

// good
const [{ cartCount } = {}, setCart] = useStore('cart')
const handleChange = () => setCart({ cartCount: 1 }, true)
```
仅在createStore或者registerModule中进行初始化。初始化并非必须的。

使用useStore('moduleName')进行使用。

##### reducers
使用reducer可以极大方便对数据对更加集中的管理。同样推荐将状态的系列变更处理放在自定义reducer中。
但是应该注意，虽然全局state+reducer有点redux的感觉，而且还能使用redux-devtool。
但是hydrogen-store的设计思路是一个不侵入hooks写法的状态库，更多类似的是React.useState/React.useReducer的全局化。
reducer应当只是纯函数，只做存储数据的处理/格式化。getter、异步action这些事情，都推荐放到组件中使用useMemo、useEffect等去处理。
虽然使用hydrogen-store可以很方便的存储全局状态，但是并不必要把所有数据都放在store中！

如果你真的喜欢/需要进行统一的状态管理，见下面的effects模块

#### effects
如果你非常喜欢将异步等等操作统一使用store进行管理，可以使用effectPlugin，就可以像使用dva/vuex一样管理异步的操作

effect 类似于 reducer，不同在于：
- effect 提交的是 reducer action，而不是直接变更状态。
- effect 可以包含任意异步操作。

effects 概念基本等同于dva的effects、vuex的actions

使用dispatch触发reducer action，使用dispatchEffect触发effect action

```typescript
type dispatchEffect = (effectName: string, payload: any, moduleName?:string) => any
```

!注意，如果使用reduxPlugin, effectPlugin插件应配置在reduxPlugin插件之前使用

```javascript
import { createStore } from 'hydrogen-store'
import effectPlugin from 'hydrogen-store-effect-plugin'

const testModel = {
  state: { dataList: [] },
  reducers: {
    testAction: (state, payload) => ({ ...state, ...payload })
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
    }
  }
}

export const singleStore = createStore({
  modules: {
    test: testModel,
    address: {
      state: { data: [] },
      effects: {
        async loadData({ state, dispatch }, payload) {
          // ...
        }
      }
    }
  },
  plugins: [effectPlugin]
})

function Home() {
  const [state = {}, setState, { dispatch, dispatchEffect }] = singleStore.useStore('home', true)
  useEffect(() => {
    dispatchEffect('loadData')
  }, [])
}
```
#### immer
使用immerPlugin，可以使用immer的语法简化编写reducer

!注意，当前版本不支持immerPlugin 和 reduxPlugin同时使用, 将在下个版本支持

```javascript
import { createStore } from 'hydrogen-store'
import immerPlugin from 'hydrogen-store-immer-plugin'

const testModel = {
  state: { data: { a: { b: 1 }} },
  reducers: {
    testAction: (state, payload) => (state.data.a.b = 2)
  },
  effects: {}
}

export const singleStore = createStore({
  modules: {
    test: testModel
  },
  plugins: [effectPlugin, immerPlugin]
})
```



