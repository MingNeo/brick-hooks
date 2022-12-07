import { useState } from 'react'
import { Animated } from 'react-native-web'
import useAnimate from './index'

const baseStyle = {
  width: 50,
  height: 50,
  backgroundColor: 'powderblue',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export function Demo1({ options }) {
  const [styleProps, { start }] = useAnimate({
    from: {
      opacity: 0,
      marginLeft: 0,
      width: 50,
      height: 50,
      rotateZ: '0deg',
    },
    to: {
      opacity: 1,
      marginLeft: 300,
      width: 200,
      height: 200,
      rotateZ: '200deg',
    },
    ...options,
  })
  return (
    <>
      <div>
        <button onClick={() => start()}>Start</button>
      </div>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
    </>
  )
}

const easingList = ['bounce', 'linear', 'ease', 'quad', 'cubic', 'sin', 'circle', 'exp', 'in', 'out', 'inOut']
export function Demo2() {
  const [easing, setEasing] = useState('bounce')
  return (
    <>
      <div>
        <select value={easing} onChange={(e) => setEasing(e.target.value)}>
          {easingList.map((v) => (
            <option value={v}>{v}</option>
          ))}
        </select>
      </div>
      <Demo1
        key={easing}
        options={{
          to: {
            opacity: 1,
            marginLeft: 300,
            width: 200,
            height: 200,
          },
          duration: 500,
          autoRun: false,
          delay: 100,
          easing,
        }}
      />
    </>
  )
}

export function Demo3() {
  const [styleProps, { start }] = useAnimate({
    from: {
      opacity: 0,
      marginLeft: 0,
      width: 50,
      height: 50,
    },
    to: [
      {
        opacity: 1,
        marginLeft: 500,
        width: 200,
        height: 200,
      },
      {
        opacity: 0,
        marginLeft: 0,
        width: 50,
        height: 50,
      },
    ],
    loop: 1,
    duration: 1000,
    autoRun: false,
  })
  return (
    <>
      <div>
        <button onClick={() => start()}>Start</button>
      </div>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
    </>
  )
}

export function RangeDemo() {
  const [styleProps, { start }] = useAnimate({
    from: {
      opacity: 0,
      marginLeft: 0,
      width: 50,
      height: 50,
    },
    range: [0, 0.2, 0.8, 1],
    to: [
      {
        opacity: 1,
        marginLeft: 500,
        width: 200,
        height: 200,
      },
      {
        opacity: 1,
        marginLeft: 500,
        width: 200,
        height: 200,
      },
      {
        opacity: 0,
        marginLeft: 0,
        width: 50,
        height: 50,
      },
    ],
    loop: 1,
    duration: 1000,
    autoRun: false,
  })
  return (
    <>
      <div>
        <button onClick={() => start()}>Start</button>
      </div>
      <Animated.View style={{ ...baseStyle, ...styleProps }} />
    </>
  )
}

export function DemoLoop() {
  const [styleProps] = useAnimate({
    from: {
      opacity: 1,
      backgroundColor: '#ffaaee',
    },
    to: [
      {
        opacity: 1,
        backgroundColor: '#ffaaee',
      },
      {
        opacity: 0,
        backgroundColor: 'rgb(14,26,19)',
      },
    ],
    loop: -1,
    duration: 1000,
  })
  return <Animated.View style={{ ...baseStyle, ...styleProps }} />
}

export function AnimatedValueDemo() {
  const [styleProps, { start, animatedValue, interpolate }] = useAnimate({
    from: {
      width: 50,
      height: 50,
    },
    range: [0, 0.7, 1],
    to: [
      {
        width: 200,
        height: 200,
      },
      {
        width: 50,
        height: 50,
      },
    ],
    loop: 1,
    duration: 1000,
    delay: 100,
    autoRun: false,
  })
  return (
    <>
      <div>
        <button onClick={() => start()}>Start</button>
      </div>
      <Animated.View
        style={{
          ...baseStyle,
          ...styleProps,
          opacity: animatedValue,
          borderRadius: interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 50],
          }),
          marginLeft: interpolate({
            inputRange: [0, 0.7, 1],
            outputRange: [0, 200, 400],
          }),
        }}
      />
    </>
  )
}

export default function Demo() {
  return (
    <div>
      <h3>Demo1</h3>
      <Demo1 />
      <h3>Demo2</h3>
      <Demo2 />
      <h3>Demo3</h3>
      <Demo3 />
      <h3>range</h3>
      <RangeDemo />
      <h3>loop</h3>
      <DemoLoop />
      <h3>custom interpolate</h3>
      <AnimatedValueDemo />
    </div>
  )
}
