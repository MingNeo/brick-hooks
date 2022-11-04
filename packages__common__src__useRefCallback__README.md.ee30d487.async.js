(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4404],{91622:function(r,s,n){"use strict";n.r(s);var e=n(62472),u=n(34019),l=n(94834),o=e.memo(t=>{var c=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"userefcallback"},e.createElement(u.AnchorLink,{to:"#userefcallback","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useRefCallback"),e.createElement("p",null,"\u53EF\u7528\u4E8E\u66FF\u6362\u90E8\u5206\u60C5\u51B5\u4E0B\u7684 React.useCallback\u3002\u8FD4\u56DE\u4E00\u4E2A function\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u51FD\u6570\u5730\u5740\u5728\u7EC4\u4EF6\u4E2D\u4E0D\u4F1A\u53D8\u5316\u3002\u89E3\u51B3 useCallback \u4F9D\u8D56\u503C\u53D8\u5316\u800C\u91CD\u65B0\u751F\u6210\u65B0\u51FD\u6570\u7684\u95EE\u9898\u3002"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(u.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`function MyComponent() {
  // \u4F7F\u7528useRefCallback\uFF0C\u4E0D\u8BBAuseEffect\u4E2Ddeps\u6DFB\u4E0D\u6DFB\u52A0testRefFn\uFF0C\u5BF9\u7ED3\u679C\u90FD\u65E0\u5F71\u54CD\u3002stateA\u53D8\u5316\u4E0D\u4F1A\u66F4\u65B0testRefFn\u5F15\u7528\u56E0\u6B64\u4E5F\u4E0D\u4F1A\u89E6\u53D1useEffect\u6E32\u67D3\uFF0C\u4E14testRefFn\u6240\u6709\u4F9D\u8D56\u7684\u53C2\u6570\u59CB\u7EC8\u4FDD\u6301\u6700\u65B0
  const testRefFn = useRefCallback(() => {
    // ...
  })

  useEffect(() => {
    // \u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u56E0\u4E3AtestRefFn\u5F15\u7528\u5730\u5740\u6C38\u8FDC\u4E0D\u4F1A\u53D8
    testRefFn()
  }, [testRefFn])

  // testRefFn\u4E2D\u4F7F\u7528\u7684\u6240\u6709state\u59CB\u7EC8\u4E3A\u6700\u65B0
  const handleClick = () => testRefFn()

  return <Child>...</Child>
}

// \u5BF9\u7167\uFF1A useCallback
// \u4F7F\u7528useCallback\u65F6\uFF0C stateB\u53D8\u5316\u5C06\u89E6\u53D1testFn\uFF0CtestFn\u4E2D\u4F7F\u7528\u7684stateA\u6709\u53EF\u80FD\u4E0D\u662F\u6700\u65B0\uFF0C\u5982\u679CuseEffect\u7684dep\u4E2D\u6DFB\u52A0testFn\uFF0C\u5219stateA\u53D8\u5316\u5C31\u4F1A\u89E6\u53D1testFn\u6267\u884C\uFF0C\u663E\u7136\u4E5F\u4E0D\u5BF9\u3002
function MyComponent() {
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)

  const testFn = useCallback(() => {
    // ...
  }, [stateA])

  useEffect(() => {
    testFn()
  }, [stateB])

  return <Child>...</Child>
}`,lang:"javascript"})))});s.default=t=>{var c=e.useContext(u.context),E=c.demos;return e.useEffect(()=>{var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(o,{demos:E})}}}]);
