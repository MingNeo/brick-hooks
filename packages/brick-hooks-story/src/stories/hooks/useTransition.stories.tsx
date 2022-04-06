import React, { useState } from 'react'
import { Button } from '@storybook/react/demo'
import { Animated, Easing } from 'react-native'
import { useToggle, useInterval } from 'brick-hooks'
import useTransition from 'brick-hooks-native/src/useTransition'
import { shuffle } from 'lodash'

export default {
  title: 'useTransition',
}

export const UseTransition = () => {
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
      <div>
        <Button onClick={() => toggleVisible()}>Fade {visible ? 'Out' : 'In'}</Button>
      </div>
    </>
  )
}

UseTransition.story = {
  name: 'useTransition',
  // argTypes: {
  //   loop: {
  //     description: '设置loop',
  //     options: [1, 2, -1],
  //     control: {
  //       type: 'select',
  //     },
  //   },
  // },
  // args: {
  //   rootMargin: 0
  // }
}

// 在两个组件间切换
export const Demo1 = () => {
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
            }}
          ></div>
        </Transition>
        <Transition from={to} to={from} visible={visible} style={{ position: 'absolute' }}>
          <div
            style={{
              width: 200,
              height: 200,
              background: 'url(https://img0.baidu.com/it/u=3927459320,2138990686&fm=26&fmt=auto)',
            }}
          ></div>
        </Transition>
      </div>
      <div>
        <Button onClick={() => toggleVisible()}>toggle</Button>
      </div>
    </>
  )
}

Demo1.story = {
  name: '在两个组件间切换',
}

// 组合多个组件过渡动画
export const Demo2 = () => {
  const [visible, toggleVisible] = useToggle(true)
  const [compAStyle] = useTransition({
    from: { opacity: 0, left: 0, width: 400, height: 0 },
    to: { opacity: 1, width: 400, height: 400 },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible,
    // delay: 100,
  })

  const [compBStyle] = useTransition({
    from: { opacity: 0, top: 0, left: 400, width: 50, height: 50 },
    to: { opacity: 1, left: 0, width: 200, height: 200 },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible,
    // delay: 100,
  })

  return (
    <div style={{ position: 'relative', height: 450 }}>
      <Animated.View style={{ position: 'absolute', backgroundColor: 'powderblue', ...compAStyle }} />
      <Animated.View style={{ position: 'absolute', backgroundColor: 'red', ...compBStyle }} />
      <div style={{ position: 'absolute', top: 400 }}>
        <Button onClick={() => toggleVisible()}>toggle</Button>
      </div>
    </div>
  )
}

Demo2.story = {
  name: '组合多个组件过渡动画',
}

const styles = [
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
  'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
]

const list = new Array(7).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
  styleColor: styles[i],
}))

// 组合多个组件过渡动画2
export const Demo3 = () => {
  const [rows, set] = useState(list)

  useInterval(() => set(shuffle), 2000)

  const Item = (props) => {
    const [style] = useTransition({
      from: { opacity: 0, top: props.value * 60 },
      to: { opacity: 1, top: props.index * 60 },
      autoRun: true,
    })

    return (
      <Animated.View
        style={{ position: 'absolute', background: props.styleColor, width: '100%', height: 50, ...style }}
      >
        <div>{props.value}</div>
      </Animated.View>
    )
  }

  return (
    <div style={{ position: 'relative', height: 450 }}>
      {rows.map((v, index) => (
        <Item key={v.id} {...v} index={index} />
      ))}
    </div>
  )
}

Demo3.story = {
  name: '组合多个组件过渡动画2',
}
