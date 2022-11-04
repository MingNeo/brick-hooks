(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[9585],{57190:function(l,u,n){"use strict";n.d(u,{m:function(){return e.m}});var e=n(11019),t=n(6929)},30362:function(l,u,n){"use strict";n.r(u);var e=n(62472),t=n(34019),s=n(81056),i=n(94834),d=e.memo(o=>{var r=o.demos,a=r["usehover-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usehover"},e.createElement(t.AnchorLink,{to:"#usehover","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useHover"),e.createElement("p",null,"\u65B9\u4FBF\u6DFB\u52A0\u9F20\u6807\u60AC\u6D6E\u5904\u7406"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(s.default,r["usehover-demo"].previewerProps,e.createElement(a,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(i.Z,{code:`interface Options {
  onOver?: () => void
  onOut?: () => void
  updateOnStatusChange?: boolean // \u662F\u5426\u5728\u60AC\u6D6E\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7EC4\u4EF6\u5237\u65B0\uFF0C\u4E3A\u5426\u65F6\u4E0D\u4F1A\u5237\u65B0(\u8FD4\u56DE\u503C\u4E0D\u4F1A\u53D8)
}
function useHover(ref: any, { onOver, onOut, updateOnStatusChange }?: Options): boolean`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(i.Z,{code:`function MyComponent() {
  const ref = useRef()
  const isHover = useHover(ref)

  return <div ref={(node) => (ref.current = node)}></div>
}

function MyComponent() {
  const ref = useRef()
  const onOver = () => {
    /* ... */
  }
  const onOut = () => {
    /* ... */
  }
  useHover(ref, { onOver, onOut })

  return <div ref={(node) => (ref.current = node)}></div>
}`,lang:"javascript"}))))});u.default=o=>{var r=e.useContext(t.context),a=r.demos;return e.useEffect(()=>{var c;o!=null&&(c=o.location)!==null&&c!==void 0&&c.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e.createElement(d,{demos:a})}}}]);
