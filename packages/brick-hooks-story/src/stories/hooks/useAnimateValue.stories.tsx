import React from 'react'
import { Animated, Easing } from 'react-native'
import { Button } from '@storybook/react/demo'
import { useAnimateValue } from 'brick-hooks-native'

export default {
  title: 'useAnimateValue',
}

export const Default = () => {
  const { animatedValue, interpolate, start } = useAnimateValue({
    from: 0,
    to: 1,
    loop: 1,
    duration: 1000,
    autoRun: false,
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
    <>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'powderblue',
          ...style,
        }}
      />
      <div>
        <Button onClick={() => start()}>Fade In</Button>
      </div>
    </>
  )
}

Default.story = {
  name: 'default',
}

export const UseAnimateValueWithAnimated = () => {
  const { animatedValue, start } = useAnimateValue({
    from: 0,
    to: 1,
    loop: 1,
    duration: 1000,
    autoRun: false,
    // delay: 100
  })

  // 与react native Animated原生写法结合使用
  const fadeOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start()
  }

  const style = {
    opacity: animatedValue,
  }

  return (
    <>
      <Animated.View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'powderblue',
          ...style,
        }}
      />
      <div>
        <Button onClick={() => start()}>Fade In</Button>
        <Button onClick={() => fadeOut()}>Fade Out</Button>
      </div>
    </>
  )
}

UseAnimateValueWithAnimated.story = {
  name: 'useAnimateValue: 搭配Animated原生写法',
}
