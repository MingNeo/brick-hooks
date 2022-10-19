## useMediaquery

通过 js 方便使用媒体查询判断当前是否匹配

### 类型声明

```typescript
function useMediaQuery(mediaQuery: string): boolean
```

### 用法

```javascript
function MyComponent() {
  const isPad = useMediaQuery('(min-width: 768px) and (max-width: 992px)')
  const isPC = useMediaQuery('(min-width: 1200px)')
  // window.innerWidth: 1200, isPC: true, isPad: false
}
```
