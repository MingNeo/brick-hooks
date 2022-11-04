(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3786],{73299:function(c,i,a){"use strict";a.r(i);var n=a(62472),t=a(34019),u=a(94834),l=n.memo(e=>{var r=e.demos;return n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"useanimatevalue"},n.createElement(t.AnchorLink,{to:"#useanimatevalue","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useAnimateValue"),n.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 react-native Animated"),n.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},n.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),n.createElement(u.Z,{code:`function useAnimateValue(options: {
  from: number
  to: number
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?:
    | 'linear'
    | 'ease'
    | 'quad'
    | 'cubic'
    | 'sin'
    | 'circle'
    | 'exp'
    | 'bounce'
    | 'in'
    | 'out'
    | 'inOut'
    | ((value: number) => number) // \u66F2\u7EBF\u51FD\u6570\uFF0C\u4F7F\u7528ReactNative.Animated\u7684Easing\u51FD\u6570
  isInteraction?: boolean
  useNativeDriver?: boolean
  autoRun?: boolean // \u4E3Atrue\u65F6\u7EC4\u4EF6\u52A0\u8F7D\u81EA\u52A8\u6267\u884C\u52A8\u753B\uFF0C\u4E3Afalse\u5219\u4F7F\u7528start\u65B9\u6CD5\u4E3B\u52A8\u89E6\u53D1\u52A8\u753B
  shouldReset?: boolean
}): {
  animatedValue: any
  animation: Animated.CompositeAnimation
  start: () => void
  reset: () => void
  interpolate: ({ inputRange, outputRange, ...config }: any) => Animated.AnimatedInterpolation
}`,lang:"typescript"}),n.createElement("h3",{id:"\u7528\u6CD5"},n.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),n.createElement(u.Z,{code:`import { View, Animated } from 'react-native'
import { useAnimate } from 'brick-hooks-native'

function MyComponent() {
  const { animatedValue, interpolate, start, reset } = useAnimateValue({
    from: 0,
    to: 1,
    loop: 1,
    duration: 1000,
    autoRun: true,
    // delay: 100
  })

  const style = {
    opacity: animatedValue,
    transform: [
      {
        scale: interpolate({
          inputRange: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          outputRange: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        }),
      },
    ],
  }

  return (
    <Animated.View
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'powderblue',
        ...style,
      }}
    />
  )
}`,lang:"javascript"})))});i.default=e=>{var r=n.useContext(t.context),m=r.demos;return n.useEffect(()=>{var o;e!=null&&(o=e.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),n.createElement(l,{demos:m})}}}]);
