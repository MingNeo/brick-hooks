(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[8133],{36452:function(l,F,n){"use strict";n.r(F);var u=n(62472),t=n(34019),c=n(94834),a=u.memo(e=>{var o=e.demos;return u.createElement(u.Fragment,null,u.createElement("div",{className:"markdown"},u.createElement("h2",{id:"usemethods"},u.createElement(t.AnchorLink,{to:"#usemethods","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"useMethods"),u.createElement("p",null,"\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684 hooks\uFF01\u7EDD\u5927\u90E8\u5206\u7684\u4E1A\u52A1\u7684\u5F00\u53D1\uFF0C\u90FD\u662F\u72B6\u6001\u52A0\u4E00\u7CFB\u5217\u5F3A\u5173\u8054\u7684\u884C\u4E3A\uFF0C\u8FD9\u6837\u7684\u6A21\u5F0F\u3002\u901A\u5E38\u6211\u4EEC\u76F4\u63A5\u5728\u4E1A\u52A1\u91CC\u5199\u4EE3\u7801\uFF0C\u4F1A\u6709\u5982\u4E0B\u95EE\u9898 1\u3001\u592A\u591A useState\u3001useCallback\uFF0C\u5404\u79CD\u91CD\u590D\u7F16\u7801\u3002 2\u3001\u4FEE\u6539\u7684\u65F6\u5019\u5F88\u96BE\u627E\u5230\u72B6\u6001\u4E0E\u884C\u4E3A\u7684\u5BF9\u5E94\u5173\u7CFB\u3002 3\u3001\u4F7F\u7528 useReducer \u7684\u65F6\u5019\uFF0Creducer \u53C8\u81ED\u53C8\u957F"),u.createElement("p",null,"\u8FD9\u4E2A hooks \u5C31\u662F\u4E3A\u6B64\u800C\u751F\u7684\uFF0C\u53EA\u505A\u4E86\u4E00\u4EF6\u4E8B\uFF0C\u5C06\u4E00\u4E2A\u521D\u59CB\u503C\u548C\u4E00\u4E9B\u64CD\u4F5C\u503C\u7684\u65B9\u6CD5\u53D8\u6210 hooks\u3002\u4E5F\u53EF\u4EE5\u8BF4\u662F\u66F4\u52A0\u7B80\u5355\u6E05\u6670\u7684 useReducer\u3002"),u.createElement("p",null,"\u76EE\u524D\u5B9E\u73B0\u4E86\u4E24\u4E2A\u7248\u672C(immer \u7248\u672C\u89C1 useMethodsImmer)\u3002\u5F53\u4F60\u9700\u8981\u4F7F\u7528 useReducer \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A hooks \u6765\u66FF\u4EE3\u3002\u5F53\u6570\u636E\u662F obj \u683C\u5F0F\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 useObjectState"),u.createElement("h3",{id:"\u7528\u6CD5"},u.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),u.createElement(c.Z,{code:`const counterReducers = {
  inc: (value) => value + 1,
  dec: (value) => value - 1,
}

function MyComponent({ obj }) {
  const [state, { inc, dec }] = useMethods(counterReducers, 0)

  return (
    <div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>inc</button>
    </div>
  )
}`,lang:"javascript"})))});F.default=e=>{var o=u.useContext(t.context),s=o.demos;return u.useEffect(()=>{var E;e!=null&&(E=e.location)!==null&&E!==void 0&&E.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),u.createElement(a,{demos:s})}}}]);
