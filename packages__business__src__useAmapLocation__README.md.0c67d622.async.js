(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[2839],{73602:function(r,a,n){"use strict";n.d(a,{m:function(){return e.m}});var e=n(67624),t=n(93142)},75488:function(r,a,n){"use strict";n.r(a);var e=n(67294),t=n(36445),m=n(72356),l=n(91485),s=e.memo(u=>{var o=u.demos,c=o["useamaplocation-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useamaplocation"},e.createElement(t.AnchorLink,{to:"#useamaplocation","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useAmapLocation"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE\u8FDB\u884C\u5B9A\u4F4D\uFF0C\u6D4F\u89C8\u5668\u7AEF\u4F7F\u7528\u65F6\uFF0C\u5185\u7F6E js api\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\uFF0C\u5E76\u63D0\u4F9B\u81EA\u52A8\u52A0\u8F7D\u9AD8\u5FB7\u5730\u56FE js \u6587\u4EF6 react native \u7AEF\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u624B\u5DE5\u8BBE\u7F6E services"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(m.default,o["useamaplocation-demo"].previewerProps,e.createElement(c,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(l.Z,{code:`type Location = {
  latitude?: string
  longitude?: string
  city?: string
  [x: string]: any
}

function useAmapLocation({ amapKey, getLocation }?: any): {
  location: Location
  loading: boolean
  loadLocation: Exector
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`import useAmapLocation from 'brick-hooks-business'

export default function MyComponent() {
  const { location, loadLocation, loading } = useAmapLocation({
    amapKey: 'e2a0790d42bc5bfdebceb30b2b71f349',
  })
}`,lang:"javascript"}))))});a.default=u=>{var o=e.useContext(t.context),c=o.demos;return e.useEffect(()=>{var i;u!=null&&(i=u.location)!==null&&i!==void 0&&i.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(s,{demos:c})}}}]);
