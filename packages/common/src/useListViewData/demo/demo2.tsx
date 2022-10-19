import React, { useEffect, useRef } from 'react'
import 'intersection-observer'
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
  const { listData, loading, loadNextPage, hasMore } = useListViewData(fetchData, {
    autoLoad: true,
    initialQuery: { pageSize: 10 },
    isMerge: true,
  })

  const rootRef = useRef()
  const targetRef = useRef()

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && hasMore && loadNextPage()
        })
      },
      {
        root: rootRef.current || null,
        rootMargin: `0px`,
        threshold: 0,
      },
    )
    io.observe(targetRef.current)
    return () => {
      io.disconnect()
    }
  }, [hasMore, loadNextPage])

  return (
    <div>
      <h2>滚动加载示例</h2>
      <div style={{ border: 'solid 1px', height: '100px', overflow: 'scroll', padding: 0 }} ref={rootRef}>
        <ul style={{ padding: 0 }}>
          {listData.map((item, i) => (
            <li style={{ listStyleType: 'none', borderBottom: 'solid 0.5px #bbb' }} key={i}>
              第{item.value}条
            </li>
          ))}
        </ul>
        <div ref={targetRef}>{loading ? 'loading' : ''}</div>
      </div>
    </div>
  )
}
