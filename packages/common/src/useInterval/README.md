## useInterval

方便使用 useInterval，少写几行代码，少点心智负担，不用手动添加销毁，不用添加依赖。

### 类型声明

```typescript
function useInterval(
  callback: Callback,
  time?: number
  options?: {
    autoRun?: boolean
  }
): {
  isRunning: boolean
  start: () => void
  stop: () => void
}
```

### 用法

#### 直接使用

```javascript
function MyComponent() {
  useInterval(() => {
    // ...
  }, 200)
}
```

#### 手动触发

```javascript
function MyComponent() {
  const { start, stop, isRunning } = useInterval(
    () => {
      // ...
    },
    200,
    { autoRun: false },
  )
}
```
