## useIsFocused

自动获取页面是否为focus。

```javascript
import { useIsFocused } from 'brick-hooks-native'

function Comp {
  const isFocused = useIsFocused();

  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;
}
```