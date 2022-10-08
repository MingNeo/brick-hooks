(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[5282],{27284:function(l,a,o){"use strict";o.r(a);var e=o(67294),t=o(36445),r=o(91485),s=e.memo(n=>{var i=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useinview"},e.createElement(t.AnchorLink,{to:"#useinview","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useInView"),e.createElement("p",null,"\u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u8FDB\u5165\u53EF\u89C6\u533A\u57DF"),e.createElement("p",null,"\u5982\u9700\u63D0\u524D\u89E6\u53D1 inView\uFF0C\u53EF\u4EE5\u4F7F\u7528",e.createElement(t.Link,{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"rootMargin")),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(r.Z,{code:`function useInView(options?: {
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
}`,lang:"typescript"}),e.createElement(r.Z,{code:`function Comp({ onInView, rootRef, ...restProps }) {
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
}`,lang:"javascript"}),e.createElement(r.Z,{code:`// \u4F7F\u7528onInView,onOutView \u56DE\u8C03
const { isInView, targetProps, rootProps } = useInView({ onInView, onOutView })`,lang:"javascript"})))});a.default=n=>{var i=e.useContext(t.context),c=i.demos;return e.useEffect(()=>{var u;n!=null&&(u=n.location)!==null&&u!==void 0&&u.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(s,{demos:c})}}}]);
