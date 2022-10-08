## useAnimate

方便在 web 中使用 animate

注：如果你使用 react-native-web 且使用 brick-hooks-native，那么可以直接使用 brickHooksNative.useAnimate，无需更换适配。

brickHooksNative.useAnimate 基于 react-native-web 的 animated 而非 css，内置 easing 要丰富一些且支持自定义函数。其他用法与本 hook 基本一致。

### 类型声明

```typescript
function useAnimate(options: {
  from?: Record<string, any>[]
  to?: Record<string, any> ｜ Record<string, any>[]
  range?: number[] // 关键帧区间，与[from, to]对应，默认为[0, 1]，当to为数组时, 对应[from, ...to]，如：[0, 0.7, 1]，默认为均分
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease' | 'in' | 'out' | 'inOut'
  autoRun?: boolean // 为true时组件加载自动执行动画，为false则使用start方法主动触发动画
  shouldReset?: boolean
  keyframesName?: string // 使用指定keyframes，使用css样式表中已有的keyframes，设置这个值之后from、to、range无效
}): [any, { start: any; reset: any; animatedValue: any; }]
```

### 用法

#### 基本使用

```javascript
function MyComponent() {
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
}
```

#### 用法 keyframesName 指定已有 css

```css
/* index.css */
@keyframes test {
  0% {
    opacity: 0.8;
    transform: rotateZ(0deg);
  }
  100% {
    opacity: 0.8;
    transform: rotateZ(25deg);
  }
}
```

```javascript
function MyComponent() {
  const [styleProps] = useAnimate({
    keyframesName: 'test',
    duration: 1000,
  })

  return <div style={{ ...baseStyle, ...styleProps }} />
}
```

#### 设置循环次数、动画持续时间、延迟时间等

```javascript
function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    loop: 2, // -1则无限循环
    duration: 500,
    delay: 1000,
  })

  return (
    <div>
      <div style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </div>
  )
}
```

#### 设置曲线

'linear', 'ease', 'in', 'out', 'inOut'

```javascript
function MyComponent() {
  const [styleProps, { start }] = useAnimate({
    from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
    to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
    easing: 'bounce',
    // 等同于
    easing: Easing.bounce,
  })

  return <div style={{ ...baseStyle, ...styleProps }} />
}
```

#### 设置多个 keyframe

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
    autoRun: false,
  })

  return (
    <div>
      <div style={{ ...baseStyle, ...styleProps }} />
      <Button onClick={() => start()}>Start</Button>
    </div>
  )
}
```

#### 用法 transform

```javascript
function MyComponent() {
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
}
```
