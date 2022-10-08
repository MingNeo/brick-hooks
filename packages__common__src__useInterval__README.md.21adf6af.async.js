(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[669],{27286:function(s,c,t){"use strict";t.r(c);var e=t(67294),n=t(36445),a=t(91485),r=e.memo(u=>{var l=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useinterval"},e.createElement(n.AnchorLink,{to:"#useinterval","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useInterval"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 useInterval\uFF0C\u5C11\u5199\u51E0\u884C\u4EE3\u7801\uFF0C\u5C11\u70B9\u5FC3\u667A\u8D1F\u62C5\uFF0C\u4E0D\u7528\u624B\u52A8\u6DFB\u52A0\u9500\u6BC1\uFF0C\u4E0D\u7528\u6DFB\u52A0\u4F9D\u8D56\u3002"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(a.Z,{code:`function useInterval(
  callback: Callback,
  time?: number
  options?: {
    autoRun?: boolean
  }
): {
  isRunning: boolean
  start: () => void
  stop: () => void
}`,lang:"typescript"}),e.createElement("h3",{id:"\u76F4\u63A5\u4F7F\u7528"},e.createElement(n.AnchorLink,{to:"#\u76F4\u63A5\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u76F4\u63A5\u4F7F\u7528"),e.createElement(a.Z,{code:`function MyComponent() {
  useInterval(() => {
    // ...
  }, 200)
}`,lang:"javascript"}),e.createElement("h3",{id:"\u624B\u52A8\u89E6\u53D1"},e.createElement(n.AnchorLink,{to:"#\u624B\u52A8\u89E6\u53D1","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u624B\u52A8\u89E6\u53D1"),e.createElement(a.Z,{code:`function MyComponent() {
  const { start, stop, isRunning } = useInterval(
    () => {
      // ...
    },
    200,
    { autoRun: false },
  )
}`,lang:"javascript"})))});c.default=u=>{var l=e.useContext(n.context),i=l.demos;return e.useEffect(()=>{var o;u!=null&&(o=u.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(r,{demos:i})}}}]);
