# useCascader

用于级联树等多级类目的展示、选中，如省市区、多级类目。

### 类型声明

```typescript
function useCascader({
  fetchSub,
  disabledIds,
  onCheckedChange,
  root,
  parentIdKey,
}: {
  fetchSub: (current?: CascaderNode) => any
  disabledIds?: any[]
  onCheckedChange?: () => void
  root?: CascaderNode
  parentIdKey?: string
}): {
  loading: boolean
  data: any
  flatNodes: CascaderNode[]
  checkeds: CascaderNode[]
  toggleChecked: (id: string | number, checked: boolean) => Promise<void>
  setDisableds: (ids: (string | number)[], disabled: boolean) => Promise<void>
  setCheckeds: (ids: (string | number)[], checked: boolean) => Promise<void>
  clearCheckeds: () => Promise<void>
  loadSubTree: (current: CascaderNode) => Promise<void>
}
```

## 用法

```javascript
const fetchSubChildren = () => {
  return fetch('http://example.com/movies.json').then((response) => response.json())
}
```
