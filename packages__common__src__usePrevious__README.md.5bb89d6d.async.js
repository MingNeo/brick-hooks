(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4027],{75995:function(d,a,n){"use strict";n.r(a);var e=n(67294),t=n(36445),s=n(91485),c=e.memo(u=>{var r=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useprevious"},e.createElement(t.AnchorLink,{to:"#useprevious","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"usePrevious"),e.createElement("p",null,"\u83B7\u53D6\u4E0A\u4E00\u6B21\u7684\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u6700\u8FD1\u4E00\u6B21\u53D8\u5316\u524D\u7684\u503C\u3002\u4E5F\u53EF\u4EE5\u914D\u7F6E\u4E3A\u6BCF\u6B21 rerender \u65F6\u89E6\u53D1"),e.createElement(s.Z,{code:`function MyComponent(props) {
  const prevData = usePrevious(props.data)
  // \u6BCF\u6B21render\u90FD\u8FD4\u56DE\u4E0A\u6B21\u7684render\u65F6\u7684props.data\u503C
  const prevRenderData = usePrevious(props.data, false)

  return <div>/* ... */</div>
}`,lang:"javascript"})))});a.default=u=>{var r=e.useContext(t.context),l=r.demos;return e.useEffect(()=>{var o;u!=null&&(o=u.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(c,{demos:l})}}}]);
