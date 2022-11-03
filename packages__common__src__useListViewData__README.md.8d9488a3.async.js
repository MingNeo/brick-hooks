(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4703],{73602:function(c,l,n){"use strict";n.d(l,{m:function(){return e.m}});var e=n(67624),a=n(93142)},74688:function(c,l,n){"use strict";n.r(l);var e=n(67294),a=n(36445),r=n(72356),s=n(91485),m=e.memo(t=>{var u=t.demos,i=u["uselistviewdata-demo1"].component,o=u["uselistviewdata-demo2"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"uselistviewdata"},e.createElement(a.AnchorLink,{to:"#uselistviewdata","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useListViewData"),e.createElement("p",null,"\u5904\u7406\u5217\u8868\u6570\u636E\u7684 hooks, \u8BF7\u6C42\u6570\u636E\u3001\u52A0\u8F7D\u4E0B\u4E00\u9875\u3001\u6E05\u7A7A\u7B5B\u9009\u6761\u4EF6\u3001\u91CD\u8F7D\u6570\u636E"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(a.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(r.default,u["uselistviewdata-demo1"].previewerProps,e.createElement(i,null)),e.createElement("div",{className:"markdown"},e.createElement("p",null," ")),e.createElement(r.default,u["uselistviewdata-demo2"].previewerProps,e.createElement(o,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(a.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(s.Z,{code:`function useListViewData(
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
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(s.Z,{code:`function MyComponent() {
  // \u6CE8\u610F\uFF0C \u5F02\u6B65\u8BF7\u6C42getData\u8FD4\u56DE\u6570\u636E\u5FC5\u987B\u662Fany[]\u683C\u5F0F
  const { listData, loadData, loadNextPage, loading } = useListViewData(getData, { pageSize: 1, pageNo: 10 })

  useEffect(() => {
    loadData({ pageSize: 2 })
  }, [])
  const handleLoadNextPage = () => loadNextPage()
}`,lang:"javascript"}))))});l.default=t=>{var u=e.useContext(a.context),i=u.demos;return e.useEffect(()=>{var o;t!=null&&(o=t.location)!==null&&o!==void 0&&o.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(m,{demos:i})}}}]);
