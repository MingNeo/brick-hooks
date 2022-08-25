## useMedia

通过 js 方便使用媒体查询

## Usage <a name = "usage"></a>

mediaQueryValueList 是一个数组，当有多条 mediaQuery 匹配时，会根据数组 index 的顺序获取第一个匹配的 value
如过设置初始值，则初始状态不根据媒体查询判断，而使用初始值

```typescript
function useMedia<T = any>(mediaQueryValueList: MediaQueryValueList, initialValue?: T): T
```

```javascript
// 栅格布局时，不同尺寸使用不同的宽度
// 用于屏幕尺寸breakpoint的情况，也可以直接使用useBreakpoint
function MyComponent() {
  const mediaQueryValueList = [
    {
      media: '(min-width: 1200px)',
      value: 6,
    },
    {
      media: '(min-width: 768px) and (max-width: 992px)',
      value: 24,
    },
  ]
  const col = useMedia(mediaQueryValueList)
}

// 根据系统主题色切换样式
function MyComponent() {
  const mediaQueryValueList = [
    {
      media: '(prefers-color-scheme: light)',
      value: { background: '#fff', color: '#000' },
    },
    {
      media: '(prefers-color-scheme: dark)',
      value: { background: '#000', color: '#fff' },
    },
  ]
  const style = useMedia(mediaQueryValueList, mediaQueryValueList[0].value)

  return <div style={style}>{/* ... */}</div>
}
```
