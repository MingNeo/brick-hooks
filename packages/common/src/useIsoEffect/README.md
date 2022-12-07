## useIsoEffect

替换 useLayoutEffect，以兼容 ssr，在 server 端自动使用 useEffect

### 类型声明

```typescript
(effect: React.EffectCallback, deps?: React.DependencyList) => void
```

### 用法

```javascript
import { useIsoEffect } from 'brick-hooks'

function MyComponent() {
  useIsoEffect(() => {
    // ...
  }, [])
}
```
