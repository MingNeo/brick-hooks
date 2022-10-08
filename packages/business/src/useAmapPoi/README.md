---
nav:
  path: /business
---

## useAmapPoi

方便使用高德地图进行关键词搜索 poi、搜索附近的 poi 浏览器端使用时，内置 js api，可直接使用，并提供自动加载高德地图 js 文件 react native 端使用时，需要手工设置 services

### 类型声明

```typescript
function useAmapPoi(options?: {
  defaultPoi?: Poi; // 指定默认poi 格式为高德地图Poi格式
  currentLocation?: { city?: string; [x:string]: any } ; // 当前定位信息，通常无需传这个值，searchPois时如不传city，则使用此处当前定位的城市
  services?: {
    getNearByPoiList?: GetNearByInfos; // 自行封装的获取附近的poi列表的服务。native端必传，浏览器端如不传则使用内置服务
    searchPoiList?: any; // 自行封装的搜索poi的服务。native端必传，浏览器端如不传则使用内置服务
  };
  onChange?: (poi: Poi) => void;
  formatPoi?: (poi: Poi, getNearByPoiList?: any) => Poi;
  amapKey?: string; // 浏览器端配置amapKey 即可自动加载高德地图js
}): {
  currentPoi: Poi;
  pois: any[];
  nearbyPois: any[];
  onSelectPoi: (poi: Poi) => Promise<...>;
  getNearbyPois: ({ current, size, formatPois, showCurrent }) => Promise<...>;
  searchPois: (params: any) => Promise<...>;
}
```

### 演示

<code src="./demo.tsx"></code>

### 用法

```javascript
import React from 'react'
import useAmapPoi from '.'

export default function Demo() {
  const { currentPoi, pois, nearbyPois, onSelectPoi, getNearbyPois, searchPois } = useAmapPoi({
    amapKey: 'e2a0790d42bc5bfdebceb30b2b71f3e9', // 如不需要通过hooks加载js，则不需要传
  })

  return (
    <div>
      {JSON.stringify(currentPoi)}
      <div style={{ display: 'flex' }}>
        <button onClick={() => searchPois({ city: '青岛', address: '五四广场' })}>搜索五四广场</button>
        <ul>
          {pois?.map((v, i) => (
            <li key={i}>{v.name}</li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => getNearbyPois({ current: { latitude: '36.062687', longitude: '120.384599' } })}>
          获取五四广场附近
        </button>
        <ul>
          {nearbyPois?.map((v) => (
            <li
              key={v.id}
              style={{ background: currentPoi?.name === v.name ? 'blue' : 'white' }}
              onClick={() => onSelectPoi(v)}
            >
              {v.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
```
