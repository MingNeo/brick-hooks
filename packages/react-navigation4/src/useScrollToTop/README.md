## useScrollToTop
页面focus时自动滚动到top
```javascript
import { usePageFocus } from 'brick-hooks-react-navigation4'
import { useScrollToTop } from 'brick-hooks-native'

function Comp {
  useScrollToTop(ref)
  return <ScrollView ref={ref}></ScrollView>
}
```