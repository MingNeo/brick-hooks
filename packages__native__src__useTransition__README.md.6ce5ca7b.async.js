(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6134],{87443:function(c,a,o){"use strict";o.r(a);var e=o(62472),n=o(34019),i=o(94834),l=e.memo(t=>{var r=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usetransition"},e.createElement(n.AnchorLink,{to:"#usetransition","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useTransition"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 react-native Animated \u6765\u5B9E\u73B0\u8FC7\u6E21\u6548\u679C"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(i.Z,{code:`function useTransition(options: {
  from: Record<string, any>[]
  to: Record<string, any> \uFF5C Record<string, any>[],
  reverse: boolean,
  range?: number[] // \u5173\u952E\u5E27\u533A\u95F4\uFF0C\u4E0E[from, to]\u5BF9\u5E94\uFF0C\u9ED8\u8BA4\u4E3A[0, 1]\uFF0C\u5F53to\u4E3A\u6570\u7EC4\u65F6, \u5BF9\u5E94[from, ...to]\uFF0C\u5982\uFF1A[0, 0.7, 1]\uFF0C\u9ED8\u8BA4\u4E3A\u5747\u5206
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease' | 'quad' | 'cubic' | 'sin' | 'circle' | 'exp' | 'bounce' | 'in' | 'out' | 'inOut' | ((value: number) => number) // \u66F2\u7EBF\u51FD\u6570\uFF0C\u4F7F\u7528ReactNative.Animated\u7684Easing\u51FD\u6570
  isInteraction?: boolean
  useNativeDriver?: boolean
  shouldReset?: boolean
}): [any]`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(i.Z,{code:`function MyComponent() {
  const [visible, toggleVisible] = useToggle(true)
  const [style] = useTransition({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    loop: 1,
    duration: 300,
    autoRun: true,
    reverse: !visible,
  })

  return (
    <>
      <Animated.View style={{ backgroundColor: 'powderblue', ...style }} />
      <Button onClick={() => toggleVisible()}>Fade {visible ? 'Out' : 'In'}</Button>
    </>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u5728\u4E24\u4E2A\u7EC4\u4EF6\u4E2D\u5207\u6362"},e.createElement(n.AnchorLink,{to:"#\u5728\u4E24\u4E2A\u7EC4\u4EF6\u4E2D\u5207\u6362","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u5728\u4E24\u4E2A\u7EC4\u4EF6\u4E2D\u5207\u6362"),e.createElement(i.Z,{code:`function MyComponent() {
  const [visible, toggleVisible] = useToggle(true)
  const from = { opacity: 0, width: 50, height: 50 }
  const to = { opacity: 1, width: 50, height: 50 }
  const [style] = useTransition({
    from: visible ? from : to,
    to: visible ? to : from,
    loop: 1,
    duration: 3000,
    autoRun: true,
    reverse: !visible,
  })

  return (
    <>
      {visible ? (
        <Animated.View style={{ ...style, backgroundColor: 'powderblue' }}>
          <View style={{ fontSize: 40 }}>\u{1F604}</View>
        </Animated.View>
      ) : (
        <Animated.View style={{ ...style, backgroundColor: 'red' }}>
          <View style={{ fontSize: 40 }}>\u{1F92A}</View>
        </Animated.View>
      )}
      <Button onClick={() => toggleVisible()}>toggle</Button>
    </>
  )
}`,lang:"javascript"}),e.createElement("h4",{id:"\u7EC4\u5408\u591A\u4E2A\u8FC7\u6E21\u52A8\u753B"},e.createElement(n.AnchorLink,{to:"#\u7EC4\u5408\u591A\u4E2A\u8FC7\u6E21\u52A8\u753B","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7EC4\u5408\u591A\u4E2A\u8FC7\u6E21\u52A8\u753B"),e.createElement(i.Z,{code:`function MyComponent() {
  const [visible, toggleVisible] = useToggle(true)
  const [compAStyle] = useTransition({
    from: { opacity: 0, left: 0, width: 400, height: 0 },
    to: { opacity: 1, width: 400, height: 400 },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible,
  })

  const [compBStyle] = useTransition({
    from: { opacity: 0, top: 0, left: 400, width: 50, height: 50 },
    to: { opacity: 1, left: 0, width: 200, height: 200 },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible,
  })

  return (
    <>
      <View style={{ position: 'relative', height: 450 }}>
        <Animated.View style={{ position: 'absolute', backgroundColor: 'powderblue', ...compAStyle }} />
        <Animated.View style={{ position: 'absolute', backgroundColor: 'red', ...compBStyle }} />
      </View>
      <Button onClick={() => toggleVisible()}>toggle</Button>
    </>
  )
}`,lang:"javascript"})))});a.default=t=>{var r=e.useContext(n.context),s=r.demos;return e.useEffect(()=>{var u;t!=null&&(u=t.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(l,{demos:s})}}}]);
