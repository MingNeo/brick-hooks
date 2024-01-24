## useEffectWithPrev

基本等同于 useEffect，不同的是，回调函数提供一个参数，为上一次的 deps

### 类型
```typescript
function useEffectWithPrev(effect: (prevDeps: Deps) => (void | (() => void)), deps: Deps): void
```

### 用法

```javascript
import { useEffectWithPrev } from 'brick-hooks'

function MyComponent() {
  useEffectWithPrev(
    (prev) => {
      // prev为一个数组，数组的长度等于deps的长度
      // 数组的每个元素为上一次的deps的对应元素
      const [prevA, prevB, prevC] = prev
      // ...
    },
    [a, b, c],
  )
}
```
