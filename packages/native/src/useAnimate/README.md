## useAnimate

方便使用 react-native Animated

```typescript
function useAnimate(options: {
  from: Record<string, any>[]
  to: Record<string, any> ｜ Record<string, any>[]
  range?: number[] // 关键帧区间，与[from, to]对应，默认为[0, 1]，当to为数组时, 对应[from, ...to]，如：[0, 0.7, 1]，默认为均分
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease' | 'quad' | 'cubic' | 'sin' | 'circle' | 'exp' | 'bounce' | 'in' | 'out' | 'inOut' | ((value: number) => number) // 曲线函数，使用ReactNative.Animated的Easing函数
  isInteraction?: boolean
  useNativeDriver?: boolean
  autoRun?: boolean // 为true时组件加载自动执行动画，为false则使用start方法主动触发动画
  shouldReset?: boolean
}): [any, { start: any; reset: any; animatedValue: any; }]
```

#### 使用
```javascript
function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50},
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    autoRun: true
  })

  return <Animated.View style={{ ...baseStyle, ...styleProps }} />
}
```

#### 设置循环次数、动画持续时间、延迟时间、手动触发等
```javascript
import { Easing, View } from "react-native";
function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50},
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    loop: 2, // -1则无限循环
    duration: 500,
    delay: 1000
  })

  return (
    <View>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </View>
  )
}
```

#### 设置曲线

```typescript
type easing = 'linear'| 'ease'|'quad'|'cubic'|'sin'|'circle'|'exp'|'bounce'|'in'| 'out'| 'inOut' | ((...any[]) => any);
```
使用内置曲线，或自定义曲线函数(可直接使用react-native的Easing)
```javascript
function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50},
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    easing: 'bounce',
    // 等同于
    easing: Easing.bounce
  })

  return <Animated.View style={{ ...baseStyle, ...styleProps }} />
}
```

#### 设置多个keyframe
```javascript
function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: [
      { opacity: 1, marginLeft: 500, width: 200, height: 200 },
      { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    ],
    range: [0, 0.7, 1], // from、to[0]、to[1] 分别对应0%, 70%, 100%keyframe，可不填，则为均分每个keyframe
    duration: 1000,
    autoRun: true,
  })

  return (
    <View>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </View>
  )
}
```

#### 使用transform
基本上大多数的样式都可以直接像编写React-native组件中的style一样使用，但是transform例外。
以下transform-functions直接使用，无需类似{ transform: [{ rotateX: 0 }, { scale: 2}] } 这样使用
matrix、perspective、rotate、rotateX、rotateY、rotateZ、scale、scaleX、scaleY、translateX、translateY、skewX、skewY

```javascript
function MyComponent() {
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
}
```