## useArray

对数组类型的数据进行处理，可以直接操作数组方法
```javascript
function MyComponent() {
  const [testArray, testArrayMethods] = useArray([1, 2, 3]); 

  const handleButtonAClick = () => testArrayMethods.push(4) // next testArray: [1, 2, 3, 4]
  return <Child>...</Child>;
}
```

### actions

##### set
设置数组的值。
##### push
同 Array.prototype.push
##### pop
同 Array.prototype.pop
##### slice
同 Array.prototype.slice
##### clear
##### reverse
同 Array.prototype.reverse
##### concat
同 Array.prototype.concat
##### sort
同 Array.prototype.sort
##### sortBy
基于指定字段做升降序排序, 默认为ASC
```javascript
function MyComponent() {
  const [testArray, testArrayMethods] = useArray([{a: 2}, {a:1}]); 

  const handleButtonAClick = () => testArrayMethods.sortBy({ field: 'a', order: 'ASC' }) 
  // next testArray: [{a: 1}, {a:2}]
  return <Child>...</Child>;
}
```
设置数据为[]
##### remove
进行浅比较移除匹配的值

```javascript
function MyComponent() {
  const [testArray, testArrayMethods] = useArray([1, 2, 3]); 

  const handleButtonAClick = () => testArrayMethods.remove(2) // next testArray: [1, 3]
  return <Child>...</Child>;
}
```

##### removeById
当数据格式为[{ id: 'xxx', value, ... }, ...]时，根据id移除对应的值

```javascript
function MyComponent() {
  const [testArray, testArrayMethods] = useArray([{ id: 1, value: 1 }, { id: 2, value: 2 }]); 

  const handleButtonAClick = () => testArrayMethods.removeById(2) // next testArray: [{ id: 1, value: 1 }]
  return <Child>...</Child>;
}
```
##### removeIndex
移除指定index的值

```javascript
function MyComponent() {
  const [testArray, testArrayMethods] = useArray([{ id: 1, value: 1 }, { id: 2, value: 2 }]); 

  const handleButtonAClick = () => testArrayMethods.removeIndex(1) // next testArray: [{ id: 1, value: 1 }]
  return <Child>...</Child>;
}
```
