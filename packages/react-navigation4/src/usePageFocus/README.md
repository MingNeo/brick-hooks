## usePageFocus
与useFocusEffect类似，但是传入的effect函数无需要使用useCallback处理
effect函数变化也不会触发，只有页面focus时才会触发

```javascript
usePageFocus(() => {
  // ...
})
```

eg:页面focus时自动滚动到top
```javascript
import { usePageFocus } from 'brick-hooks-react-navigation4'
import { useScrollToTop } from 'brick-hooks-native'

function Comp {
  const ref = useRef(null)
  usePageFocus(useScrollToTop(ref))

  return <ScrollView ref={ref}></ScrollView>
}
```