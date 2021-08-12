## useThrottleFn
对函数进行节流处理

```typescript
function useThrottleFn(handler: (...args: any[]) => any, wait?: number, isImmediate?: boolean): [DebounceFn, Cancel]
```

```javascript
const getData = async () => {}
const [debounceCb, cancel] = useThrottleFn(getData, 200, true)
```