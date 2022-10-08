---
nav:
  path: /native
---

## useAsyncStorage

方便使用 react-native 的 AsyncStorage，可以直接更新 obj、数组等格式，这个 hook 会自动转化为 string 并存储

```javascript
const { getValue, setValue, clear } = useAsyncStorage('user')

const userCacheValue = await getValue()
const setUserCacheValue = await setValue({ id: 1, name: 'klose' })

// 也可以增加一个监听函数，当使用useAsyncStorage的setValue、clear更新storage数据时，触发回调
// 如将storage的值绑定到一个state，storage变化时触发组件渲染
const [cacheUser, setCacheUser] = useState()
useAsyncStorage('user', (newUserCacheValue) => {
  // ...
  setCacheUser(newUserCacheValue)
})
```
