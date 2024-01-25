---
nav:
  path: /web
---

## useQueryParams
获取url参数

### 类型声明

```typescript
function useQueryParams(queryStr?: string): {
  queryParams: {};
  set: (params: object, refresh?: boolean) => void;
  remove: (key: string, refresh?: boolean) => void;
}
```

### 用法

```javascript
function MyComponent() {
  // 获取当前页面url参数
  const { queryParams } = useQueryParams()
  // 可接受一个参数字符串，用于指定解析的字符串而非自动从url获取
  const { queryParams } = useQueryParams('a=1&b=2')
}
```
