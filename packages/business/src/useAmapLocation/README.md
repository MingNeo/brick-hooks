---
nav:
  path: /business
---

## useAmapLocation

方便使用高德地图进行定位，浏览器端使用时，内置 js api，可直接使用，并提供自动加载高德地图 js 文件 react native 端使用时，需要手工设置 services

### 演示

<code src="./demo/index.tsx"></code>

### 类型声明

```typescript
type Location = {
  latitude?: string
  longitude?: string
  city?: string
  [x: string]: any
}

interface Options {
  amapKey?: string
  getLocation?: () => Promise<Location>
}

function useAmapLocation({ amapKey, getLocation }?: Options): {
  location: Location
  loading: boolean
  loadLocation: Exector
}
```

### 用法

```javascript
import useAmapLocation from 'brick-hooks-business'

export default function MyComponent() {
  const { location, loadLocation, loading } = useAmapLocation({
    amapKey: 'e2a0790d42bc5bfdebceb30b2b71f349',
  })
}
```
