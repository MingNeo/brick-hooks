(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[1387],{81573:function(r,o,n){"use strict";n.r(o);var e=n(67294),a=n(36445),s=n(91485),m=e.memo(t=>{var c=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useobjectstateimmer"},e.createElement(a.AnchorLink,{to:"#useobjectstateimmer","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useObjectStateImmer"),e.createElement("p",null,"useObjectStateImmer \u7684 Immer \u7248\u672C\uFF0C\u53EF\u4EE5\u66F4\u7B80\u5355\u7684\u4FEE\u6539\u72B6\u6001"),e.createElement("p",null,"\u76EE\u524D\u5B9E\u73B0\u4E86\u4E24\u4E2A\u7248\u672C(immer \u7248\u672C\u548C\u666E\u901A\u7248\u672C)\u3002\u5EFA\u8BAE\u4E1A\u52A1\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001\u96C6\u5408\uFF0C\u90FD\u4F7F\u7528 useObjectState/useObjectStateImmer \u6765\u66FF\u4EE3 useState/useReducer\u3002"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(s.Z,{code:`// \u4F7F\u7528setState \u76F4\u63A5\u66F4\u65B0\u503C\u7684\u65F6\u5019\uFF0C\u4E0EuseObjectState\u4E00\u81F4\uFF0C\u90FD\u662F\u81EA\u52A8\u8FDB\u884C\u5408\u5E76\u6570\u636E\u3002
// \u4F7F\u7528setState\u5E76\u4F7F\u7528\u66F4\u65B0\u51FD\u6570\u6765\u66F4\u65B0\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5Cstate
function MyComponent() {
  const [homeData, setHomeData] = useObjectStateImmer({ test: 1 })

  // setState \u9ED8\u8BA4\u81EA\u52A8merge
  const handleUpdateTest = () => setHomeData({ text: 1 })
  // homeData: { test: 1, text: 1 }

  // setState \u4E0D\u81EA\u52A8\u5408\u5E76
  const handleUpdateTestNoMerge = () => setHomeData({ text: 1 }, false)
  // homeData: { text: 1 }

  // setState \u4F7F\u7528\u66F4\u65B0\u51FD\u6570
  const handleUpdateTestNoMerge = () =>
    setHomeData((draftState) => {
      draftState.text = 2
    })
  // homeData: { text: 2 }

  return <div>/* ... */</div>
}`,lang:"javascript"}),e.createElement("p",null,"\u4F7F\u7528 methods/reducers"),e.createElement(s.Z,{code:`const homeMethods = {
  updateTitle: (state, title) => {
    state.title = title
  },
}

function MyComponent() {
  const [homeData, setHomeData, { updateTitle, updatePageData }] = useObjectState({ test: 1 }, homeMethods)

  // \u89E6\u53D1\u81EA\u5B9A\u4E49reducer
  const handleUpdateTitle = () => updateTitle('test title')
  // homeData: { test: 1, title: 'test title' }

  return <div>/* ... */</div>
}`,lang:"javascript"})))});o.default=t=>{var c=e.useContext(a.context),l=c.demos;return e.useEffect(()=>{var u;t!=null&&(u=t.location)!==null&&u!==void 0&&u.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(m,{demos:l})}}}]);
