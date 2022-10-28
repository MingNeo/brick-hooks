(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[5165],{43036:function(i,r,t){"use strict";t.r(r);var e=t(67294),o=t(36445),l=t(91485),u=e.memo(n=>{var a=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usescrolltotop"},e.createElement(o.AnchorLink,{to:"#usescrolltotop","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useScrollToTop"),e.createElement("p",null,"\u65B9\u4FBF\u6EDA\u52A8 ScrollView \u5230\u9876\u90E8"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(o.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(l.Z,{code:`function useScrollToTop(
  ref: any,
  options?: {
    animated?: boolean
  },
): Callback`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(o.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`function Comp() {
  const ref = React.useRef(null)
  const scrollToTop = useScrollToTop(ref)

  return (
    <ScrollView ref={ref}>
      {/* content */}
      <Touchable onPress={() => scrollToTop()}></Touchable>
    </ScrollView>
  )
}`,lang:"javascript"}),e.createElement("p",null,"\u81EA\u5B9A\u4E49 scrollToTop \u65B9\u6CD5"),e.createElement(l.Z,{code:`function Comp() {
  const ref = React.useRef(null)

  useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    }),
  )

  return <ScrollView ref={ref}>{/* content */}</ScrollView>
}`,lang:"javascript"})))});r.default=n=>{var a=e.useContext(o.context),s=a.demos;return e.useEffect(()=>{var c;n!=null&&(c=n.location)!==null&&c!==void 0&&c.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(u,{demos:s})}}}]);
