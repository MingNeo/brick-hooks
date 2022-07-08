## useKey

自动对图片进行懒加载处理

```typescript
function useKey<T extends Element>(fn?: Handler, options?: {
  key?: number
  event?: 'keydown' | 'keypress' | 'keyup'
  target?: T | null
  capture?: any
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
}): void
```

### 使用
```javascript
function Comp () {
  useKey((e) => {
    if (e.key === 13) {
      // ...
    }
  })
}
```
或
```javascript
function Comp () {
  useKey((e) => {
    // ...
  }, { key: 13 })
}
```
