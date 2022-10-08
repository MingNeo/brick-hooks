## useStorage

方便使用 localStorage 和 sessionStorage

### 类型声明

```typescript
function useStorage(
  itemName: string,
  initialValue?: any,
  {
    watchStorageChange,
    storageType,
  }?: {
    watchStorageChange?: boolean
    storageType?: string
  },
): [
  any,
  (value?: string | number | Record<string, any> | any[]) => void,
  {
    clear: () => void
  },
]
```

```javascript
// localStorage
const [cacheUserInfo, setCacheUserInfo, { clear }] = useStorage('user', {})
// sessionStorage
const [cacheUserInfo, setCacheUserInfo, { clear }] = useStorage('user', {}, { storageType: 'sessionStorage' })
// watchStorageChange 为true时，监听storage事件，即使在其他组件中通过原生等方式更新storage，也会触发当前状态更新及组件rerender
const [cacheUserInfo, setCacheUserInfo, { clear }] = useStorage('user', {}, { watchStorageChange: true })

setCacheUserInfo({ userName: 'klose' })
```

### useLocalStorage & useSessionStorage

对 useStorage 进行简单封装，无需手工配置 storageType

```javascript
const [cacheUserInfo, setCacheUserInfo, { clear }] = useSessionStorage('user', {})
```
