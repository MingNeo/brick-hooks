import { Animated, Easing } from 'react-native'
import { useToggle, useInterval } from 'brick-hooks'
import useTransition from '.'

export function Demo1() {
  const [visible, toggleVisible] = useToggle(true)
  const [style] = useTransition({
    from: {
      opacity: 0,
      marginLeft: 0,
      width: 50,
      height: 50,
    },
    to: {
      opacity: 1,
      marginLeft: 500,
      width: 200,
      height: 200,
    },
    loop: 1,
    duration: 300,
    autoRun: true,
    reverse: !visible,
  })
  return (
    <>
      <Animated.View
        style={{
          backgroundColor: 'powderblue',
          ...style,
        }}
      />
      <div>
        <button onClick={() => toggleVisible()}>Fade {visible ? 'Out' : 'In'}</button>
      </div>
    </>
  )
}

// 在两个组件间切换
export function Demo2() {
  function Transition({ visible, from, to, style, children }: any) {
    const [transStyle] = useTransition({
      from,
      to,
      loop: 1,
      duration: 1000,
      autoRun: true,
      reverse: !visible,
      // delay: 100,
    })

    return <Animated.View style={{ ...style, ...transStyle }}>{children}</Animated.View>
  }

  const from = { opacity: 0 }
  const to = { opacity: 1 }
  const [visible, toggleVisible] = useToggle(true)

  return (
    <>
      <div style={{ position: 'relative', height: 200 }}>
        <Transition from={from} to={to} visible={visible} style={{ position: 'absolute' }}>
          <div
            style={{
              width: 200,
              height: 200,
              background:
                'url(https://img1.baidu.com/it/u=3796593454,4087161325&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500)',
            }}></div>
        </Transition>
        <Transition from={to} to={from} visible={visible} style={{ position: 'absolute' }}>
          <div
            style={{
              width: 200,
              height: 200,
              background: 'url(https://img0.baidu.com/it/u=3927459320,2138990686&fm=26&fmt=auto)',
            }}></div>
        </Transition>
      </div>
      <div>
        <button onClick={() => toggleVisible()}>toggle</button>
      </div>
    </>
  )
}
// 组合多个组件过渡动画
export function Demo3() {
  const [visible, toggleVisible] = useToggle(true)
  const [compAStyle] = useTransition({
    from: {
      opacity: 0,
      left: 0,
      width: 400,
      height: 0,
    },
    to: {
      opacity: 1,
      width: 400,
      height: 400,
    },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible, // delay: 100,
  })
  const [compBStyle] = useTransition({
    from: {
      opacity: 0,
      top: 0,
      left: 400,
      width: 50,
      height: 50,
    },
    to: {
      opacity: 1,
      left: 0,
      width: 200,
      height: 200,
    },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible, // delay: 100,
  })
  return (
    <div
      style={{
        position: 'relative',
        height: 450,
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          backgroundColor: 'powderblue',
          ...compAStyle,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          ...compBStyle,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 400,
        }}>
        <button onClick={() => toggleVisible()}>toggle</button>
      </div>
    </div>
  )
}
