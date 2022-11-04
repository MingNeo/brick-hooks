(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[9287],{97306:function(i,c,n){"use strict";n.r(c);var e=n(62472),o=n(34019),a=n(94834),r=e.memo(u=>{var l=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usepagefocus"},e.createElement(o.AnchorLink,{to:"#usepagefocus","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"usePageFocus"),e.createElement("p",null,"\u4E0E useFocusEffect \u7C7B\u4F3C\uFF0C\u4F46\u662F\u4F20\u5165\u7684 effect \u51FD\u6570\u65E0\u9700\u8981\u4F7F\u7528 useCallback \u5904\u7406 effect \u51FD\u6570\u53D8\u5316\u4E5F\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u53EA\u6709\u9875\u9762 focus \u65F6\u624D\u4F1A\u89E6\u53D1"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(o.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(a.Z,{code:`usePageFocus(() => {
  // ...
})`,lang:"javascript"}),e.createElement("p",null,"eg:\u9875\u9762 focus \u65F6\u81EA\u52A8\u6EDA\u52A8\u5230 top"),e.createElement(a.Z,{code:`import { usePageFocus } from 'brick-hooks-react-navigation4'
import { useScrollToTop } from 'brick-hooks-native'

function Comp {
  const ref = useRef(null)
  usePageFocus(useScrollToTop(ref))

  return <ScrollView ref={ref}></ScrollView>
}`,lang:"javascript"})))});c.default=u=>{var l=e.useContext(o.context),s=l.demos;return e.useEffect(()=>{var t;u!=null&&(t=u.location)!==null&&t!==void 0&&t.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(r,{demos:s})}}}]);
