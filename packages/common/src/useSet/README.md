## useSet

对Set类型的数据进行处理，可以直接操作Set方法
```javascript
function MyComponent() {
  const [testSet, testSetMethods] = useSet(new Set([1, 2, 3])); 

  const handleButtonAClick = () => testSetMethods.add(4) // next testSet: [1, 2, 3, 4]
  return <Child>...</Child>;
}
```

### actions
#### add
同Set.prototype.add
#### delete
同Set.prototype.delete
#### has
同Set.prototype.has
#### toggle
对指定值进行toggle
```javascript
function MyComponent() {
  const [testSet, testSetMethods] = useSet(new Set([1, 2, 3])); 

  const handleButtonAClick = () => testSetMethods.toggle(4) // next testSet: [1, 2, 3, 4]
  return <Child>...</Child>;
}
```
#### reset
重置为初始值
 