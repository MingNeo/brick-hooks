## useEffectMaunal

同useEffect，不同的是，不通过deps进行触发, 而通过返回一个更新函数触发effect callback。主要应用于需要使用useEffect的destory返回函数的情况。
callEffect仅仅用于触发effect，不能像普通函数调用一样传递args

```javascript
function MyComponent() {
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)

  const callEffect = useEffectMaunal(() => {
    const timer = setTimeout(() => {
      setStateA(1)
    })

    return () => {
      clearTimeout(timer)
    }
  })

  return <Child onClick={callEffect}>...</Child>;
}
```
