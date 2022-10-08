(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[7307],{97885:function(l,E,t){"use strict";t.r(E);var u=t(67294),n=t(36445),c=t(91485),F=u.memo(e=>{var a=e.demos;return u.createElement(u.Fragment,null,u.createElement("div",{className:"markdown"},u.createElement("h2",{id:"usemethodsimmer"},u.createElement(n.AnchorLink,{to:"#usemethodsimmer","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"useMethodsImmer"),u.createElement("p",null,"useMethods \u7684 immer \u7248\u672C"),u.createElement("p",null,"\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684 hooks\uFF01 \u7EDD\u5927\u90E8\u5206\u7684\u4E1A\u52A1\u7684\u5F00\u53D1\uFF0C\u90FD\u662F\u72B6\u6001\u52A0\u4E00\u7CFB\u5217\u5F3A\u5173\u8054\u7684\u884C\u4E3A\uFF0C\u8FD9\u6837\u7684\u6A21\u5F0F\u3002 \u901A\u5E38\u6211\u4EEC\u76F4\u63A5\u5728\u4E1A\u52A1\u91CC\u5199\u4EE3\u7801\uFF0C\u4F1A\u6709\u5982\u4E0B\u95EE\u9898 1\u3001\u592A\u591A useState\u3001useCallback\uFF0C\u5404\u79CD\u91CD\u590D\u7F16\u7801\u3002 2\u3001\u4FEE\u6539\u7684\u65F6\u5019\u5F88\u96BE\u627E\u5230\u72B6\u6001\u4E0E\u884C\u4E3A\u7684\u5BF9\u5E94\u5173\u7CFB\u3002 3\u3001\u4F7F\u7528 useReducer \u7684\u65F6\u5019\uFF0Creducer \u53C8\u81ED\u53C8\u957F"),u.createElement("p",null,"\u8FD9\u4E2A hooks \u5C31\u662F\u4E3A\u6B64\u800C\u751F\u7684\uFF0C\u53EA\u505A\u4E86\u4E00\u4EF6\u4E8B\uFF0C\u5C06\u4E00\u4E2A\u521D\u59CB\u503C\u548C\u4E00\u4E9B\u64CD\u4F5C\u503C\u7684\u65B9\u6CD5\u53D8\u6210 hooks\u3002\u4E5F\u53EF\u4EE5\u8BF4\u662F\u66F4\u52A0\u7B80\u5355\u6E05\u6670\u7684 useReducer\u3002"),u.createElement("p",null,"\u76EE\u524D\u5B9E\u73B0\u4E86\u4E24\u4E2A\u7248\u672C(immer \u7248\u672C\u548C\u666E\u901A\u7248\u672C)\u3002 \u5F53\u4F60\u9700\u8981\u4F7F\u7528 useReducer \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A hooks \u6765\u66FF\u4EE3\u3002\u5F53\u6570\u636E\u662F obj \u683C\u5F0F\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 useObjectState"),u.createElement("h3",{id:"\u666E\u901A\u7248\u672C"},u.createElement(n.AnchorLink,{to:"#\u666E\u901A\u7248\u672C","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u666E\u901A\u7248\u672C"),u.createElement(c.Z,{code:`const counterReducers = {
  inc: (value) => value + 1,
  dec: (value) => value - 1,
}

function MyComponent({ obj }) {
  const [state, { inc, dec, dispatch }] = useMethods(counterReducers, 0)

  return (
    <div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dispatch('inc')}>dispatchInc</button>
      <button onClick={() => dec()}>dec</button>
    </div>
  )
}`,lang:"javascript"}),u.createElement("h3",{id:"immer-\u7248\u672C"},u.createElement(n.AnchorLink,{to:"#immer-\u7248\u672C","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"immer \u7248\u672C"),u.createElement("p",null,"immer \u7248\u672C\u7684\u7279\u70B9\u5C31\u662F\u4F7F\u7528 immer\uFF0C\u56E0\u6B64\u6570\u636E\u7684\u64CD\u4F5C\u53EF\u4EE5\u65E0\u9700\u4E00\u5C42\u5C42\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u76F4\u63A5\u4FEE\u6539"),u.createElement(c.Z,{code:`const counterReducers = state => ({
  inc: (value) => (value += 1),
  dec: (value) => (value -= 1)
})

function MyComponent({ obj }) {
  const [state, { inc, dec, dispatch }] = useMethodsImmer(counterReducers, 0);

  return <div>
    <button onClick={() => inc()}>inc</button>
    <button onClick={() => dec()}>dec</button>
  </div>;
}

...

// \u6570\u636E\u5F88\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u5728\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u4F7F\u7528immer\u4F1A\u76F4\u89C2\u7B80\u5355\u7684\u591A
// \u4F7F\u7528useMethods
const methods = {
  updateObjB: (prevState,value) => ({
    ...prevState,
    objA: {
        ...prevState?.objA,
        objB: {
            ...prevState?.objA?.objB,
            value: newValue
        },
    },
}),
}
// \u4F7F\u7528useMethodsImmer
const methods = {
  updateObjB: (draftState, newValue) => (draftState.objA.objB.value = newValue),
}`,lang:"javascript"})))});E.default=e=>{var a=u.useContext(n.context),r=a.demos;return u.useEffect(()=>{var o;e!=null&&(o=e.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),u.createElement(F,{demos:r})}}}]);
