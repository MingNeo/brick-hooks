## useDataListToTree

对数组类型的数据进行处理，可以直接操作数组方法
```javascript
const mockData = [
  { id: 1, pid: 0, value: '山东' },
  { id: 2, pid: 1, value: '济南' },
  { id: 3, pid: 1, value: '青岛' },
  { id: 4, pid: 1, value: '烟台' },
]
function MyComponent() {
  const treeData = useDataListToTree(listData); 

  // treeData:
  // [{
  //   id: 1,
  //   pid: 0,
  //   value: '山东',
  //   children: [
  //     { id: 2, pid: 1, value: '济南' },
  //     { id: 3, pid: 1, value: '青岛' },
  //     { id: 4, pid: 1, value: '烟台' },
  //   ],
  // }]
  
  return <Child>...</Child>;
}
```

