(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6679],{44993:function(d,o,u){"use strict";u.r(o);var e=u(67294),n=u(36445),a=u(91485),c=e.memo(t=>{var r=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usefixed"},e.createElement(n.AnchorLink,{to:"#usefixed","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useFixed"),e.createElement("p",null,"\u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u9700\u8981\u56FA\u5B9A\u4F4D\u7F6E\u60AC\u6D6E\uFF0C\u591A\u7528\u4E8E\u6EDA\u52A8\u5230\u4E00\u5B9A\u4F4D\u7F6E\u540E\uFF0C\u60AC\u6D6E header \u7B49"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(a.Z,{code:`function useScrollFixed(options?: {
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
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement("h4",{id:"\u76F8\u5BF9-window"},e.createElement(n.AnchorLink,{to:"#\u76F8\u5BF9-window","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u76F8\u5BF9 window"),e.createElement(a.Z,{code:`// \u76F8\u5BF9window
function Comp() {
  const { targetRef, isFixed } = useScrollFixed()

  return <div ref={targetRef} className={isFixed ? 'fixed' : ''}></div>
}`,lang:"javascript"}),e.createElement("h4",{id:"\u6307\u5B9A-root-\u5E76\u8865\u5145-fixed-\u65F6\u6837\u5F0F"},e.createElement(n.AnchorLink,{to:"#\u6307\u5B9A-root-\u5E76\u8865\u5145-fixed-\u65F6\u6837\u5F0F","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6307\u5B9A root \u5E76\u8865\u5145 fixed \u65F6\u6837\u5F0F"),e.createElement(a.Z,{code:`function Comp() {
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
}`,lang:"javascript"})))});o.default=t=>{var r=e.useContext(n.context),l=r.demos;return e.useEffect(()=>{var i;t!=null&&(i=t.location)!==null&&i!==void 0&&i.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(c,{demos:l})}}}]);
