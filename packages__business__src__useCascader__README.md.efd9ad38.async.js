(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3211],{73602:function(s,o,n){"use strict";n.d(o,{m:function(){return e.m}});var e=n(67624),t=n(93142)},47640:function(s,o,n){"use strict";n.r(o);var e=n(67294),t=n(36445),i=n(26328),d=n(91485),l=e.memo(a=>{var u=a.demos,c=u["usecascader-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h1",{id:"usecascader"},e.createElement(t.AnchorLink,{to:"#usecascader","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useCascader"),e.createElement("p",null,"\u7528\u4E8E\u7EA7\u8054\u6811\u7B49\u591A\u7EA7\u7C7B\u76EE\u7684\u5C55\u793A\u3001\u9009\u4E2D\uFF0C\u5982\u7701\u5E02\u533A\u3001\u591A\u7EA7\u7C7B\u76EE\u3002"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(i.default,u["usecascader-demo"].previewerProps,e.createElement(c,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(d.Z,{code:`function useCascader({
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
}`,lang:"typescript"}),e.createElement("h2",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(d.Z,{code:`const fetchSubChildren = () => {
  return fetch('http://example.com/movies.json').then((response) => response.json())
}`,lang:"javascript"}))))});o.default=a=>{var u=e.useContext(t.context),c=u.demos;return e.useEffect(()=>{var r;a!=null&&(r=a.location)!==null&&r!==void 0&&r.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.createElement(l,{demos:c})}}}]);
