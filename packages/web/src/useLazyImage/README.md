---
nav:
  path: /web
---

## useLazyImage

自动对图片进行懒加载处理

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
function useLazyImages(
  querySelector: string,
  {
    sourceAttr,
    ...ioOptions
  }?: {
    sourceAttr?: string
  },
): void
```

### 用法

```javascript
function Comp() {
  useLazyImages('.container img')

  return (
    <div class="container">
      <img data-src="http://xxx" />
      <img data-src="http://xxx" />
      <img data-rc="http://xxx" />
    </div>
  )
}
```
