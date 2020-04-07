#### 
提供一个使用immer的reducer，多数情况下使用userMethodsImmer是更好的选择，考虑要不要去掉这个hooks

```javascript
// immer版本
// immer版本的特点就是使用immer，因此数据的操作可以无需一层层创建新的对象，对数据进行直接修改就可以
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': (value += 1);break;
    case 'decrement': (value -= 1):break;
    default: return;
  }
}

function MyComponent({ obj }) {
  const initialValue = 0
  const [state, dispatch] = useReducerImmer(reducer, initialValue);
    
  return <div>
    <button onClick={() => dispatch({ type: 'increment' })}>inc</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>inc</button>
  </div>;
}

```