## useInterval

方便使用useInterval，少写几行代码，少点心智负担，不用手动添加销毁，不用添加依赖。

```typescript
function useInterval(callback: Callback, time?: number): {
  isRunning: boolean;
  start: () => void;
  stop: () => void;
}
```

```javascript
function MyComponent() {
  useInterval(() => {
    // ...
  }, 200);
}
```