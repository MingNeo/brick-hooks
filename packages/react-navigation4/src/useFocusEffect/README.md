## useFocusEffect

直接使用 navigation.addListener('willFocus', callback)事件用起来有各种问题，如不是每次切换到页面都会触发

基本等同于 react-navigation5 的 useFocusEffect，适配到 react-navigation4，如果 react-navigation5 以上请使用 https://reactnavigation.org/docs/use-focus-effect

传入的 effect 函数需要使用 useCallback 处理，否则 re-render 每次都将触发

### 用法

```javascript
function Comp({ userId }) {
  const [user, setUser] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = API.subscribe(userId, (user) => setUser(user))

      return () => unsubscribe()
    }, [userId]),
  )

  return <ProfileContent user={user} />
}
```
