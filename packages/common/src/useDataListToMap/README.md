## useDataListToMap

对数组类型的数据进行处理，可以直接操作数组方法
```javascript
const listData = [
  { id: 'a', value: 'A' },
  { id: 'b', value: 'B' },
  { id: 'c', value: 'C' },
  { id: 'd', value: 'D' }
]
function MyComponent() {
  const mapData = useDataListToMap(listData); 

  // mapData: 
  // {
  //   a: { id: 'a', value: 'A' },
  //   b: { id: 'b', value: 'B' },
  //   c: { id: 'c', value: 'C' },
  //   d: { id: 'd', value: 'D' }
  // }
  
  return <Child>...</Child>;
}
```

