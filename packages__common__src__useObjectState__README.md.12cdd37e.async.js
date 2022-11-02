(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6556],{837:function(d,o,u){"use strict";u.r(o);var e=u(67294),a=u(36445),s=u(91485),l=e.memo(t=>{var c=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useobjectstate"},e.createElement(a.AnchorLink,{to:"#useobjectstate","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useObjectState"),e.createElement("p",null,"\u9762\u5411\u5BF9\u8C61\u7684 useState\uFF0C\u81EA\u52A8\u8FDB\u884C\u5408\u5E76\uFF0C\u57FA\u672C\u53EF\u4EE5\u8BA4\u4E3A\u7B49\u540C\u4E8E class \u7EC4\u4EF6\u7684 this.setState\uFF0C\u5E76\u6269\u5145\u4E86 reducer \u7684\u4F7F\u7528\u3002\u662F useMethods \u7684\u66F4\u8FDB\u4E00\u6B65\u5C01\u88C5\u3002"),e.createElement("p",null,"\u76EE\u524D\u5B9E\u73B0\u4E86\u4E24\u4E2A\u7248\u672C(immer \u7248\u672C\u548C\u666E\u901A\u7248\u672C)\u3002\u5EFA\u8BAE\u4E1A\u52A1\u7EC4\u4EF6\u4E2D\u7684\u76F8\u5173\u8054\u7684\u4E00\u7EC4\u72B6\u6001\uFF0C\u90FD\u4F7F\u7528 useObjectState/useObjectStateImmer \u6765\u66FF\u4EE3 useState/useReducer \u8FDB\u884C\u96C6\u5408\u7BA1\u7406\u3002"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(s.Z,{code:`function MyComponent() {
  const [homeData, setHomeData] = useObjectState({ test: 1 })

  // setState \u9ED8\u8BA4\u81EA\u52A8merge
  const handleUpdateTest = () => setHomeData({ text: 1 })
  const handleUpdateTestFn = () => setHomeData((prevState) => ({ text: 1 }))
  // homeData: { test: 1, text: 1 }

  // setState \u4E0D\u81EA\u52A8\u5408\u5E76
  const handleUpdateTestNoMerge = () => setHomeData({ text: 1 }, false)
  const handleUpdateTestNoMergeFn = () => setHomeData((prevState) => ({ text: 1 }), false)
  // homeData: { text: 1 }

  return <div>/* ... */</div>
}`,lang:"javascript"}),e.createElement("p",null,"\u4F7F\u7528 methods/reducers"),e.createElement(s.Z,{code:`const homeMethods = {
  updateTitle: (prevState = {}, title) => ({ ...prevState, title }),
  updatePageData: (prevState = {}, payload) => ({ ...prevState, ...payload }),
}

function MyComponent() {
  const [homeData, setHomeData, { updateTitle, updatePageData }] = useObjectState({ test: 1 }, homeMethods)

  // \u89E6\u53D1\u81EA\u5B9A\u4E49reducer
  const handleUpdateTitle = () => updateTitle('test title')
  // homeData: { test: 1, title: 'test title' }

  return <div>/* ... */</div>
}`,lang:"javascript"})))});o.default=t=>{var c=e.useContext(a.context),r=c.demos;return e.useEffect(()=>{var n;t!=null&&(n=t.location)!==null&&n!==void 0&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(l,{demos:r})}}}]);
