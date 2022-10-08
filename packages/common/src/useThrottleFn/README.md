## useThrottleFn

对函数进行节流处理

### 类型声明

```typescript
function useThrottleFn(handler: (...args: any[]) => any, wait?: number, isImmediate?: boolean): [DebounceFn, Cancel]
```

### 用法

```javascript
const getData = async () => {}
const [debounceCb, cancel] = useThrottleFn(getData, 200, true)
```
