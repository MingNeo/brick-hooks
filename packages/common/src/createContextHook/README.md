## createContextHook

这不是一个 React Hook，而是一个工厂函数，作用是对自定义 hooks 自动进行 React.context 包裹，可以方便的进行状态的共享甚至可以不使用全局状态管理库，仅通过这种方式来管理状态可用于替代手工使用 React context、unstated-next 等

```javascript
function useAddressContainer({ addressList }) {
  const [xxx, setXXX] = useStore('address')
  const [addressState, setAddressState, { setDefault, deleteAddress }] = useObjectState(
    {
      addressList,
    },
    addressMethods,
  )
  return { addressState, setDefault, deleteAddress }
}

const { Provider, useHook: useAddress } = createContextHook(useAddressContainer)

function AddressParent() {
  const initialState = {
    addressList: [],
  }
  return <Provider {...initialState}>{children}</Provider>
}

function AddressList() {
  const { addressState } = useAddress()
}

function AddressItem(props) {
  const { setDefault, deleteAddress } = useAddress()
}
```

#### 通过 getter 分发 hooks

默认情况下使用 useHook 将返回所有的数据。如果我们需要仅关注其中几个值，只有关注的值变化的时候才触发组件刷新。通常可以再自己做一个自定义 Hooks 来细化使用，createContextHook 使用 getter 简化了这一过程。

需要返回某个值，就在 getter 中直接返回就可以。

如果需要自行组装成简化的格式，如原始 result 为{ a, b, c, setState }，想要自行组装成[a, setState] 或 { a, setState }的格式，则需要用到自定义函数 wrapperState 包裹返回值。包裹后会对 obj/array 的所有子数据与历史数据进行浅比较。如果数据变化了，但自定义返回的字段未改变，则会判定该分发 hook 为无变化，因而不会触发组件刷新。

注意，直接返回数据时无需进行包裹处理！！！！仅当自行装配数据或需要对 obj、array 的所有属性进行浅比较时使用。

```javascript
function useAddressContainer({ addressList }) {
  const [xxx, setXXX] = useStore('address')
  const [addressState, setAddressState, { setDefault, deleteAddress }] = useObjectState({
    addressList,
  })
  return { addressState, setAddressState, setDefault, deleteAddress }
}

const { Provider, useHook: useAddress } = createContextHook(useAddressContainer, {
  useAddressList: (result) => result.addressState.addressList, // 无需使用wrapperState
  useAddressState: (result, { wrapperState }) => wrapperState([result.addressState, result.setAddressState]),
  useAddressController: (result, { wrapperState }) =>
    wrapperState({ setDefault: result.setDefault, deleteAddress: result.deleteAddress }),
})

function AddressParent() {
  const initialState = {
    addressList: [],
  }
  return <Provider {...initialState}>{children}</Provider>
}

function AddressList() {
  const addressList = useAddressList()
}
```
