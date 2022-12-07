## useDataListToTree

useListData 中转化为 tree 的封装，将列表类型数据转化为树的格式

### 用法

```javascript
import { useDataListToTree } from 'brick-hooks'

const mockData = [
  { id: 1, pid: 0, value: '山东' },
  { id: 2, pid: 1, value: '济南' },
  { id: 3, pid: 1, value: '青岛' },
  { id: 4, pid: 1, value: '烟台' },
]
function MyComponent() {
  const treeData = useDataListToTree(listData)

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

  return <Child>...</Child>
}
```
