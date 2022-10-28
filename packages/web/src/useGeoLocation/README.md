---
nav:
  path: /web
---

## useGeoLocation

方便使用浏览器 geo 定位

### 演示

<code src="./demo/index.tsx"></code>

### 类型声明

```typescript
interface UseGeolocationOptions {
  enableHighAccuracy?: boolean
  maximumAge?: number
  timeout?: number
  navigator?: Navigator
  watch?: boolean
}

function useGeolocation(options?: UseGeolocationOptions): {
  isSupported: boolean
  location: {
    accuracy: number
    latitude: number
    longitude: number
    altitude: any
    altitudeAccuracy: any
    heading: any
    speed: any
    [x: string]: any
  }
  timestamp: number
  error: any
  loading: boolean
  loadLocation: Exector
}
```

### 用法

```javascript
import useAmapLocation from 'brick-hooks-web'

export default function MyComponent() {
  const { location, loadLocation, loading } = useGeoLocation()
}
```
