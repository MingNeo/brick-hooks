## useCounter

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
interface CounterOptions {
  min?: number
  max?: number
  step?: number
}
function useCounter(initialValue?: number, options?: CounterOptions): [number, Methods]
```

### 用法

```javascript
function MyComponent() {
  const [count, actions] = useCounter(0, { min: 0, max: 100 })
  actions.inc() // count: oldCount + 1
  actions.dec() // count: oldCount - 1
  actions.inc(3) // count: oldCount + 3
  actions.dec(3) // count: oldCount - 3
  actions.reset(3) // count: initialValue
  actions.set(50) // count: 50
  return <Child>...</Child>
}
```
