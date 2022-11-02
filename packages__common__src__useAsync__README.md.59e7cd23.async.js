(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[7644],{97578:function(E,o,a){"use strict";a.r(o);var u=a(67294),e=a(36445),n=a(91485),s=u.memo(t=>{var l=t.demos;return u.createElement(u.Fragment,null,u.createElement("div",{className:"markdown"},u.createElement("h2",{id:"useasync"},u.createElement(e.AnchorLink,{to:"#useasync","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"useAsync"),u.createElement("p",null,"\u5BF9\u5F02\u6B65\u51FD\u6570\u505A\u7B80\u5355\u5904\u7406\u7684 hook\u3002\u4E00\u822C\u6765\u8BF4\u9879\u76EE\u91CC\u5BF9 fetch \u90FD\u4F1A\u505A\u4E86\u4E00\u5B9A\u7A0B\u5EA6\u7684\u5C01\u88C5\u3002\u8FD9\u4E2A\u7B80\u5355\u7684 hook \u4EC5\u505A\u81EA\u52A8 loading\u3001\u81EA\u52A8 debounce\u3001mutate \u7684\u5904\u7406\u3002\u8FD4\u56DE\u5904\u7406\u8FC7\u540E\u7684\u51FD\u6570\u548C loading\u3001error \u7B49\u72B6\u6001\u3002"),u.createElement("p",null,"\u590D\u6742\u5F02\u6B65\u8BF7\u6C42\u7BA1\u7406\u53EF\u4EE5\u4F7F\u7528 SWR \u7B49\u5F00\u6E90\u8BF7\u6C42\u5E93\u3002"),u.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},u.createElement(e.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),u.createElement(n.Z,{code:`function useAsync<A extends AsyncFunction>(
  asyncFunction: A,
  {
    immediate,
    onResult,
    debounceTime,
  }?: {
    immediate?: boolean
    onResult?: (res: any) => void
    debounceTime?: number
    manual?: boolean
  },
): [
  (...args: any[]) => Promise<any>,
  {
    result: any
    error: any
    loading: boolean
    status: 'success' | 'loading' | 'idle' | 'fail' | 'mutate success'
    mutate: (...args: any[]) => any
  },
]`,lang:"ts"}),u.createElement("h3",{id:"\u7528\u6CD5"},u.createElement(e.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),u.createElement("h4",{id:"\u81EA\u52A8\u89E6\u53D1\u8BF7\u6C42"},u.createElement(e.AnchorLink,{to:"#\u81EA\u52A8\u89E6\u53D1\u8BF7\u6C42","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u81EA\u52A8\u89E6\u53D1\u8BF7\u6C42"),u.createElement(n.Z,{code:`const fetchData = (params) => {
  return request('/api/xxx')
}

function MyComponent() {
  const [loadData, { loading, result }] = useAsync(fetchData, { immediate: true })

  if (result) return <>...</>
  if (loading) return <>...</>
  return null
}`,lang:"javascript"}),u.createElement("h4",{id:"\u624B\u5DE5\u89E6\u53D1\u8BF7\u6C42"},u.createElement(e.AnchorLink,{to:"#\u624B\u5DE5\u89E6\u53D1\u8BF7\u6C42","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u624B\u5DE5\u89E6\u53D1\u8BF7\u6C42"),u.createElement(n.Z,{code:`// \u624B\u5DE5\u5904\u7406\u8BF7\u6C42\u8FD4\u56DE\u503C
function MyComponent() {
  const [loadData, { loading, result }] = useAsync(fetchData, { immediate: false })

  useEffect(() => {
    loadData()
  }, [])

  // \u6216
  useEffect(() => {
    loadData().then((result) => {})
  }, [])
}`,lang:"javascript"}),u.createElement("h4",{id:"debounce"},u.createElement(e.AnchorLink,{to:"#debounce","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"debounce"),u.createElement("p",null,"\u4F7F\u7528 debounceTime \u65F6\uFF0C\u5C06\u81EA\u52A8\u8FDB\u884C debounce \u5904\u7406\u6CE8\u610F\uFF0C\u4F7F\u7528 debounceTime \u540E, \u8BF7\u6C42\u51FD\u6570 \u4E0D\u4F1A\u518D\u6709\u8FD4\u56DE\u503C"),u.createElement(n.Z,{code:`// \u4F7F\u7528debounce
const [loadData, { loading, result }] = useAsync(fetchData, { debounceTime: 500 })`,lang:"javascript"}),u.createElement(n.Z,{code:`// \u4F7F\u7528debounceTime\u540E, loadData\u4E0D\u4F1A\u518D\u6709\u8FD4\u56DE\u503C\u3002\u53EF\u4EE5\u901A\u8FC7result\u83B7\u53D6\u7ED3\u679C\u3002\u6216\u5982\u4E0B\u5BF9retchData\u8FDB\u884C\u5305\u88C5
const [loadData, { loading, result }] = useAsync(
  (...args) => {
    fetchData(...args).then((res) => {})
  },
  { debounceTime: 500 },
)`,lang:"javascript"}),u.createElement("h4",{id:"onresult"},u.createElement(e.AnchorLink,{to:"#onresult","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"onResult"),u.createElement("p",null,"\u8BF7\u6C42\u6210\u529F\u8FD4\u56DE\u6570\u636E\u4F1A\u89E6\u53D1 onResult \u56DE\u8C03\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u76F4\u63A5.then \u540E\u5904\u7406\u6216\u4F7F\u7528 result \u5373\u53EF\uFF0C\u4F46\u6709\u65F6\u5019\u5E0C\u671B\u81EA\u52A8\u540C\u6B65\u72B6\u6001\uFF0C\u5219\u53EF\u4EE5\u914D\u7F6E onResult \u65B9\u6CD5"),u.createElement(n.Z,{code:`// \u81EA\u52A8\u66F4\u65B0\u6570\u636E
const [address, setAddress] = useStore('address')
const [loadData, { loading, result }] = useAsync(fetchData, {
  onResult: (data) => setAddress({ addressList: data }),
})`,lang:"javascript"}),u.createElement("h4",{id:"mutate"},u.createElement(e.AnchorLink,{to:"#mutate","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"mutate"),u.createElement("p",null,"\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u4F1A\u52A0\u8F7D\u6570\u636E\uFF0C\u66F4\u65B0\u6570\u636E\uFF0C\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\u3002\u5982\uFF0C\u8D2D\u7269\u8F66\u9875\u9762\uFF0C\u52A0\u8F7D\u5217\u8868 -> \u52FE\u9009\u67D0\u4E2A\u5546\u54C1 -> \u8BF7\u6C42\u6570\u636E -> \u5237\u65B0\u5217\u8868\u3002\u5982\u679C\u7B49\u5F85\u8BF7\u6C42\u6210\u529F\u540E\u518D\u8BBE\u7F6E\u9009\u4E2D\u4F53\u9A8C\u4F1A\u5F88\u4E0D\u597D\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5728\u8BF7\u6C42\u56DE\u6765\u4E4B\u524D\u5148\u8BBE\u7F6E\u9009\u4E2D\u7684\u6548\u679C"),u.createElement(n.Z,{code:`// \u81EA\u52A8\u66F4\u65B0\u6570\u636E
const [loadData, { loading, result, mutate }] = useAsync(fetchData)

const handleClick = (key) => {
  mutate({ ...result, [key]: 'selected' })
  loadData()
}`,lang:"javascript"})))});o.default=t=>{var l=u.useContext(e.context),r=l.demos;return u.useEffect(()=>{var c;t!=null&&(c=t.location)!==null&&c!==void 0&&c.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),u.createElement(s,{demos:r})}}}]);
