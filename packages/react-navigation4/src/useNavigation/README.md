## useNavigation

获取当前 navigation

### 用法

```javascript
import { useEffect } from 'react'
import useNavigation from 'brick-hooks-react-navigation4'

function myComp() {
  const navigation = useNavigation()
}

// or
function myComp(navigation) {
  // 可以传递一个默认的navigation，当通过NavigationContext获取不到navigation时会使用
  const nav = useNavigation(navigation)
}
```
