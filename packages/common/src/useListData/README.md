## useListData

对[{}, {}, ...]格式的数据进行处理, 自动监听变化并更新，可以使用自定义处理函数对数据进行处理
可以理解为针对列表数据的相关处理函数及 useMemo 的封装，并提供链式的写法

### 基本用法
不使用内置方法的情况下，相当于一个写法不同的 useMemo
useListState 的第二个参数，是一个数据处理回调函数，可以在其中对每次更新的数据自动做处理。

```javascript
const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const testData = useListData(initialValue, (originValue) => originValue.filter(v.id === 1))
// transform函数中包含依赖
const testData = useListData(
  initialValue,
  (originValue) => originValue.filter(v.id === testId)
  [testId]
)
```

```javascript
// result: [{ id: 1, value: 0 }]
```

### 使用内置方法进行处理

#### transObj 数组转为对象

```javascript
const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const testData = useListData(listData, (originValue, { transObj }) => transObj(originValue))
```

```javascript
// result
{
  1: { id: 1, value: 0 },
  2: { id: 2, value: 1 }
}
```

#### transTree 数组转为树

```javascript
const initialValue = [
  { id: 'a001', pid: 0, value: '山东' },
  { id: 'a002', pid: 'a001', value: '济南' },
  { id: 'a003', pid: 'a001', value: '青岛' },
  { id: 'a004', pid: 'a001', value: '烟台' },
]

const testData = useListData(initialValue, (originValue, { transTree }) => transTree(originValue))
```

```javascript
// result
;[
  {
    id: 'a001',
    pid: 0,
    value: '山东',
    children: [
      { id: 'a002', pid: 'a001', value: '济南' },
      { id: 'a003', pid: 'a001', value: '青岛' },
      { id: 'a004', pid: 'a001', value: '烟台' },
    ],
  },
]
```

#### group 分组

```javascript
const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const testData = useListData(initialValue, (value, { group }) => group(value, { groupKey: 'city' }))
```

```javascript
// result
{
  qingdao: [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
  ],
  hangzhou: [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
}
```

#### partition 分组

```javascript
const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const testData = useListData(initialValue, (value, { partition }) => partition(value, { groupKey: 'city' }))
```

```javascript
// result
;[
  [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
  ],
  [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
]
```

#### removeById 根据 id 移除数据

```javascript
const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const testData = useListData(initialValue, (value, { removeById }) => removeById(value, 'q1'))
```

```javascript
// result
;[
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]
```

#### removeIndex 根据 index 移除数据

```javascript
const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const testData = useListData(initialValue, (value, { removeIndex }) => removeIndex(value, 1))
```

```javascript
// result
;[
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]
```

### 链式语法进行数据处理

使用链式语法可以方便的将复杂的数据处理写的简洁清晰

```javascript
const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const testData = useListData(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .filter((v) => !v.ignore)
    .partition({ groupKey: 'pid' })
    .value()
)
```

```javascript
// result
;[
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]
```

除了使用内置的方法，同样可以自定义处理, 使用 next 即可。或随时对数据进行自由处理

```javascript
const testData = useListData(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value()
)

const testData = useListData(initialValue, (originValue, { chain }) => {
  const listData = chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value()
  return listData[0]
})
```

链式语句内置方法

```javascript
// 使用自定义fn进行处理
next: (fn: any) => this
// 获取处理结束的最终数据
value: () => any
// 添加一个值
add: (value: any) => this
// 删除末尾的值
pop: () => this
// 同Array.prototype.slice
slice: (start?: number, end?: number) => this
// 同Array.prototype.reverse
reverse: () => this
// 同Array.prototype.sort
sort: (callback?: (a: any, b: any) => number) => this
// 根据指定的字段进行升降序排序
sortBy: ({ field, order }: { field: string; order?: string }) => this
// 移除指定的值，通过===直接比较
remove: (value: any) => this
// 同Array.prototype.filter
filter: (callback: (v: any) => boolean) => this
// 同Array.prototype.map
map: (callback: MapCallback) => this
// 同Array.prototype.reduce
reduce: (callback: ReduceCallback, initialValue?: any) => this
// 将数据转化为tree格式
transTree: (options?: {
  parentId?: string
  id?: string
  children?: string
  topParentId?: number
}) => this
// 将数组转化为Object
transObj: (options?: { key?: string }) => this
// 将数据分组并返回Object
group: (options?: { groupKey?: string }) => this
// 将数据分组并返回二维数组
partition: (options?: { groupKey?: string }) => this
// 根据id移除指定item
removeById: (id: string, idKey?: string) => this
// 根据下标移除指定item
removeIndex: (value: number) => this
```
