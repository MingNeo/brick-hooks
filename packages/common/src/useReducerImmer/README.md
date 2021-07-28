## useReducerImmer

#### 
提供一个使用immer的useReducer，除了reducer可以使用immer的方式直接修改数据外，与useReducer保持一致

多数情况下使用useObjectStateImmer、userMethodsImmer更简单清晰，考虑要不要去掉这个hooks。

```javascript
// immer版本
// immer版本的特点就是使用immer，因此数据的操作可以无需一层层创建新的对象，对数据进行直接修改就可以
const reducer = (state, action) => {
  switch(action.type) {
    case 'incB': (state.a.b += 1);break;
    default: return;
  }
}

function MyComponent({ obj }) {
  const initialValue = { a: { b: 0 }}
  const [state, dispatch] = useReducerImmer(reducer, initialValue);
    
  return <div>
    <button onClick={() => dispatch({ type: 'incB' })}>incB</button>
  </div>;
}

```