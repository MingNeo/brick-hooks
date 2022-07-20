## useKey

监听键盘按下

```typescript
function useKey<T extends Element>(fn?: Handler, options?: {
  key?: number
  event?: 'keydown' | 'keypress' | 'keyup'
  target?: T | null
  ctrlKey?: boolean
  altKey?: boolean
  shiftKey?: boolean
  metaKey?: boolean
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

#### 监听ctrlKey、altKey、shiftKey、metaKey(window/command)
```javascript
function Comp () {
  useKey((e) => {
    // ...
  }, { key: 13, ctrlKey: true })
}
```
