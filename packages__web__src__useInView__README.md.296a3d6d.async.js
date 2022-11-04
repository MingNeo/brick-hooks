(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3162],{57190:function(c,a,n){"use strict";n.d(a,{m:function(){return e.m}});var e=n(11019),t=n(6929)},20121:function(c,a,n){"use strict";n.r(a);var e=n(62472),t=n(34019),l=n(81056),u=n(94834),m=e.memo(o=>{var r=o.demos,i=r["useinview-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useinview"},e.createElement(t.AnchorLink,{to:"#useinview","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useInView"),e.createElement("p",null,"\u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u8FDB\u5165\u53EF\u89C6\u533A\u57DF"),e.createElement("p",null,"\u5982\u9700\u63D0\u524D\u89E6\u53D1 inView\uFF0C\u53EF\u4EE5\u4F7F\u7528",e.createElement(t.Link,{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"rootMargin")),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(l.default,r["useinview-demo"].previewerProps,e.createElement(i,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(u.Z,{code:`function useInView(options?: {
  target?: any
  root?: any
  onInView?: (status: Status) => any
  onOutView?: (status: Status) => any
  rootMargin?: number
  threshold?: number | number[]
}): {
  rootProps: {
    ref: (ref: any) => any
  }
  targetProps: {
    ref: (ref: any) => any
  }
  isInView: boolean
  ratio: number
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(u.Z,{code:`function Comp({ onInView, rootRef, ...restProps }) {
  const { isInView, targetProps, rootProps } = useInView()

  useEffect(() => {
    if (isInView) {
      // ...
    }
  }, [isInView])

  return (
    <div {...rootProps} className="container">
      <div {...targetProps} {...restProps}>
        {' '}
        ...{' '}
      </div>
    </div>
  )
}`,lang:"javascript"}),e.createElement(u.Z,{code:`// \u4F7F\u7528onInView,onOutView \u56DE\u8C03
const { isInView, targetProps, rootProps } = useInView({ onInView, onOutView })`,lang:"javascript"}))))});a.default=o=>{var r=e.useContext(t.context),i=r.demos;return e.useEffect(()=>{var s;o!=null&&(s=o.location)!==null&&s!==void 0&&s.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e.createElement(m,{demos:i})}}}]);
