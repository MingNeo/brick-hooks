## useBreakpoint

方便对不同屏幕尺寸使用不同数据
基于 useMedia, 通过js 方便使用媒体查询。

## Usage <a name = "usage"></a>

breakpointList 是一个数组，当有多条匹配时，会根据数组 index 的顺序获取第一个匹配的 value

```typescript
function useBreakpoint(breakpointList: BreakpointList, defaultValue: any): any
```

```javascript
// 栅格布局时，屏幕宽度大于1200 则组件宽度设为25%，768-992为50%，小于768为100%
function MyComponent() {
  const breakpointList = [
    { min: 1200, value: 6 },
    { min: 768, max: 992, value: 12 },
    { max: 768, value: 24 },
  ]
  const col = useBreakpoint(breakpointList, 6)
}

// 不同尺寸使用不同的style样式
function MyComponent() {
  const breakpointList = [
    {
      min: 1200,
      value: { width: '100%' },
    },
    {
      min: 768,
      max: 992,
      value: { width: '50%' },
    },
  ]
  const style = useBreakpoint(breakpointList, 1)

  return <div style={style}>{/* ... */}</div>
}

// 指定尺寸设备类型
function MyComponent() {
  const breakpointList = [
    { min: 1200, value: 'pc' },
    { min: 768, max: 992, value: 'pad' },
    { max: 768, value: 'mobile' },
  ]
  const type = useBreakpoint(breakpointList, 'pc')
}
```
