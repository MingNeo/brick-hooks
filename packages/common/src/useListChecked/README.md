## useListChecked

对列表提供单选、多选能力, 如购物车、带 checkbox 的列表等

### 类型声明

```typescript
function useListChecked(
  items?: (string | number)[],
  defaultSelecteds?: (string | number)[],
): {
  isAllChecked: boolean
  checkedIds: string[]
  checkedMap: {}
  setChecked: (key: string, checked: boolean) => void
  toggleChecked: (key: string, checked?: boolean) => void
  toggleAllChecked: (checked: any) => void
  clearChecked: () => void
}
```

### 用法

```javascript
function Comp() {
  const { isAllChecked, checkedIds, toggleChecked, toggleAllChecked, clearChecked } = useListChecked([1, 2, 3], [1, 2])

  return (
    <div>
      <ul>
        <li>
          <Checkbox onClick={() => toggleChecked(id)} />
        </li>
      </ul>
      <button onClick={toggleAllChecked}>全选</button>
      <button onClick={clearChecked}>清空</button>
    </div>
  )
}
```
