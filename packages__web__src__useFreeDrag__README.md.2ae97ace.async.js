(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3814],{73602:function(c,o,n){"use strict";n.d(o,{m:function(){return e.m}});var e=n(67624),t=n(93142)},5503:function(c,o,n){"use strict";n.r(o);var e=n(67294),t=n(36445),s=n(32295),r=n(91485),d=e.memo(u=>{var a=u.demos,l=a["usefreedrag-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usefreedrag"},e.createElement(t.AnchorLink,{to:"#usefreedrag","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useFreeDrag"),e.createElement("p",null,"\u53EF\u4EE5\u5FEB\u901F\u7ED9\u4E00\u4E2A\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u8282\u70B9\u63D0\u4F9B\u81EA\u7531\u62D6\u62FD\u80FD\u529B"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(s.default,a["usefreedrag-demo"].previewerProps,e.createElement(l,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(r.Z,{code:`interface Rect {
  top: number
  left: number
}

type OnDragMoving = (rect: Rect, event: MouseEvent) => void

interface DragStyle {
  top: number
  left: number
  position?: 'absolute'
}

function useFreeDrag(
  onDragMoving?: OnDragMoving,
  options?: {
    initialRect?: Rect
  },
): {
  onMousedown: (e: MouseEvent) => void
  style: DragStyle
  props: {
    onMousedown: (e: MouseEvent) => void
    style: DragStyle
  }
  parentStyle: {
    position: 'relative'
  }
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(r.Z,{code:`function Comp() {
  const { onMousedown, dragStyle } = useFreeDrag((rect) => {
    console.log(rect)
  })

  return (
    <div style={{ position: 'relative', height: 200, width: '100%' }}>
      <div onMousedown={onMousedown} style={{ height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }} />
    </div>
  )
}`,lang:"javascript"}),e.createElement("p",null,"\u5982\u679C\u521D\u59CB\u72B6\u6001\u4E0D\u662F left:0,top:0\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E initialRect"),e.createElement(r.Z,{code:"const { onMousedown, dragStyle } = useFreeDrag(() => {}, { initialRect: { left: 10, top: 10 })",lang:"javascript"}))))});o.default=u=>{var a=e.useContext(t.context),l=a.demos;return e.useEffect(()=>{var i;u!=null&&(i=u.location)!==null&&i!==void 0&&i.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(d,{demos:l})}}}]);
