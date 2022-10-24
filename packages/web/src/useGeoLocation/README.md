---
nav:
  path: /web
---

## useGeoLocation

方便使用高德地图进行关键词搜索 poi、搜索附近的 poi 浏览器端使用时，内置 js api，可直接使用，并提供自动加载高德地图 js 文件 react native 端使用时，需要手工设置 services

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
