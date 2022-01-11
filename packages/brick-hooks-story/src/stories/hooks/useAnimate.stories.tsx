import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { Animated, Easing } from 'react-native'
import useAnimate from 'brick-hooks-native/src/useAnimate'

const baseStyle = {
  width: 50,
  height: 50,
  backgroundColor: 'powderblue',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

storiesOf('useAnimate', module)
  .add('default', () => {
    const [styleProps, { start }] = useAnimate({
      from: { opacity: 0, marginLeft: 0, width: 50, height: 50, rotateZ: '0deg' },
      to: { opacity: 1, marginLeft: 500, width: 200, height: 200, rotateZ: '200deg' },
    })

    return (
      <>
        <Animated.View style={{ ...baseStyle, ...styleProps }} />
        <div>
          <Button onClick={() => start()}>Start</Button>
        </div>
      </>
    )
  })
  .add('设置duration、autoRun、delay、easing', () => {
    const [styleProps, { start, interpolate }] = useAnimate({
      from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
      to: { opacity: 1, marginLeft: 500, width: 200, height: 200 },
      duration: 500,
      autoRun: false,
      delay: 100,
      // easing: Easing.bounce,
      easing: 'bounce',
      // easing: 'linear',
      // easing: 'ease',
      // easing: 'quad',
      // easing: 'cubic',
      // easing: 'sin',
      // easing: 'circle',
      // easing: 'exp',
      // easing: 'in',
      // easing: 'out',
      // easing: 'inOut',
    })

    return (
      <>
        <Animated.View style={{ ...baseStyle, ...styleProps }} />
        <Animated.Text>{interpolate({ outputRange: [0, 100] })}</Animated.Text>
        <div>
          <Button onClick={() => start()}>Start</Button>
        </div>
      </>
    )
  })
  .add('多个 keyframe', () => {
    const [styleProps, { start }] = useAnimate({
      from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
      to: [
        { opacity: 1, marginLeft: 500, width: 200, height: 200 },
        { opacity: 0, marginLeft: 0, width: 50, height: 50 },
      ],
      loop: 1,
      duration: 1000,
    })

    return (
      <>
        <Animated.View style={{ ...baseStyle, ...styleProps }} />
        <div>
          <Button onClick={() => start()}>Start</Button>
        </div>
      </>
    )
  })
  .add('使用 range 自定义 keyframe', () => {
    const [styleProps, { start }] = useAnimate({
      from: { opacity: 0, marginLeft: 0, width: 50, height: 50 },
      range: [0, 0.2, 0.8, 1],
      to: [
        { opacity: 1, marginLeft: 500, width: 200, height: 200 },
        { opacity: 1, marginLeft: 500, width: 200, height: 200 },
        { opacity: 0, marginLeft: 0, width: 50, height: 50 },
      ],
      loop: 1,
      duration: 1000,
    })

    return (
      <>
        <Animated.View style={{ ...baseStyle, ...styleProps }} />
        <div>
          <Button onClick={() => start()}>Start</Button>
        </div>
      </>
    )
  })
  .add('loop', () => {
    const [styleProps] = useAnimate({
      from: { opacity: 1, backgroundColor: '#ffaaee' },
      to: [
        { opacity: 1, backgroundColor: '#ffaaee' },
        { opacity: 0, backgroundColor: 'rgb(14,26,19)' },
      ],
      loop: -1,
      duration: 1000,
    })

    return <Animated.View style={{ ...baseStyle, ...styleProps }} />
  })
  .add('使用 animatedValue interpolate', () => {
    const [styleProps, { start, animatedValue, interpolate }] = useAnimate({
      from: { width: 50, height: 50 },
      range: [0, 0.7, 1],
      to: [
        { width: 200, height: 200 },
        { width: 50, height: 50 },
      ],
      loop: 1,
      duration: 1000,
      delay: 100,
    })

    return (
      <>
        <Animated.View
          style={{
            ...baseStyle,
            ...styleProps,
            opacity: animatedValue,
            borderRadius: interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 0, 50] }),
            marginLeft: interpolate({ inputRange: [0, 0.7, 1], outputRange: [0, 200, 400] }),
          }}
        />
        <div>
          <Button onClick={() => start()}>Start</Button>
        </div>
      </>
    )
  })
