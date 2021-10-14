## useEffectMaunal

同 useEffect，不同的是，不通过 deps 进行触发, 而通过返回一个更新函数触发 effect callback。主要应用于需要使用 useEffect 的 destory 返回函数的情况。
callEffect 仅仅用于触发 effect，不能像普通函数调用一样传递 args

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

  return <Child onClick={callEffect}>...</Child>
}
```
