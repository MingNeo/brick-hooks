## useCounter

```javascript
function MyComponent() {
  const [count, actions] = useCounter(0, { min: 0, max: 3 })

  return <Child>...</Child>
}
```

#### actions

##### actions.inc

数字增加指定数值，默认为 1

```javascript
  const [count, actions] = useCounter(0, { min: 0, max: 3 });

  actions.inc() // count: oldCount + 1
  actions.inc(3) // count: oldCount + 3
}
```

##### actions.dec

数字减少指定数值，默认为 1

```javascript
  const [count, actions] = useCounter(0, { min: 0, max: 3 });

  actions.inc() // count: oldCount - 1
  actions.inc(3) // count: oldCount - 3
}
```

##### action.reset

数字重置为 initialValue

```javascript
  const [count, actions] = useCounter(0, { min: 0, max: 3 });

  actions.reset() // count: 0
}
```
