## useListChecked

对列表提供单选、多选能力, 如购物车、带 checkbox 的列表等

### 演示

<code src="./demo.tsx"></code>

### 类型声明

```typescript
interface Item extends Record<string, any> {
  id: string
}
function useListChecked(
  items?: Item[],
  defaultSelecteds?: string[],
): {
  isAllChecked: boolean
  checkedIds: string[]
  setChecked: (key: string, checked: boolean) => void
  toggleChecked: (key: string, checked?: boolean) => void
  toggleAllChecked: (checked?: boolean) => void
  clearChecked: () => void
  updateItems: (items: Item[]) => void
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
