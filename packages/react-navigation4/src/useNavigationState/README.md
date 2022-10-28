## useNavigationState

获取当前 navigation.state

### 用法

```javascript
import { useEffect } from 'react'
import useNavigationState from 'brick-hooks-react-navigation4'

function myComp() {
  const state = useNavigationState()
}

// or
function myComp(navigation) {
  // 可以传递一个默认的navigation，当通过NavigationContext获取不到navigation时会使用
  const state = useNavigationState(navigation)
}
```
