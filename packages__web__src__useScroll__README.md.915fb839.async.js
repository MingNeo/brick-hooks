(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3797],{73602:function(i,u,n){"use strict";n.d(u,{m:function(){return e.m}});var e=n(67624),t=n(93142)},53473:function(i,u,n){"use strict";n.r(u);var e=n(67294),t=n(36445),s=n(72356),r=n(91485),m=e.memo(o=>{var l=o.demos,a=l["usescroll-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usescroll"},e.createElement(t.AnchorLink,{to:"#usescroll","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useScroll"),e.createElement("p",null,"\u7528\u4E8E\u83B7\u53D6\u4E00\u4E2A scroll \u7684\u6EDA\u52A8\u503C,\u4E14\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5\u6EDA\u52A8\u5230\u5F53\u524D\u5BB9\u5668\u7684\u9876\u90E8\uFF0C\u7528\u4E8E\u5982\u5207\u6362 tab \u65F6\u91CD\u7F6E\u5217\u8868\u4F4D\u7F6E\u7B49"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(s.default,l["usescroll-demo"].previewerProps,e.createElement(a,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(r.Z,{code:`function useScroll({
  root,
  onScroll: onScrollChange,
}?: {
  root?: Element | Ref<Element> | (Window & typeof globalThis)
  onScroll?: any
}): {
  left: number
  top: number
  rootRef: React.MutableRefObject<any>
  scrollToTop: (y?: any) => void
  scrollToLeft: (x?: any) => void
  x: number
  y: number
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement("h4",{id:"\u9875\u9762\u6EDA\u52A8"},e.createElement(t.AnchorLink,{to:"#\u9875\u9762\u6EDA\u52A8","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u9875\u9762\u6EDA\u52A8"),e.createElement(r.Z,{code:`// \u76F8\u5BF9window
function Comp() {
  // \u9875\u9762\u7684\u6EDA\u52A8
  const { y, scrollToTop } = useScroll()
}`,lang:"javascript"}),e.createElement("h4",{id:"\u6307\u5B9A-root"},e.createElement(t.AnchorLink,{to:"#\u6307\u5B9A-root","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6307\u5B9A root"),e.createElement(r.Z,{code:`function Comp() {
  const { y, rootRef, scrollToTop } = useScroll()

  return <div className="container" ref={rootRef}></div>
}
// or
function Comp() {
  const rootRef = useRef()
  const { y, scrollToTop } = useScroll({ root: rootRef })

  return <div className="container" ref={rootRef}></div>
}`,lang:"javascript"}))))});u.default=o=>{var l=e.useContext(t.context),a=l.demos;return e.useEffect(()=>{var c;o!=null&&(c=o.location)!==null&&c!==void 0&&c.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e.createElement(m,{demos:a})}}}]);
