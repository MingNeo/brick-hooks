## useDataTreeToList

将树的格式的数据转化为列表，为 useListData 中转化为 tree 的进一步封装

### 用法

```javascript
import { useDataTreeToList } from 'brick-hooks'

  const data = [{
    id: 1,
    pid: 0,
    value: '山东',
    children: [
      { id: 2, pid: 1, value: '济南' },
      { id: 3, pid: 1, value: '青岛' },
      { id: 4, pid: 1, value: '烟台' },
    ],
  }]

function MyComponent({ data }) {
  const flatData = useDataTreeToList(data);

  // flatData:
  // [
  //   { id: 1, pid: 0, value: '山东' },
  //   { id: 2, pid: 1, value: '济南' },
  //   { id: 3, pid: 1, value: '青岛' },
  //   { id: 4, pid: 1, value: '烟台' },
  // ]
  return ...;
}
```
