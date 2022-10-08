;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [4703],
  {
    74688: function (s, o, a) {
      'use strict'
      a.r(o)
      var e = a(67294),
        t = a(36445),
        i = a(91485),
        l = e.memo((n) => {
          var r = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'uselistviewdata' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#uselistviewdata', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useListViewData',
              ),
              e.createElement(
                'p',
                null,
                '\u5904\u7406\u5217\u8868\u6570\u636E\u7684 hooks, \u8BF7\u6C42\u6570\u636E\u3001\u52A0\u8F7D\u4E0B\u4E00\u9875\u3001\u6E05\u7A7A\u7B5B\u9009\u6761\u4EF6\u3001\u91CD\u8F7D\u6570\u636E',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(i.Z, {
                code: `function useListViewData(
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
  setQuery: React.Dispatch<
    React.SetStateAction<{
      pageNo: number
      pageSize: number
      hasMore: boolean
      query: Record<string, any>
    }>
  >
}`,
                lang: 'typescript',
              }),
              e.createElement(i.Z, {
                code: `function MyComponent() {
  // \u6CE8\u610F\uFF0C \u5F02\u6B65\u8BF7\u6C42getData\u8FD4\u56DE\u6570\u636E\u5FC5\u987B\u662Fany[]\u683C\u5F0F
  const { listData, loadData, loadNextPage, loading } = useListViewData(getData, { pageSize: 1, pageNo: 10 })

  useEffect(() => {
    loadData({ pageSize: 2 })
  }, [])
  const handleLoadNextPage = () => loadNextPage()
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      o.default = (n) => {
        var r = e.useContext(t.context),
          c = r.demos
        return (
          e.useEffect(() => {
            var u
            n != null &&
              (u = n.location) !== null &&
              u !== void 0 &&
              u.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(l, { demos: c })
        )
      }
    },
  },
])
