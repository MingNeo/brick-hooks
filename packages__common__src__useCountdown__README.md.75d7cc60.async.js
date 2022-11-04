(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[5788],{73602:function(i,u,e){"use strict";e.d(u,{m:function(){return n.m}});var n=e(67624),t=e(93142)},81026:function(i,u,e){"use strict";e.r(u);var n=e(67294),t=e(36445),d=e(26328),r=e(91485),c=n.memo(o=>{var a=o.demos,m=a["usecountdown-demo"].component;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"usecountdown"},n.createElement(t.AnchorLink,{to:"#usecountdown","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useCountDown"),n.createElement("p",null,"\u5012\u8BA1\u65F6"),n.createElement("h3",{id:"\u6F14\u793A"},n.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),n.createElement(d.default,a["usecountdown-demo"].previewerProps,n.createElement(m,null)),n.createElement("div",{className:"markdown"},n.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},n.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),n.createElement(r.Z,{code:`function useCountDown(options: {
  total?: number // \u5012\u8BA1\u65F6\u65F6\u95F4\uFF0C\u683C\u5F0F\u6BEB\u79D2
  endTime?: number | string // \u7ED3\u675F\u65F6\u95F4\uFF0C\u65F6\u95F4\u6233\u683C\u5F0F \u6216 "yyyy-mm-dd HH:MM:SS"
  format?: string | ((progress: number) => string) // \u5C55\u793A\u7684\u683C\u5F0F\uFF0C\u5982"hh:mm:ss", \u6216\u8FD4\u56DE\u4E00\u4E2A\u6BEB\u79D2\u6570\uFF0C\u81EA\u884C\u683C\u5F0F\u5316
  step?: number // \u5FAA\u73AF\u7684\u65F6\u95F4
  onStart?: () => void
  onStep?: (step: number, formatedProgress: string) => void
  onFinished?: () => void
  autoRun?: boolean
}): {
  start: () => void
  stop: () => void
  day: number
  hour: number
  minutes: number
  seconds: number
  millisecond: number
  status: 'idle' | 'running' | 'pause' | 'resumed' | 'finished'
  endTime: number
  formatedCountdown: string
  countdown: number
}`,lang:"typescript"}),n.createElement("h3",{id:"\u7528\u6CD5"},n.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),n.createElement(r.Z,{code:`function MyComponent() {
  // \u8BBE\u7F6Etotal\u6216endTime\u5176\u4E2D\u4E00\u4E2A\u4F5C\u4E3A\u7ED3\u675F\u65F6\u95F4
  const { formatedCountdown } = useCountDown({ endTime: Date.now() + 1000000, step: 1000 })

  return (
    <div>
      <p>\u8BBE\u7F6E\u6307\u5B9A\u65F6\u95F4\u5012\u8BA1\u65F6</p>
      <p>{formatedCountdown}S</p>
    </div>
  )
}`,lang:"javascript"}),n.createElement("p",null,"\u624B\u5DE5\u63A7\u5236"),n.createElement(r.Z,{code:`function MyComponent() {
  const { formatedCountdown, start } = useCountDown({ total: 5000, format: 's.SS', step: 10, autoRun: false })

  return (
    <div>
      <button onClick={start}>\u6BCF\u6B215\u79D2\u5012\u8BA1\u65F6</button>
      <p>{formatedCountdown}S</p>
    </div>
  )
}`,lang:"javascript"}))))});u.default=o=>{var a=n.useContext(t.context),m=a.demos;return n.useEffect(()=>{var s;o!=null&&(s=o.location)!==null&&s!==void 0&&s.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),n.createElement(c,{demos:m})}}}]);
