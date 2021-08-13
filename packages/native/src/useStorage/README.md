## useStorage
方便使用react-native的AsyncStorage，可以直接更新obj、数组等格式，这个hook会自动转化为string并存储

```javascript
const { getValue, setValue, clear } = useStorage('user')

const userCacheValue = await getValue()
const setUserCacheValue = await setValue({ id: 1, name: 'klose' })

// 也可以增加一个监听函数，当使用useStorage的setValue、clear更新storage数据时，触发回调
useStorage('user', newUserCacheValue => {
  // ...
})
```