## useAsyncStorage
方便使用react-native的AsyncStorage，可以直接更新obj、数组等格式，这个hook会自动转化为string并存储

```javascript
const { getValue, setValue, clear } = useAsyncStorage('user')

const userCacheValue = await getValue()
const setUserCacheValue = await setValue({ id: 1, name: 'klose' })

// 也可以增加一个监听函数，当使用useAsyncStorage的setValue、clear更新storage数据时，触发回调
// 如将storage的值绑定到一个state，storage变化时触发组件渲染
const [cacheUser, setCacheUser] = useState()
useAsyncStorage('user', newUserCacheValue => {
  // ...
  setCacheUser(newUserCacheValue)
})
```