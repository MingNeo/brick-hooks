(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4050],{3782:function(d,o,t){"use strict";t.r(o);var e=t(67294),n=t(36445),i=t(91485),s=e.memo(a=>{var l=a.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usedatalisttomap"},e.createElement(n.AnchorLink,{to:"#usedatalisttomap","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useDataListToMap"),e.createElement("p",null,"\u5BF9\u6570\u7EC4\u7C7B\u578B\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u6570\u7EC4\u65B9\u6CD5\u3002 useListData \u4E2D\u8F6C\u5316\u4E3A Object \u7684\u5C01\u88C5"),e.createElement(i.Z,{code:`const listData = [
  { id: 'a', value: 'A' },
  { id: 'b', value: 'B' },
  { id: 'c', value: 'C' },
  { id: 'd', value: 'D' },
]
function MyComponent() {
  const mapData = useDataListToMap(listData)

  // mapData:
  // {
  //   a: { id: 'a', value: 'A' },
  //   b: { id: 'b', value: 'B' },
  //   c: { id: 'c', value: 'C' },
  //   d: { id: 'd', value: 'D' }
  // }

  return <Child>...</Child>
}`,lang:"javascript"})))});o.default=a=>{var l=e.useContext(n.context),c=l.demos;return e.useEffect(()=>{var u;a!=null&&(u=a.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.createElement(s,{demos:c})}}}]);
