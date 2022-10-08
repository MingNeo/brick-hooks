(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4404],{98866:function(r,s,u){"use strict";u.r(s);var e=u(67294),n=u(36445),l=u(91485),o=e.memo(t=>{var c=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"userefcallback"},e.createElement(n.AnchorLink,{to:"#userefcallback","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useRefCallback"),e.createElement("p",null,"\u53EF\u7528\u4E8E\u66FF\u6362\u90E8\u5206\u60C5\u51B5\u4E0B\u7684 React.useCallback\u3002\u8FD4\u56DE\u4E00\u4E2A function\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u51FD\u6570\u5730\u5740\u5728\u7EC4\u4EF6\u4E2D\u4E0D\u4F1A\u53D8\u5316\u3002\u89E3\u51B3 useCallback \u4F9D\u8D56\u503C\u53D8\u5316\u800C\u91CD\u65B0\u751F\u6210\u65B0\u51FD\u6570\u7684\u95EE\u9898\u3002"),e.createElement(l.Z,{code:`function MyComponent() {
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)

  const testFn = useCallback(() => {
    // ...
  }, [stateA])

  // \u5F53\u4F9D\u8D56\u5176\u4ED6\u7684\u503C\u89E6\u53D1testFn\u7684\u65F6\u5019\uFF0C\u5982\u679Cdeps\u91CC\u4E0D\u52A0testFn\uFF0C\u5219testFn\u4E2Dstate\u6709\u53EF\u80FD\u4E0D\u662F\u6700\u65B0\uFF0C\u5982\u679C\u6DFB\u52A0testFn\uFF0C\u5219stateA\u53D8\u5316\u5C31\u4F1A\u89E6\u53D1testFn\u6267\u884C\uFF0C\u663E\u7136\u4E5F\u4E0D\u5BF9\u3002
  useEffect(() => {
    testFn()
  }, [stateB])

  // \u4F7F\u7528useRefCallback\u5219\u65E0\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E0D\u8BBAuseEffect\u4E2Ddeps\u6DFB\u4E0D\u6DFB\u52A0testRefFn\uFF0C\u5BF9\u7ED3\u679C\u90FD\u65E0\u5F71\u54CD\u3002stateA\u53D8\u5316\u4E0D\u4F1A\u66F4\u65B0testRefFn\u5F15\u7528\u56E0\u6B64\u4E5F\u4E0D\u4F1A\u89E6\u53D1useEffect\u6E32\u67D3\u3002
  const testRefFn = useRefCallback(() => {
    // ...
  })

  useEffect(() => {
    testRefFn()
  }, [stateB])

  return <Child>...</Child>
}`,lang:"javascript"})))});s.default=t=>{var c=e.useContext(n.context),E=c.demos;return e.useEffect(()=>{var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(o,{demos:E})}}}]);
