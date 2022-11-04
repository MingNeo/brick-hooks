(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6679],{57190:function(c,a,n){"use strict";n.d(a,{m:function(){return e.m}});var e=n(11019),t=n(6929)},15583:function(c,a,n){"use strict";n.r(a);var e=n(62472),t=n(34019),d=n(81056),o=n(94834),s=e.memo(u=>{var i=u.demos,r=i["usescrollfixed-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usefixed"},e.createElement(t.AnchorLink,{to:"#usefixed","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useFixed"),e.createElement("p",null,"\u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u9700\u8981\u56FA\u5B9A\u4F4D\u7F6E\u60AC\u6D6E\uFF0C\u591A\u7528\u4E8E\u6EDA\u52A8\u5230\u4E00\u5B9A\u4F4D\u7F6E\u540E\uFF0C\u60AC\u6D6E header \u7B49"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(d.default,i["usescrollfixed-demo"].previewerProps,e.createElement(r,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(o.Z,{code:`function useScrollFixed(options?: {
  target?: MutableRefObject<any> | any
  root?: MutableRefObject<any> | any
  limit?: (() => number) | number
  fixedStyle?: Record<string, any>
  horizontal?: boolean
}): {
  isFixed: boolean
  fixedStyle: {}
  targetRef: MutableRefObject<any>
  rootRef: MutableRefObject<any>
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement("h4",{id:"\u76F8\u5BF9-window"},e.createElement(t.AnchorLink,{to:"#\u76F8\u5BF9-window","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u76F8\u5BF9 window"),e.createElement(o.Z,{code:`// \u76F8\u5BF9window
function Comp() {
  const { targetRef, isFixed } = useScrollFixed()

  return <div ref={targetRef} className={isFixed ? 'fixed' : ''}></div>
}`,lang:"javascript"}),e.createElement("h4",{id:"\u6307\u5B9A-root-\u5E76\u8865\u5145-fixed-\u65F6\u6837\u5F0F"},e.createElement(t.AnchorLink,{to:"#\u6307\u5B9A-root-\u5E76\u8865\u5145-fixed-\u65F6\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6307\u5B9A root \u5E76\u8865\u5145 fixed \u65F6\u6837\u5F0F"),e.createElement(o.Z,{code:`function Comp() {
  const { targetRef, rootRef, isFixed, fixedStyle } = useScrollFixed({ limit: 90, fixedStyle: { top: 16 } })

  // fixedStyle: { position: 'fixed', zIndex: 100, top: 16 }

  return (
    <div className="container" ref={rootRef}>
      <div ref={targetRef} style={fixedStyle}>
        {' '}
        ...{' '}
      </div>
    </div>
  )
}`,lang:"javascript"}))))});a.default=u=>{var i=e.useContext(t.context),r=i.demos;return e.useEffect(()=>{var l;u!=null&&(l=u.location)!==null&&l!==void 0&&l.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(s,{demos:r})}}}]);
