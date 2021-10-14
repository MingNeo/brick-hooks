## useSet

对 Set 类型的数据进行处理，可以直接操作 Set 方法

```javascript
function MyComponent() {
  const [testSet, testSetMethods] = useSet(new Set([1, 2, 3]))

  const handleButtonAClick = () => testSetMethods.add(4) // next testSet: [1, 2, 3, 4]
  return <Child>...</Child>
}
```

### actions

#### add

同 Set.prototype.add

#### delete

同 Set.prototype.delete

#### has

同 Set.prototype.has

#### toggle

对指定值进行 toggle

```javascript
function MyComponent() {
  const [testSet, testSetMethods] = useSet(new Set([1, 2, 3]))

  const handleButtonAClick = () => testSetMethods.toggle(4) // next testSet: [1, 2, 3, 4]
  return <Child>...</Child>
}
```

#### reset

重置为初始值
