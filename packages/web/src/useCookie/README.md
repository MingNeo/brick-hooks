---
nav:
  path: /web
---

## useCookie

方便使用 cookie

### 类型声明

```typescript
type SetItem = (value: string | number | boolean, options?: { days: number; path: string }) => void

type Value = string

type Return = [
  Value,
  SetItem,
  { get: () => Promise<string>; refresh: () => Promise<void>; delete: () => Promise<void> },
]

function useCookie(key: string): Return
```

### 用法

js 无法自动监听 cookie 改变，因此，useCookie 返回的 cookie item 值不会自动更新。可以使用 refreshItem 来刷新为 cookie 中最新值，或使用 api.get 方法获取最新值

```javascript
const [userCookie, updateUserCookie, userCookieAPi] = useCookie('userName')

// 设置值
await updateUserCookie('klose')
// 获取最新
userCookieAPi.get()
// 刷新userCookie数据
userCookieAPi.refresh()
// 删除userCookie数据
userCookieAPi.delete()
```
