## useCountUp

计时

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
interface CountupProps {
  format?: string | ((progress: number) => string) // 展示的格式
  step?: number // 循环的时间
  onStart?: () => void
  onStep?: (countup: number, formatedCountup: string) => void
  onFinished?: (countup: number, formatedCountup: string) => void
  autoRun?: boolean
  maxLength?: number // 最长时间,格式毫秒,超过时根据loopWhenEnd进行重置或停止计时
  loopWhenEnd?: boolean // 是否循环计时，值为true时计时结束时自动从0重新开始计时, 否则停止
}
function useCountup(options: CountupProps): {
  status: string
  formatedCountup: string
  countup: number
  start: () => void
  stop: (reset?: any) => void
  reset: () => void
  getCurrentCountup: (startTime: any) => {
    countup: number
    formatedCountup: string
  }
}
```

### 用法

```javascript
import { useCountDown } from 'brick-hooks'

function MyComponent() {
  const { formatedCountup } = useCountDown({ maxLength: 1000000, step: 1000 })

  return <p>{formatedCountup}S</p>
}
```

手工控制

```javascript
function MyComponent() {
  const { formatedCountup, start } = useCountDown({ maxLength: 1000000, format: 's.SS', step: 10, autoRun: false })

  return (
    <div>
      <button onClick={start}>每次5秒计时</button>
      <p>{formatedCountup}S</p>
    </div>
  )
}
```
