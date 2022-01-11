## useCookie

方便使用cookie

```typescript
function useCookie(key: string): [string, SetItem, {
  get: () => string;
  refresh: () => void;
}]

const SetItem: (name: string, value: string | number | boolean, options: {
  days: any;
  path: any;
}) => Promise<unknown>
```

js无法自动监听cookie改变，因此，useCookie返回的cookie item值不会自动更新。
可以使用refreshItem来刷新为cookie中最新值，或使用api.get方法获取最新值

```javascript
const [userCookie, updateUserCookie, userCookieAPi] = useCookie('userName');

// 设置值
await updateUserCookie('klose')
// 获取最新
userCookieAPi.get()
// 刷新userCookie数据
userCookieAPi.refresh()
// 删除userCookie数据
userCookieAPi.delete()
```
