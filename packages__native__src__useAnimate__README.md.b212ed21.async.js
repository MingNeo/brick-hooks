(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[9328],{27578:function(l,r,a){"use strict";a.r(r);var e=a(62472),n=a(34019),t=a(94834),c=e.memo(u=>{var o=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useanimate"},e.createElement(n.AnchorLink,{to:"#useanimate","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useAnimate"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 react-native Animated"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(t.Z,{code:`function useAnimate(options: {
  from: Record<string, any>[]
  to: Record<string, any> \uFF5C Record<string, any>[]
  range?: number[] // \u5173\u952E\u5E27\u533A\u95F4\uFF0C\u4E0E[from, to]\u5BF9\u5E94\uFF0C\u9ED8\u8BA4\u4E3A[0, 1]\uFF0C\u5F53to\u4E3A\u6570\u7EC4\u65F6, \u5BF9\u5E94[from, ...to]\uFF0C\u5982\uFF1A[0, 0.7, 1]\uFF0C\u9ED8\u8BA4\u4E3A\u5747\u5206
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease' | 'quad' | 'cubic' | 'sin' | 'circle' | 'exp' | 'bounce' | 'in' | 'out' | 'inOut' | ((value: number) => number) // \u66F2\u7EBF\u51FD\u6570\uFF0C\u4F7F\u7528ReactNative.Animated\u7684Easing\u51FD\u6570
  isInteraction?: boolean
  useNativeDriver?: boolean
  autoRun?: boolean // \u4E3Atrue\u65F6\u7EC4\u4EF6\u52A0\u8F7D\u81EA\u52A8\u6267\u884C\u52A8\u753B\uFF0C\u4E3Afalse\u5219\u4F7F\u7528start\u65B9\u6CD5\u4E3B\u52A8\u89E6\u53D1\u52A8\u753B
  shouldReset?: boolean
}): [any, { start: any; reset: any; animatedValue: any; }]`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(t.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    autoRun: true,
  })

  return <Animated.View style={{ ...baseStyle, ...styleProps }} />
}`,lang:"javascript"}),e.createElement("h4",{id:"\u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u5EF6\u8FDF\u65F6\u95F4\u624B\u52A8\u89E6\u53D1\u7B49"},e.createElement(n.AnchorLink,{to:"#\u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u5EF6\u8FDF\u65F6\u95F4\u624B\u52A8\u89E6\u53D1\u7B49","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u8BBE\u7F6E\u5FAA\u73AF\u6B21\u6570\u3001\u52A8\u753B\u6301\u7EED\u65F6\u95F4\u3001\u5EF6\u8FDF\u65F6\u95F4\u3001\u624B\u52A8\u89E6\u53D1\u7B49"),e.createElement(t.Z,{code:`import { Easing, View, Animated } from 'react-native'
import { useAnimate } from 'brick-hooks-native'

function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    loop: 2, // -1\u5219\u65E0\u9650\u5FAA\u73AF
    duration: 500,
    delay: 1000,
  })

  return (
    <View>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </View>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u8BBE\u7F6E\u66F2\u7EBF"},e.createElement(n.AnchorLink,{to:"#\u8BBE\u7F6E\u66F2\u7EBF","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u8BBE\u7F6E\u66F2\u7EBF"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E-1"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E-1","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(t.Z,{code:"type easing = 'linear'| 'ease'|'quad'|'cubic'|'sin'|'circle'|'exp'|'bounce'|'in'| 'out'| 'inOut' | ((...any[]) => any);",lang:"typescript"}),e.createElement("p",null,"\u4F7F\u7528\u5185\u7F6E\u66F2\u7EBF\uFF0C\u6216\u81EA\u5B9A\u4E49\u66F2\u7EBF\u51FD\u6570(\u53EF\u76F4\u63A5\u4F7F\u7528 react-native \u7684 Easing)"),e.createElement(t.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    easing: 'bounce',
    // \u7B49\u540C\u4E8E
    easing: Easing.bounce,
  })

  return <Animated.View style={{ ...baseStyle, ...styleProps }} />
}`,lang:"javascript"}),e.createElement("h4",{id:"\u8BBE\u7F6E\u591A\u4E2A-keyframe"},e.createElement(n.AnchorLink,{to:"#\u8BBE\u7F6E\u591A\u4E2A-keyframe","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u8BBE\u7F6E\u591A\u4E2A keyframe"),e.createElement(t.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: [
      { opacity: 1, marginLeft: 500, width: 200, height: 200 },
      { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    ],
    range: [0, 0.7, 1], // from\u3001to[0]\u3001to[1] \u5206\u522B\u5BF9\u5E940%, 70%, 100%keyframe\uFF0C\u53EF\u4E0D\u586B\uFF0C\u5219\u4E3A\u5747\u5206\u6BCF\u4E2Akeyframe
    duration: 1000,
    autoRun: true,
  })

  return (
    <View>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </View>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u7528\u6CD5-transform"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5-transform","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5 transform"),e.createElement("p",null,"\u57FA\u672C\u4E0A\u5927\u591A\u6570\u7684\u6837\u5F0F\u90FD\u53EF\u4EE5\u76F4\u63A5\u50CF\u7F16\u5199 React-native \u7EC4\u4EF6\u4E2D\u7684 style \u4E00\u6837\u4F7F\u7528\uFF0C\u4F46\u662F transform \u4F8B\u5916\u3002\u4EE5\u4E0B transform-functions \u76F4\u63A5\u4F7F\u7528\uFF0C\u65E0\u9700\u7C7B\u4F3C","{"," transform: [","{"," rotateX: 0 ","}",", ","{"," scale: 2","}","] ","}"," \u8FD9\u6837\u4F7F\u7528 matrix\u3001perspective\u3001rotate\u3001rotateX\u3001rotateY\u3001rotateZ\u3001scale\u3001scaleX\u3001scaleY\u3001translateX\u3001translateY\u3001skewX\u3001skewY"),e.createElement(t.Z,{code:`function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50, rotateZ: '0deg', scale: 0 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200, rotateZ: '200deg', scale: 2 },
    duration: 1000,
    autoRun: true,
  })

  return (
    <View>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </View>
  )
}`,lang:"javascript"})))});r.default=u=>{var o=e.useContext(n.context),s=o.demos;return e.useEffect(()=>{var i;u!=null&&(i=u.location)!==null&&i!==void 0&&i.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(c,{demos:s})}}}]);
