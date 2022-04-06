## useFocusApp
方便使用react-native的AsyncStorage，可以直接更新obj、数组等格式，这个hook会自动转化为string并存储

```javascript
useFocusApp(() => {
  // ...onFocus
})
```