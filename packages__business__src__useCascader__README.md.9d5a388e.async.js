(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3211],{47640:function(i,u,t){"use strict";t.r(u);var e=t(67294),a=t(36445),c=t(91485),r=e.memo(n=>{var d=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h1",{id:"usecascader"},e.createElement(a.AnchorLink,{to:"#usecascader","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useCascader"),e.createElement("p",null,"\u7528\u4E8E\u7EA7\u8054\u6811\u7B49\u591A\u7EA7\u7C7B\u76EE\u7684\u5C55\u793A\u3001\u9009\u4E2D\uFF0C\u5982\u7701\u5E02\u533A\u3001\u591A\u7EA7\u7C7B\u76EE\u3002"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(a.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(c.Z,{code:`function useCascader({
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
}`,lang:"typescript"}),e.createElement("h2",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(c.Z,{code:`const fetchSubChildren = () => {
  return fetch('http://example.com/movies.json').then((response) => response.json())
}`,lang:"javascript"})))});u.default=n=>{var d=e.useContext(a.context),s=d.demos;return e.useEffect(()=>{var o;n!=null&&(o=n.location)!==null&&o!==void 0&&o.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(r,{demos:s})}}}]);
