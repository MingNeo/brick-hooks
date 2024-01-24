## useListViewData

处理列表数据的 hooks, 请求数据、加载下一页、清空筛选条件、重载数据

### 演示

<code src="./demo/demo1.tsx"></code> <code src="./demo/demo2.tsx"></code>

### 类型声明

```typescript
type FetchFn = (
  query: QueryParams,
) => Promise<{ data: Record<string, any>[]; hasMore?: boolean; total?: number; [x: string]: any }>

function useListViewData(
  fetchFn: FetchFn,
  initialQuery?: {
    pageNo?: number
    pageSize?: number
    query?: Record<string, any>
  },
): {
  listData: any[]
  query: {
    pageNo: number
    pageSize: number
    hasMore: boolean
    query: Record<string, any>
  }
  loading: boolean
  loadData: (fetchParams: any) => Promise<any>
  loadNextPage: () => Promise<any>
  clearQuery: () => void
  reloadData: () => Promise<any>
  setQuery: ()
}
```

### 用法

```javascript
function MyComponent() {
  const { listData, loadData, loadNextPage, loading } = useListViewData(getData, { pageSize: 1, pageNo: 10 })

  useEffect(() => {
    loadData({ pageSize: 2 })
  }, [])
  const handleLoadNextPage = () => loadNextPage()
}
```
