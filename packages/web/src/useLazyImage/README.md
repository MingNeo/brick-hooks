## useLazyImage

自动对图片进行懒加载处理

```typescript
function useLazyImages(querySelector: string, { sourceAttr, ...ioOptions }?: {
  sourceAttr?: string;
}): void
```

```javascript
function Comp () {
  useLazyImages('.container img')
  
  return <div class="container">
    <img data-src="http://xxx" />
    <img data-src="http://xxx" />
    <img data-rc="http://xxx" />
  </div>
}
```

