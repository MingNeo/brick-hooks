import React, { useState } from 'react'
import { shuffle } from 'lodash'
import { Animated } from 'react-native'
import { Demo1, Demo2, Demo3 } from './../../../../native/src/useTransition/demo'
import { useInterval } from '../../../../common/src'
import useTransition from '../../../../native/src/useTransition'

export default {
  title: 'useTransition',
}

export const UseTransition = () => <Demo1 />

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
const StoryDemo2 = () => <Demo2 />

StoryDemo2.story = {
  name: '在两个组件间切换',
}

// 组合多个组件过渡动画

export const StoryDemo3 = () => <Demo3 />

StoryDemo3.story = {
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
})) // 组合多个组件过渡动画2

const Demo4 = () => {
  const [rows, set] = useState(list)
  useInterval(() => set(shuffle), 2000)

  const Item = (props) => {
    const [style] = useTransition({
      from: {
        opacity: 0,
        top: props.value * 60,
      },
      to: {
        opacity: 1,
        top: props.index * 60,
      },
      autoRun: true,
    })
    return (
      <Animated.View
        style={{
          position: 'absolute',
          background: props.styleColor,
          width: '100%',
          height: 50,
          ...style,
        }}>
        <div>{props.value}</div>
      </Animated.View>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        height: 450,
      }}>
      {rows.map((v, index) => (
        <Item key={v.id} {...v} index={index} />
      ))}
    </div>
  )
}

export const StoryDemo4 = () => <Demo4 />
StoryDemo4.story = {
  name: '组合多个组件过渡动画2',
}
