## usePageFocus

与 useFocusEffect 类似，但是传入的 effect 函数无需要使用 useCallback 处理 effect 函数变化也不会触发，只有页面 focus 时才会触发

### 用法

```javascript
usePageFocus(() => {
  // ...
})
```

eg:页面 focus 时自动滚动到 top

```javascript
import { usePageFocus } from 'brick-hooks-react-navigation4'
import { useScrollToTop } from 'brick-hooks-native'

function Comp {
  const ref = useRef(null)
  usePageFocus(useScrollToTop(ref))

  return <ScrollView ref={ref}></ScrollView>
}
```
