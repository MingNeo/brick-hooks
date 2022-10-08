## useCountDown

倒计时

### 演示

<code src="./demo.tsx"></code>

### 用法

```javascript
function MyComponent() {
  // 设置total或endTime其中一个作为结束时间
  const { formatedCountdown } = useCountDown({ endTime: Date.now() + 1000000, step: 1000 })

  return (
    <div>
      <p>设置指定时间倒计时</p>
      <p>{formatedCountdown}S</p>
    </div>
  )
}
```

手工控制

```javascript
function MyComponent() {
  const { formatedCountdown, start } = useCountDown({ total: 5000, format: 's.SS', step: 10, autoRun: false })

  return (
    <div>
      <button onClick={start}>每次5秒倒计时</button>
      <p>{formatedCountdown}S</p>
    </div>
  )
}
```

### 类型声明

```typescript
function useCountDown(options: {
  total?: number // 倒计时时间，格式毫秒
  endTime?: number | string // 结束时间，时间戳格式 或 "yyyy-mm-dd HH:MM:SS"
  format?: string | ((progress: number) => string) // 展示的格式，如"hh:mm:ss", 或返回一个毫秒数，自行格式化
  step?: number // 循环的时间
  onStart?: () => void
  onStep?: (step: number, formatedProgress: string) => void
  onFinished?: () => void
  autoRun?: boolean
}): {
  start: () => void
  stop: () => void
  day: number
  hour: number
  minutes: number
  seconds: number
  millisecond: number
  status: 'idle' | 'running' | 'pause' | 'resumed' | 'finished'
  endTime: number
  formatedCountdown: string
  countdown: number
}
```
