(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4027],{73602:function(c,a,n){"use strict";n.d(a,{m:function(){return e.m}});var e=n(67624),u=n(93142)},75995:function(c,a,n){"use strict";n.r(a);var e=n(67294),u=n(36445),i=n(32295),l=n(91485),E=e.memo(t=>{var o=t.demos,r=o["useprevious-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useprevious"},e.createElement(u.AnchorLink,{to:"#useprevious","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"usePrevious"),e.createElement("p",null,"\u83B7\u53D6\u4E0A\u4E00\u6B21\u7684\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u6700\u8FD1\u4E00\u6B21\u53D8\u5316\u524D\u7684\u503C\u3002\u4E5F\u53EF\u4EE5\u914D\u7F6E\u4E3A\u6BCF\u6B21 rerender \u65F6\u89E6\u53D1"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(u.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(i.default,o["useprevious-demo"].previewerProps,e.createElement(r,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(u.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`function MyComponent(props) {
  const prevData = usePrevious(props.data)
  // \u6BCF\u6B21render\u90FD\u8FD4\u56DE\u4E0A\u6B21\u7684render\u65F6\u7684props.data\u503C
  const prevRenderData = usePrevious(props.data, false)

  return <div>/* ... */</div>
}`,lang:"javascript"}),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(u.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(l.Z,{code:"function usePrevious<S>(value: S, equalsMode?: boolean): S",lang:"typescript"}))))});a.default=t=>{var o=e.useContext(u.context),r=o.demos;return e.useEffect(()=>{var s;t!=null&&(s=t.location)!==null&&s!==void 0&&s.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(E,{demos:r})}}}]);
