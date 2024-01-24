## useEffectMaunal
!! 此hook即将废弃， 使用场景较少。且会带来一些心智负担。

受控的useEffect，等同于useCallback + useEffect
通过返回一个更新函数触发 effect callback。

主要应用于需要使用 useEffect 的 destory 函数的情况。 callEffect 自动保持最新，无需传递 args

### 用法

```javascript
import { useEffectMaunal } from 'brick-hooks'

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
  const [value, setValue] = useState({})
  const callEffect = useCallback(() => {
    // ...
  }, [value])

  useEffect(() => {
    return () => {
      // value
    }
  }, [value])

  return <Child onClick={callEffect}>...</Child>
}
```
