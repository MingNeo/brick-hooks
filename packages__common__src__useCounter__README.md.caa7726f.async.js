(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[1512],{73602:function(l,u,n){"use strict";n.d(u,{m:function(){return e.m}});var e=n(67624),t=n(93142)},54952:function(l,u,n){"use strict";n.r(u);var e=n(67294),t=n(36445),s=n(32295),r=n(91485),m=e.memo(o=>{var a=o.demos,c=a["usecounter-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usecounter"},e.createElement(t.AnchorLink,{to:"#usecounter","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useCounter"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(s.default,a["usecounter-demo"].previewerProps,e.createElement(c,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(r.Z,{code:`interface CounterOptions {
  min?: number
  max?: number
  step?: number
}
function useCounter(initialValue?: number, options?: CounterOptions): [number, Methods]`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(r.Z,{code:`function MyComponent() {
  const [count, actions] = useCounter(0, { min: 0, max: 100 })
  actions.inc() // count: oldCount + 1
  actions.dec() // count: oldCount - 1
  actions.inc(3) // count: oldCount + 3
  actions.dec(3) // count: oldCount - 3
  actions.reset(3) // count: initialValue
  actions.set(50) // count: 50
  return <Child>...</Child>
}`,lang:"javascript"}))))});u.default=o=>{var a=e.useContext(t.context),c=a.demos;return e.useEffect(()=>{var i;o!=null&&(i=o.location)!==null&&i!==void 0&&i.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e.createElement(m,{demos:c})}}}]);
