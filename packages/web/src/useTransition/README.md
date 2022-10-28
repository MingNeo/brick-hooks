---
nav:
  path: /web
---

## useTransition

方便实现过渡效果

### 演示

<code src="./demo.tsx" iframe="true"></code>

### 类型声明

```typescript
function useTransition(options: {
  from: Record<string, any>[]
  to: Record<string, any> ｜ Record<string, any>[],
  reverse: boolean,
  range?: number[] // 关键帧区间，与[from, to]对应，默认为[0, 1]，当to为数组时, 对应[from, ...to]，如：[0, 0.7, 1]，默认为均分
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease' | 'quad' | 'cubic' | 'sin' | 'circle' | 'exp' | 'bounce' | 'in' | 'out' | 'inOut' // 曲线函数
  isInteraction?: boolean
  useNativeDriver?: boolean
  shouldReset?: boolean
}): [any]
```

### 用法

```javascript
function MyComponent() {
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
      <div style={{ backgroundColor: 'powderblue', ...style }} />
      <Button onClick={() => toggleVisible()}>Fade {visible ? 'Out' : 'In'}</Button>
    </>
  )
}
```

#### 在两个组件中切换

```javascript
function MyComponent() {
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
        <div style={{ ...style, backgroundColor: 'powderblue' }}>
          <View style={{ fontSize: 40 }}>😄</View>
        </Animated.View>
      ) : (
        <div style={{ ...style, backgroundColor: 'red' }}>
          <View style={{ fontSize: 40 }}>🤪</View>
        </Animated.View>
      )}
      <Button onClick={() => toggleVisible()}>toggle</Button>
    </>
  )
}
```

#### 组合多个过渡动画

```javascript
function MyComponent() {
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
        <div style={{ position: 'absolute', backgroundColor: 'powderblue', ...compAStyle }} />
        <div style={{ position: 'absolute', backgroundColor: 'red', ...compBStyle }} />
      </View>
      <Button onClick={() => toggleVisible()}>toggle</Button>
    </>
  )
}
```
