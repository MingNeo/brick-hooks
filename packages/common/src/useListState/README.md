## useListState

对[{}, {}, ...]格式的数据进行处理, 自动监听变化并更新，可以使用自定义处理函数对数据进行处理可以理解为针对列表数据的相关处理函数的封装，并提供链式的写法。

与 useListData 类似，不同的是 useListData 类似于 useMemo，对一个 state 进行自动处理生成新的 getter 的值。而这个 hook 则直接提供 setState 方法，setState 原始值并自动通过回调函数进行处理

### 基础用法

使用 listMethods 替代 useArray，具体用法见 useArray

| 方法        | 说明                                                                 |
| ----------- | -------------------------------------------------------------------- |
| set         | 当前设置数组的值                                                     |
| push        | 同 Array.prototype.push                                              |
| slice       | 同 Array.prototype.slice                                             |
| pop         | 同 Array.prototype.pop                                               |
| clear       | 同 清空                                                              |
| reverse     | 同 Array.prototype.reverse                                           |
| concat      | 同 Array.prototype.concat                                            |
| sort        | 同 Array.prototype.sort                                              |
| sortBy      | 基于指定字段做升降序排序, 默认为 ASC，详情见 useArray                |
| remove      | 移除指定值，详情见 useArray                                          |
| removeById  | 当数据格式为[{ id: 'xxx', value, ... }, ...]时，根据 id 移除对应的值 |
| removeIndex | 移除指定 index 的值                                                  |

### 自定义数据处理

useListState 的第二个参数，是一个数据处理回调函数，可以在其中对每次更新的数据自动做处理。完全自由处理的情况下，相当于组合了 useState/useArray 及 useMemo

```javascript
const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const [result, listMethods] = useListState(initialValue, (originValue) => originValue.filter(v.value === 1))
// result: [{id: 2, value: 1}]
listMethods.push({ id: 3, value: 1 })
// result: [{id: 2, value: 1}, {id: 3, value: 1}]
```

### 用法内置方法进行数据处理

useListState 提供了一系列内置方法，可以方便的自动对数据进行各种转换也可以通过 chain 对数据进行链式的处理

| 方法        | 说明                 |
| ----------- | -------------------- |
| transObj    | 数组转为对象         |
| transTree   | 数组转为树           |
| group       | 分组                 |
| partition   | partition 分组       |
| removeById  | 根据 id 移除数据     |
| removeIndex | 根据 index 移除数据  |
| chain       | 链式语法进行数据处理 |

#### transObj 数组转为对象

```javascript
const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const [data, listMethods] = useListState(initialValue, (originValue, { transObj }) =>
  transObj(originValue, { key: 'id' }),
)
```

```javascript
// result
{
  1: { id: 1, value: 0 },
  2: { id: 2, value: 1 }
}
```

#### transTree 数组转为树

### 类型声明

```typescript
transTree(data: Record<string, any>[], { parentId, id, children }?: {
  parentId?: string;
  id?: string;
  children?: string;
}): Record<string, any>[]
```

```javascript
const flatData = [
  { id: 'a001', pid: 0, value: '山东' },
  { id: 'a002', pid: 'a001', value: '济南' },
  { id: 'a003', pid: 'a001', value: '青岛' },
  { id: 'a004', pid: 'a001', value: '烟台' },
]

const [treeData, listMethods] = useListState(flatData, (originValue, { transTree }) =>
  transTree(originValue, { id: 'id', parentId: 'pid', children: 'children' }),
)
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

const [data, listMethods] = useListState(initialValue, (value, { group }) => group(value, { groupKey: 'city' }))
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

const [data, listMethods] = useListState(initialValue, (value, { partition }) => partition(value, { groupKey: 'city' }))
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

const [data, listMethods] = useListState(initialValue, (value, { removeById }) => removeById(value, 'q1'))
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

const [data, listMethods] = useListState(initialValue, (value, { removeIndex }) => removeIndex(value, 1))
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

const [data, listMethods] = useListState(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .filter((v) => v.value !== 0)
    .partition({ groupKey: 'city' })
    .value(),
)
```

```javascript
// result
;[
  [{ id: 'q2', city: 'qingdao', value: 1 }],
  [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
]
```

除了使用内置的方法，也可以通过 next 方法，使用自定义函数进行, 或随时对数据进行自由处理

```javascript
const [data, listMethods] = useListState(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value(),
)

const [data, listMethods] = useListState(initialValue, (originValue, { chain }) => {
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
