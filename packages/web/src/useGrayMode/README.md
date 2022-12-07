---
nav:
  path: /web
---

## useGrayMode

一键设置页面为黑白模式，用于纪念日等。

### 演示

<code src="./demo.jsx"></code>

### 类型声明

```typescript
function useGrayMode(isGrayMode?: boolean, removeOnDestroy?: boolean): void
```

### 用法

```javascript
const [isGrayMode, setIsGrayMode] = useState(false)
// 当isGrayMode为true时自动将页面设置为黑白模式
useGrayMode(isGrayMode)
```
