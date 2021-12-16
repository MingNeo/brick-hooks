## useFocusEffect
直接使用navigation.addListener('willFocus', callback)事件用起来有各种问题，如不是每次切换到页面都会触发

基本等同于react-navigation5的useFocusEffect，适配到react-navigation4，如果react-navigation5以上请使用
https://reactnavigation.org/docs/use-focus-effect

传入的effect 函数需要使用useCallback处理，否则re-render每次都将触发

```javascript
function Comp({ userId }) {
  const [user, setUser] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = API.subscribe(userId, user => setUser(user));

      return () => unsubscribe();
    }, [userId])
  );

  return <ProfileContent user={user} />;
}
```