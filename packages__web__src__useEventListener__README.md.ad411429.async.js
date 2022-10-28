(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[996],{56517:function(s,o,u){"use strict";u.r(o);var e=u(67294),t=u(36445),r=u(91485),i=e.memo(n=>{var c=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useeventlistener"},e.createElement(t.AnchorLink,{to:"#useeventlistener","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useEventListener"),e.createElement("p",null,"\u65B9\u4FBF\u4E3A dom \u8282\u70B9\u7ED1\u5B9A event\uFF0C\u7EC4\u4EF6\u5378\u8F7D\u65F6\u81EA\u52A8\u8FDB\u884C\u89E3\u7ED1"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(r.Z,{code:`type Handler = (...args: any[]) => void
interface Options {
  capture?: boolean
  once?: boolean
  passive?: boolean
  signal?: AbortSignal
  dom?: Element
}
function useEventListener(eventName: string, handler: Handler, options?: Options): React.MutableRefObject<Element>`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(r.Z,{code:`// \u901A\u8FC7dom\u6307\u5B9A\u9700\u8981\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u4E14\u672A\u4F7F\u7528ref\u5219\u4F1A\u9ED8\u8BA4\u4F7F\u7528window
useEventListener(
  'resize',
  (e) => {
    // ...
  },
  { dom: window },
)

useEventListener(
  'click',
  (e) => {
    // ...
  },
  { dom: document.querySelector('#xxx'), capture: true },
)

// \u4F7F\u7528ref
const ref = useEventListener('click', (e) => {
  // ...
})

return <div ref={(node) => (ref.current = node)}></div>`,lang:"javascript"})))});o.default=n=>{var c=e.useContext(t.context),l=c.demos;return e.useEffect(()=>{var a;n!=null&&(a=n.location)!==null&&a!==void 0&&a.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(i,{demos:l})}}}]);
