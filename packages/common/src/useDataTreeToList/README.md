```javascript
const data = [
  {
    id: 'a',
    pid: 0,
    value: '陕西',
    children: [
      { id: 1, pid: 'a', value: '西安' },
      { id: 2, pid: 'a', value: '渭南' },
      { id: 3, pid: 'a', value: '咸阳' },
    ],
  },
  {
    id: 'b',
    pid: 0,
    value: '广东',
    children: [
      { id: 11, pid: 'b', value: '广州' },
      { id: 12, pid: 'b', value: '深圳' },
      { id: 13, pid: 'b', value: '潮汕' },
    ],
  },
  {
    id: 'c',
    pid: 0,
    value: '湖南',
    children: [
      { id: 21, pid: 'c', value: '长沙' },
      { id: 22, pid: 'c', value: '常德' },
      { id: 23, pid: 'c', value: '岳阳' },
    ],
  },
]

function MyComponent({ data }) {
  const flatData = useDataTreeToList(data);
    
  return ...;
}
```