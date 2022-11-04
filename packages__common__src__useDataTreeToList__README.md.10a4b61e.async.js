(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[7088],{17333:function(r,i,t){"use strict";t.r(i);var e=t(62472),a=t(34019),l=t(94834),d=e.memo(n=>{var o=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usedatatreetolist"},e.createElement(a.AnchorLink,{to:"#usedatatreetolist","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useDataTreeToList"),e.createElement("p",null,"\u5C06\u6811\u7684\u683C\u5F0F\u7684\u6570\u636E\u8F6C\u5316\u4E3A\u5217\u8868\uFF0C\u4E3A useListData \u4E2D\u8F6C\u5316\u4E3A tree \u7684\u8FDB\u4E00\u6B65\u5C01\u88C5"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`const data = [{
    id: 1,
    pid: 0,
    value: '\u5C71\u4E1C',
    children: [
      { id: 2, pid: 1, value: '\u6D4E\u5357' },
      { id: 3, pid: 1, value: '\u9752\u5C9B' },
      { id: 4, pid: 1, value: '\u70DF\u53F0' },
    ],
  }]

function MyComponent({ data }) {
  const flatData = useDataTreeToList(data);

  // flatData:
  // [
  //   { id: 1, pid: 0, value: '\u5C71\u4E1C' },
  //   { id: 2, pid: 1, value: '\u6D4E\u5357' },
  //   { id: 3, pid: 1, value: '\u9752\u5C9B' },
  //   { id: 4, pid: 1, value: '\u70DF\u53F0' },
  // ]
  return ...;
}`,lang:"javascript"})))});i.default=n=>{var o=e.useContext(a.context),c=o.demos;return e.useEffect(()=>{var u;n!=null&&(u=n.location)!==null&&u!==void 0&&u.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(d,{demos:c})}}}]);
