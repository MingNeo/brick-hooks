(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[1600],{67779:function(r,i,t){"use strict";t.r(i);var e=t(67294),a=t(36445),l=t(91485),d=e.memo(n=>{var o=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usedatalisttotree"},e.createElement(a.AnchorLink,{to:"#usedatalisttotree","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useDataListToTree"),e.createElement("p",null,"useListData \u4E2D\u8F6C\u5316\u4E3A tree \u7684\u5C01\u88C5\uFF0C\u5C06\u5217\u8868\u7C7B\u578B\u6570\u636E\u8F6C\u5316\u4E3A\u6811\u7684\u683C\u5F0F"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`const mockData = [
  { id: 1, pid: 0, value: '\u5C71\u4E1C' },
  { id: 2, pid: 1, value: '\u6D4E\u5357' },
  { id: 3, pid: 1, value: '\u9752\u5C9B' },
  { id: 4, pid: 1, value: '\u70DF\u53F0' },
]
function MyComponent() {
  const treeData = useDataListToTree(listData)

  // treeData:
  // [{
  //   id: 1,
  //   pid: 0,
  //   value: '\u5C71\u4E1C',
  //   children: [
  //     { id: 2, pid: 1, value: '\u6D4E\u5357' },
  //     { id: 3, pid: 1, value: '\u9752\u5C9B' },
  //     { id: 4, pid: 1, value: '\u70DF\u53F0' },
  //   ],
  // }]

  return <Child>...</Child>
}`,lang:"javascript"})))});i.default=n=>{var o=e.useContext(a.context),c=o.demos;return e.useEffect(()=>{var u;n!=null&&(u=n.location)!==null&&u!==void 0&&u.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(d,{demos:c})}}}]);
