(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3797],{53473:function(i,c,t){"use strict";t.r(c);var e=t(67294),n=t(36445),u=t(91485),a=e.memo(o=>{var r=o.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usescroll"},e.createElement(n.AnchorLink,{to:"#usescroll","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useScroll"),e.createElement("p",null,"\u7528\u4E8E\u83B7\u53D6\u4E00\u4E2A scroll \u7684\u6EDA\u52A8\u503C,\u4E14\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5\u6EDA\u52A8\u5230\u5F53\u524D\u5BB9\u5668\u7684\u9876\u90E8\uFF0C\u7528\u4E8E\u5982\u5207\u6362 tab \u65F6\u91CD\u7F6E\u5217\u8868\u4F4D\u7F6E\u7B49"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(u.Z,{code:`function useScroll({
  root,
  onScroll: onScrollChange,
}?: {
  root?: Element | Ref<Element> | (Window & typeof globalThis)
  onScroll?: any
}): {
  rootRef: React.MutableRefObject<any>
  scrollToTop: (y?: any) => void
  scrollToLeft: (x?: any) => void
  x: number
  y: number
}`,lang:"typescript"}),e.createElement("h4",{id:"\u9875\u9762\u6EDA\u52A8"},e.createElement(n.AnchorLink,{to:"#\u9875\u9762\u6EDA\u52A8","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u9875\u9762\u6EDA\u52A8"),e.createElement(u.Z,{code:`// \u76F8\u5BF9window
function Comp() {
  // \u9875\u9762\u7684\u6EDA\u52A8
  const { y, scrollToTop } = useScroll()
}`,lang:"javascript"}),e.createElement("h4",{id:"\u6307\u5B9A-root"},e.createElement(n.AnchorLink,{to:"#\u6307\u5B9A-root","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6307\u5B9A root"),e.createElement(u.Z,{code:`function Comp() {
  const { y, rootRef, scrollToTop } = useScroll()

  return <div className="container" ref={rootRef}></div>
}
// or
function Comp() {
  const rootRef = useRef()
  const { y, scrollToTop } = useScroll({ root: rootRef })

  return <div className="container" ref={rootRef}></div>
}`,lang:"javascript"})))});c.default=o=>{var r=e.useContext(n.context),s=r.demos;return e.useEffect(()=>{var l;o!=null&&(l=o.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e.createElement(a,{demos:s})}}}]);
