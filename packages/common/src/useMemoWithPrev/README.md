## useMemoWithPrev

同 useMemo，不同的是，回调函数提供两个参数，为上一次的 deps 及上次的 value

### 用法

```javascript
import { useMemoWithPrev } from 'brick-hooks'

function MyComponent() {
  const value = useMemoWithPrev(
    (prevDeps, prevValue) => {
      const [prevA, prevB, prevC] = prevDeps
      // ...
    },
    [a, b, c],
  )
}
```
