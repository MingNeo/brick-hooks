## useIsFocused

自动获取页面是否为 focus。

### 用法

```javascript
import { useIsFocused } from 'brick-hooks-react-navigation4'

function Comp {
  const isFocused = useIsFocused();

  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;
}
```
