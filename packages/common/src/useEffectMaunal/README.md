## useEffectMaunal

同 useEffect，不同的是，不通过 deps 进行触发, 而通过返回一个更新函数触发 effect callback。
主要应用于需要使用 useEffect 的 destory 返回函数的情况。
callEffect 自动保持最新，无需传递 args

```javascript
function MyComponent() {
  const callEffect = useEffectMaunal(() => {
    const timer = setTimeout(() => {
      // ...
    })

    return () => {
      clearTimeout(timer)
    }
  })

  return <Child onClick={callEffect}>...</Child>
}

// 等同于
function MyComponent() {
  const timerRef = useRef()
  const callEffect = useCallback(() => {
    const timer = setTimeout(() => {
      // ...
    })
  }, [])

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  return <Child onClick={callEffect}>...</Child>
}
```
