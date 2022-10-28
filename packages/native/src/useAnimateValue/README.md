---
nav:
  path: /native
---

## useAnimateValue

方便使用 react-native Animated

### 类型声明

```typescript
function useAnimateValue(options: {
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
    | ((value: number) => number) // 曲线函数，使用ReactNative.Animated的Easing函数
  isInteraction?: boolean
  useNativeDriver?: boolean
  autoRun?: boolean // 为true时组件加载自动执行动画，为false则使用start方法主动触发动画
  shouldReset?: boolean
}): {
  animatedValue: any
  animation: Animated.CompositeAnimation
  start: () => void
  reset: () => void
  interpolate: ({ inputRange, outputRange, ...config }: any) => Animated.AnimatedInterpolation
}
```

### 用法

```javascript
import { View, Animated } from 'react-native'
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
}
```
