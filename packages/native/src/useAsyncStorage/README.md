---
nav:
  path: /native
---

## useAsyncStorage

方便使用 react-native 的 AsyncStorage，可以直接更新 obj、数组等格式，这个 hook 会自动转化为 string 并存储

### 类型声明

```typescript
type GetValue = (itemName: string) => Promise<any>
type SetValue = (value: string | number | Record<string, any> | any[]) => void
type Clear = () => void
type Callback = (nextValue: any) => void

function useAsyncStorage(
  itemName: string,
  onStorageValueChange?: Callback,
): {
  getValue: GetValue
  setValue: SetValue
  clear: Clear
}
```

### 用法

```javascript
const { getValue, setValue, clear } = useAsyncStorage('user')

const cachedUser = await getValue()
const handleSetCachedUser = () => setValue({ id: 1, name: 'klose' })

// 也可以增加一个监听函数，当使用useAsyncStorage的setValue、clear更新storage数据时，触发回调
// 如将storage的值绑定到一个state，storage变化时触发组件渲染
const [cachedUser, setCachedUser] = useState()
useAsyncStorage('user', (newUserCacheValue) => {
  // ...
  setCacheUser(newUserCacheValue)
})
```
