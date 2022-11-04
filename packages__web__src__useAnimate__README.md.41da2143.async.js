(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6179],{73602:function(c,o,t){"use strict";t.d(o,{m:function(){return e.m}});var e=t(67624),n=t(93142)},93799:function(c,o,t){"use strict";t.r(o);var e=t(67294),n=t(36445),m=t(26328),u=t(91485),l=e.memo(a=>{var r=a.demos,i=r["useanimate-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useanimate"},e.createElement(n.AnchorLink,{to:"#useanimate","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useAnimate"),e.createElement("p",null,"\u65B9\u4FBF\u5728 web \u4E2D\u4F7F\u7528 animate"),e.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u4F60\u4F7F\u7528 react-native-web \u4E14\u4F7F\u7528 brick-hooks-native\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 brickHooksNative.useAnimate\uFF0C\u65E0\u9700\u66F4\u6362\u9002\u914D\u3002"),e.createElement("p",null,"brickHooksNative.useAnimate \u57FA\u4E8E react-native-web \u7684 animated \u800C\u975E css\uFF0C\u5185\u7F6E easing \u8981\u4E30\u5BCC\u4E00\u4E9B\u4E14\u652F\u6301\u81EA\u5B9A\u4E49\u51FD\u6570\u3002\u5176\u4ED6\u7528\u6CD5\u4E0E\u672C hook \u57FA\u672C\u4E00\u81F4\u3002"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(n.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(m.default,r["useanimate-demo"].previewerProps,e.createElement(i,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(u.Z,{code:`function useAnimate(options: {
  from?: Record<string, any>[]
  to?: Record<string, any> \uFF5C Record<string, any>[]
  range?: number[] // \u5173\u952E\u5E27\u533A\u95F4\uFF0C\u4E0E[from, to]\u5BF9\u5E94\uFF0C\u9ED8\u8BA4\u4E3A[0, 1]\uFF0C\u5F53to\u4E3A\u6570\u7EC4\u65F6, \u5BF9\u5E94[from, ...to]\uFF0C\u5982\uFF1A[0, 0.7, 1]\uFF0C\u9ED8\u8BA4\u4E3A\u5747\u5206
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease' | 'in' | 'out' | 'inOut'
  autoRun?: boolean // \u4E3Atrue\u65F6\u7EC4\u4EF6\u52A0\u8F7D\u81EA\u52A8\u6267\u884C\u52A8\u753B\uFF0C\u4E3Afalse\u5219\u4F7F\u7528start\u65B9\u6CD5\u4E3B\u52A8\u89E6\u53D1\u52A8\u753B
  shouldReset?: boolean
  keyframesName?: string // \u4F7F\u7528\u6307\u5B9Akeyframes\uFF0C\u4F7F\u7528css\u6837\u5F0F\u8868\u4E2D\u5DF2\u6709\u7684keyframes\uFF0C\u8BBE\u7F6E\u8FD9\u4E2A\u503C\u4E4B\u540Efrom\u3001to\u3001range\u65E0\u6548
}): [Record<string, any>, {
  start: (options: { reverse?: boolean; }) => void;
  reset: () => void;
}]`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement("h4",{id:"\u57FA\u672C\u4F7F\u7528"},e.createElement(n.AnchorLink,{to:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u4F7F\u7528"),e.createElement(u.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    autoRun: false,
  })

  return (
    <div>
      <div style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </div>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u7528\u6CD5-keyframesname-\u6307\u5B9A\u5DF2\u6709-css"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5-keyframesname-\u6307\u5B9A\u5DF2\u6709-css","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5 keyframesName \u6307\u5B9A\u5DF2\u6709 css"),e.createElement(u.Z,{code:`/* index.css */
@keyframes test {
  0% {
    opacity: 0.8;
    transform: rotateZ(0deg);
  }
  100% {
    opacity: 0.8;
    transform: rotateZ(25deg);
  }
}`,lang:"css"}),e.createElement(u.Z,{code:`function MyComponent() {
  const [styleProps] = useAnimate({
    keyframesName: 'test',
    duration: 1000,
  })

  return <div style={{ ...baseStyle, ...styleProps }} />
}`,lang:"javascript"}),e.createElement("h4",{id:"\u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u5EF6\u8FDF\u65F6\u95F4\u7B49"},e.createElement(n.AnchorLink,{to:"#\u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u5EF6\u8FDF\u65F6\u95F4\u7B49","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570\u3001\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u3001\u5EF6\u8FDF\u65F6\u95F4\u7B49"),e.createElement(u.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    loop: 2, // -1\u5219\u65E0\u9650\u5FAA\u73AF
    duration: 500,
    delay: 1000,
  })

  return (
    <div>
      <div style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </div>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u8BBE\u7F6E\u66F2\u7EBF"},e.createElement(n.AnchorLink,{to:"#\u8BBE\u7F6E\u66F2\u7EBF","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u8BBE\u7F6E\u66F2\u7EBF"),e.createElement("p",null,"'linear', 'ease', 'in', 'out', 'inOut'"),e.createElement(u.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    easing: 'bounce',
    // \u7B49\u540C\u4E8E
    easing: Easing.bounce,
  })

  return <div style={{ ...baseStyle, ...styleProps }} />
}`,lang:"javascript"}),e.createElement("h4",{id:"\u8BBE\u7F6E\u591A\u4E2A-keyframe"},e.createElement(n.AnchorLink,{to:"#\u8BBE\u7F6E\u591A\u4E2A-keyframe","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u8BBE\u7F6E\u591A\u4E2A keyframe"),e.createElement(u.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: [
      { opacity: 1, marginLeft: 500, width: 200, height: 200 },
      { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    ],
    range: [0, 0.7, 1], // from\u3001to[0]\u3001to[1] \u5206\u522B\u5BF9\u5E940%, 70%, 100%keyframe\uFF0C\u53EF\u4E0D\u586B\uFF0C\u5219\u4E3A\u5747\u5206\u6BCF\u4E2Akeyframe
    duration: 1000,
    autoRun: false,
  })

  return (
    <div>
      <div style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </div>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u7528\u6CD5-transform"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5-transform","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5 transform"),e.createElement(u.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50, tansform: 'rotateZ: (0deg)' },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200, tansform: 'rotateZ: (200deg)' },
    duration: 1000,
    autoRun: true,
  })

  return (
    <div>
      <div style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </div>
  )
}`,lang:"javascript"}))))});o.default=a=>{var r=e.useContext(n.context),i=r.demos;return e.useEffect(()=>{var s;a!=null&&(s=a.location)!==null&&s!==void 0&&s.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.createElement(l,{demos:i})}}}]);
