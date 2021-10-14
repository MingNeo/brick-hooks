## useReducerImmer

####

提供一个使用 immer 的 useReducer，除了 reducer 可以使用 immer 的方式直接修改数据外，与 useReducer 保持一致

多数情况下使用 useObjectStateImmer、userMethodsImmer 更简单清晰，考虑要不要去掉这个 hooks。

```javascript
// immer版本
// immer版本的特点就是使用immer，因此数据的操作可以无需一层层创建新的对象，对数据进行直接修改就可以
const reducer = (state, action) => {
  switch (action.type) {
    case 'incB':
      state.a.b += 1
      break
    default:
      return
  }
}

function MyComponent({ obj }) {
  const initialValue = { a: { b: 0 } }
  const [state, dispatch] = useReducerImmer(reducer, initialValue)

  return (
    <div>
      <button onClick={() => dispatch({ type: 'incB' })}>incB</button>
    </div>
  )
}
```
