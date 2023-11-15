## useEffectWithPrev

同 useEffect，不同的是，回调函数提供一个参数，为上一次的 deps

### 用法

```javascript
import { useEffectWithPrev } from 'brick-hooks'

function MyComponent() {
  useEffectWithPrev(
    (prev) => {
      const [prevA, prevB, prevC] = prev
      // ...
    },
    [a, b, c],
  )
}
```
