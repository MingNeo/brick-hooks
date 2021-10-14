## useListChecked

对列表提供单选、多选能力

```javascript
const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
  { id: 3, value: 1 },
].map(v => v.id)

const defaultSelected = [1, 2]

const { isAllChecked, checkedIds, checkedMap, setChecked, toggleAllChecked, clearChecked } = useListChecked(initialValue, defaultSelected)
// isAllChecked: false
// checkedIds: [1, 2]
// checkedMap: {1: true, 2: true, 3: false}

const handleClick = (id) => setChecked(id, true);
<button onClick={toggleAllChecked}>全选</button>
<button onClick={clearChecked}>清空</button>
```
