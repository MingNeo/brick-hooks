(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4037],{73250:function(i,a,u){"use strict";u.r(a);var e=u(62472),t=u(34019),o=u(94834),r=e.memo(n=>{var l=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useeffectmaunal"},e.createElement(t.AnchorLink,{to:"#useeffectmaunal","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useEffectMaunal"),e.createElement("p",null,"\u540C useEffect\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u4E0D\u901A\u8FC7 deps \u8FDB\u884C\u89E6\u53D1, \u800C\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u66F4\u65B0\u51FD\u6570\u89E6\u53D1 effect callback\u3002\u4E3B\u8981\u5E94\u7528\u4E8E\u9700\u8981\u4F7F\u7528 useEffect \u7684 destory \u8FD4\u56DE\u51FD\u6570\u7684\u60C5\u51B5\u3002 callEffect \u81EA\u52A8\u4FDD\u6301\u6700\u65B0\uFF0C\u65E0\u9700\u4F20\u9012 args"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(o.Z,{code:`function MyComponent() {
  const callEffect = useEffectMaunal(() => {
    const timer = setTimeout(() => {
      // ...
    })

    return () => {
      clearTimeout(timer)
    }
  })

  return <Child onClick={callEffect}>...</Child>
}

// \u7B49\u540C\u4E8E
function MyComponent() {
  const timerRef = useRef()
  const callEffect = useCallback(() => {
    const timer = setTimeout(() => {
      // ...
    })
  }, [])

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  return <Child onClick={callEffect}>...</Child>
}`,lang:"javascript"})))});a.default=n=>{var l=e.useContext(t.context),s=l.demos;return e.useEffect(()=>{var c;n!=null&&(c=n.location)!==null&&c!==void 0&&c.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(r,{demos:s})}}}]);
