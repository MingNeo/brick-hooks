import React from 'react'
import useListViewData from '..'

const fetchParams = { pageNo: 1, pageSize: 5 }

const mockData = new Array(30).fill(0).map((v, i) => ({ id: i, value: i }))

const fetchData = (params) => {
  const query = { ...fetchParams, ...(params || {}) }
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (query.pageNo - 1) * query.pageSize
      const data = mockData.slice(start, start + query.pageSize)
      resolve({ data, total: mockData.length, hasMore: query.pageNo < +(mockData.length / query.pageSize).toFixed(0) })
    }, 500)
  }) as any
}

export default function Demo() {
  const { current, listData, loading, loadData, loadNextPage, loadPrevPage, hasMore, total, pageTotal } =
    useListViewData(fetchData, {
      autoLoad: true,
      initialQuery: { pageSize: 5 },
      isMerge: false,
    })

  return (
    <div>
      <h2>翻页示例</h2>
      <div>
        {loading ? (
          'loading'
        ) : (
          <ul>
            {listData.map((item, i) => (
              <li key={i}>第{item.value}条</li>
            ))}
          </ul>
        )}
      </div>
      <button disabled={current - 1 <= 0} onClick={() => loadPrevPage()}>
        prev
      </button>
      <select value={current} onChange={(e) => loadData({ pageNo: e.target.value })}>
        {new Array(pageTotal).fill(0).map((v, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button disabled={!hasMore} onClick={() => loadNextPage()}>
        next
      </button>
      total: {total}
    </div>
  )
}
