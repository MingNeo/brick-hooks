(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4399],{73602:function(m,o,e){"use strict";e.d(o,{m:function(){return n.m}});var n=e(67624),t=e(93142)},1505:function(m,o,e){"use strict";e.r(o);var n=e(67294),t=e(36445),i=e(26328),r=e(91485),l=n.memo(u=>{var a=u.demos,s=a["usecountup-demo"].component;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"usecountup"},n.createElement(t.AnchorLink,{to:"#usecountup","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useCountUp"),n.createElement("p",null,"\u8BA1\u65F6"),n.createElement("h3",{id:"\u6F14\u793A"},n.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),n.createElement(i.default,a["usecountup-demo"].previewerProps,n.createElement(s,null)),n.createElement("div",{className:"markdown"},n.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},n.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),n.createElement(r.Z,{code:`interface CountupProps {
  format?: string | ((progress: number) => string) // \u5C55\u793A\u7684\u683C\u5F0F
  step?: number // \u5FAA\u73AF\u7684\u65F6\u95F4
  onStart?: () => void
  onStep?: (countup: number, formatedCountup: string) => void
  onFinished?: (countup: number, formatedCountup: string) => void
  autoRun?: boolean
  maxLength?: number // \u6700\u957F\u65F6\u95F4,\u683C\u5F0F\u6BEB\u79D2,\u8D85\u8FC7\u65F6\u6839\u636EloopWhenEnd\u8FDB\u884C\u91CD\u7F6E\u6216\u505C\u6B62\u8BA1\u65F6
  loopWhenEnd?: boolean // \u662F\u5426\u5FAA\u73AF\u8BA1\u65F6\uFF0C\u503C\u4E3Atrue\u65F6\u8BA1\u65F6\u7ED3\u675F\u65F6\u81EA\u52A8\u4ECE0\u91CD\u65B0\u5F00\u59CB\u8BA1\u65F6, \u5426\u5219\u505C\u6B62
}
function useCountup(options: CountupProps): {
  status: string
  formatedCountup: string
  countup: number
  start: () => void
  stop: (reset?: any) => void
  reset: () => void
  getCurrentCountup: (startTime: any) => {
    countup: number
    formatedCountup: string
  }
}`,lang:"typescript"}),n.createElement("h3",{id:"\u7528\u6CD5"},n.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),n.createElement(r.Z,{code:`function MyComponent() {
  const { formatedCountup } = useCountDown({ maxLength: 1000000, step: 1000 })

  return <p>{formatedCountup}S</p>
}`,lang:"javascript"}),n.createElement("p",null,"\u624B\u5DE5\u63A7\u5236"),n.createElement(r.Z,{code:`function MyComponent() {
  const { formatedCountup, start } = useCountDown({ maxLength: 1000000, format: 's.SS', step: 10, autoRun: false })

  return (
    <div>
      <button onClick={start}>\u6BCF\u6B215\u79D2\u8BA1\u65F6</button>
      <p>{formatedCountup}S</p>
    </div>
  )
}`,lang:"javascript"}))))});o.default=u=>{var a=n.useContext(t.context),s=a.demos;return n.useEffect(()=>{var c;u!=null&&(c=u.location)!==null&&c!==void 0&&c.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),n.createElement(l,{demos:s})}}}]);
