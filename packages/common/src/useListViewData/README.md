## useListViewData

处理列表数据的 hooks, 请求数据、加载下一页、清空筛选条件、重载数据

```typescript
function useListViewData(
  fetchFn: FetchFn,
  query?: {
    page?: {
      pageNo?: number
      pageSize?: number
    }
    query?: Record<string, any>
  }
): {
  listData: any[]
  initQuery: {
    page: {
      pageNo: number
      pageSize: number
      hasMore: boolean
    }
    query: Record<string, any>
  }
  query: {
    page: {
      pageNo: number
      pageSize: number
      hasMore: boolean
    }
    query: Record<string, any>
  }
  loading: boolean
  loadData: (fetchParams: any) => Promise<any>
  loadNextPage: () => Promise<any>
  clearQuery: () => void
  reloadData: () => Promise<any>
  setQuery: React.Dispatch<
    React.SetStateAction<{
      page: {
        pageNo: number
        pageSize: number
        hasMore: boolean
      }
      query: Record<string, any>
    }>
  >
}
```

```javascript
function MyComponent() {
  // 注意， 异步请求getData返回数据必须是any[]格式
  const { listData, loadData, loadNextPage, loading } = useListViewData(getData, { pageSize: 1, pageNo: 10 });

  useEffect(() => {
    loadData({ page: })
  }, [])
  const handleLoadNextPage = () => loadNextPage()
}
```