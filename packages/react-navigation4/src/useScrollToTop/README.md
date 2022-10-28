## useScrollToTop

页面 focus 时自动滚动到 top

### 用法

```javascript
import { usePageFocus } from 'brick-hooks-react-navigation4'
import { useScrollToTop } from 'brick-hooks-native'

function Comp {
  useScrollToTop(ref)
  return <ScrollView ref={ref}></ScrollView>
}
```
